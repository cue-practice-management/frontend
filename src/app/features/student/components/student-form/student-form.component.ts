import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CreateStudentRequest, Student, UpdateStudentRequest } from '../../student.model';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Observable } from 'rxjs';
import { StudentService } from '../../services/student.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";
import { AcademicProgramService } from '@/features/academic-program/services/academic-program.service';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { MIN_CURRENT_SEMESTER } from '../../student.constants';
import { Gender } from '@/core/enums/gender.enum';
import { DocumentType } from '@/core/enums/document-type.enum';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent extends FormSubmitComponent<CreateStudentRequest | UpdateStudentRequest, Student> implements OnInit, OnChanges {
  @Input() student!: Student | null;
  studentFormConfig!: DynacmicFormConfig;

  constructor(
    private studentService: StudentService,
    private academicProgramService: AcademicProgramService,
    private modalRef: ModalRef
  ) {
    super();
  }


  ngOnInit(): void {
    this.updateFormConfig();
  }

  ngOnChanges(): void {
    this.updateFormConfig();
  }

  private updateFormConfig(): void {
    this.studentFormConfig = {
      title: this.student ? 'Editar estudiante' : 'Crear estudiante',
      buttonLabel: this.student ? 'Guardar cambios' : 'Crear estudiante',
      sections: [
        {
          title: 'Información del estudiante',
          fields: [
            {
              key: 'firstName',
              label: 'Nombre',
              value: this.student?.firstName,
              type: FormFieldType.TEXT,
              placeholder: 'Nombre del estudiante',
              validators: [Validators.required]
            },
            {
              key: 'lastName',
              label: 'Apellido',
              value: this.student?.lastName,
              type: FormFieldType.TEXT,
              placeholder: 'Apellido del estudiante',
              validators: [Validators.required]
            },
            {
              key: 'email',
              label: 'Correo electrónico',
              value: this.student?.email,
              type: FormFieldType.TEXT,
              placeholder: 'Correo electrónico del estudiante',
              validators: [Validators.required, Validators.email]
            },
            {
              key: 'typeOfDocument',
              label: 'Tipo de documento',
              value: this.student?.typeOfDocument,
              type: FormFieldType.SELECT,
              selectOptions: [
                { label: 'Cédula de ciudadanía', value: DocumentType.CC },
                { label: 'Tarjeta de identidad', value: DocumentType.TI },
                { label: 'Pasaporte', value: DocumentType.PASSPORT },
                { label: 'Cédula de extranjería', value: DocumentType.CE },
              ],
              placeholder: 'Selecciona un tipo de documento',
              validators: [Validators.required]
            },
            {
              key: 'documentNumber',
              label: 'Número de documento',
              value: this.student?.documentNumber,
              type: FormFieldType.TEXT,
              placeholder: 'Número de documento del estudiante',
              validators: [Validators.required]
            },
            {
              key: 'phoneNumber',
              label: 'Número de teléfono',
              value: this.student?.phoneNumber,
              type: FormFieldType.TEXT,
              placeholder: 'Número de teléfono del estudiante'
            },
            {
              key: 'gender',
              label: 'Género',
              value: this.student?.gender,
              type: FormFieldType.SELECT,
              placeholder: 'Selecciona un género',
              selectOptions: [
                { label: 'Masculino', value: Gender.MALE },
                { label: 'Femenino', value: Gender.FEMALE },
                { label: 'Otro', value: Gender.OTHER },
              ],
              validators: [Validators.required]
            },

          ]
        },
        {
          title: 'Información académica',
          fields: [
            {
              key: 'academicProgram',
              label: 'Programa académico',
              value: this.student?.academicProgram._id,
              type: FormFieldType.TYPEAHEAD,
              placeholder: 'Busca un programa académico...',
              typeaheadConfig: this.academicProgramTypeaheadConfig,
              validators: [Validators.required]
            },
            {
              key: 'currentSemester',
              label: 'Semestre actual',
              value: this.student?.currentSemester,
              type: FormFieldType.NUMBER,
              placeholder: 'Semestre actual del estudiante',
              validators: [Validators.required, Validators.min(MIN_CURRENT_SEMESTER)]
            }
          ]
        }
      ]
    };
  }

  protected override submitData(data: UpdateStudentRequest | CreateStudentRequest): Observable<Student> {
    if (this.student) {
      return this.studentService.updateStudent(this.student._id, data);
    } else {
      return this.studentService.createStudent(data as CreateStudentRequest);
    }
  }

  override onSuccess = (student: Student): void => {
    this.modalRef.close(student);
  };

  onFormSubmit(formValue: CreateStudentRequest): void {
    this.submitForm(formValue);
  }

  get academicProgramTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca un programa académico...',
      retrieveOptions: (term: string) => this.academicProgramService.getTypeaheadAcademicPrograms(term),
    }
    if (this.student) {
      config.retrieveOptionsFromExistingValue = () => this.academicProgramService.getTypeaheadAcademicPrograms(this.student!.academicProgram.name);
    }

    return config;
  }
}
