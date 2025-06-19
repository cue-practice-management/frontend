import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CreateStudentCompanyLinkingProcess, StudentCompanyLinkingProcess, UpdateStudentCompanyLinkingProcessStatus } from '../../student-company-linking-process.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { StudentService } from '@/features/student/services/student.service';
import { CompanyService } from '@/features/company/services/company.service';
import { Observable } from 'rxjs';
import { StudentCompanyLinkingProcessService } from '../../services/student-company-linking-process.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";
import { STUDENT_COMPANY_LINKING_PROCESS_STATUS_SELECT_OPTIONS } from '@/core/constants/select-options.constants';
import { Router } from '@angular/router';
import { StudentCompanyLinkingProcessStatus } from '../../student-company-linking-process.enums';

@Component({
  selector: 'app-student-company-linking-process-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './student-company-linking-process-form.component.html',
  styleUrl: './student-company-linking-process-form.component.scss'
})
export class StudentCompanyLinkingProcessFormComponent extends FormSubmitComponent<CreateStudentCompanyLinkingProcess | UpdateStudentCompanyLinkingProcessStatus, StudentCompanyLinkingProcess> implements OnInit, OnChanges {
  @Input() studentCompanyLinkingProcess!: StudentCompanyLinkingProcess | null;
  studentCompanyLinkingProcessFormConfig!: DynacmicFormConfig;

  constructor(
    private studentCompanyLinkingProcessService: StudentCompanyLinkingProcessService,
    private studentService: StudentService,
    private companyService: CompanyService,
    private modalRef: ModalRef,
    private router: Router
  ) {
    super();
  };


  ngOnInit(): void {
    this.updateFormConfig();
  }

  ngOnChanges(): void {
    this.updateFormConfig();
  }

  private updateFormConfig(): void {
    const isEdit = !!this.studentCompanyLinkingProcess;

    const baseFields = [
      {
        key: 'observations',
        label: 'Observaciones',
        value: this.studentCompanyLinkingProcess?.observations ?? '',
        type: FormFieldType.TEXT,
        placeholder: 'Observaciones adicionales (opcional)',
      }
    ];

    const creationFields = [
      {
        key: 'student',
        label: 'Estudiante',
        value: '',
        type: FormFieldType.TYPEAHEAD,
        placeholder: 'Selecciona un estudiante...',
        typeaheadConfig: this.studentTypeaheadConfig,
        validators: [Validators.required],
      },
      {
        key: 'company',
        label: 'Empresa',
        value: '',
        type: FormFieldType.TYPEAHEAD,
        placeholder: 'Selecciona una empresa...',
        typeaheadConfig: this.companyTypeaheadConfig,
        validators: [Validators.required],
      }
    ];

    const editFields = [
      {
        key: 'status',
        label: 'Estado',
        value: this.studentCompanyLinkingProcess?.status ?? '',
        type: FormFieldType.SELECT,
        placeholder: 'Selecciona un estado',
        selectOptions: STUDENT_COMPANY_LINKING_PROCESS_STATUS_SELECT_OPTIONS,
        validators: [Validators.required],
      }
    ];

    this.studentCompanyLinkingProcessFormConfig = {
      title: isEdit ? 'Actualizar proceso de vinculación' : 'Crear proceso de vinculación',
      buttonLabel: isEdit ? 'Guardar cambios' : 'Crear proceso',
      sections: [
        {
          title: 'Información del proceso',
          fields: isEdit
            ? [...editFields, ...baseFields]
            : [...creationFields, ...baseFields],
        }
      ]
    };
  }

  protected override submitData(
    data: CreateStudentCompanyLinkingProcess | UpdateStudentCompanyLinkingProcessStatus
  ): Observable<StudentCompanyLinkingProcess> {
    if (this.studentCompanyLinkingProcess) {
      return this.studentCompanyLinkingProcessService.updateStudentCompanyLinkingProcessStatus(
        this.studentCompanyLinkingProcess._id,
        data as UpdateStudentCompanyLinkingProcessStatus
      );
    } else {
      return this.studentCompanyLinkingProcessService.createStudentCompanyLinkingProcess(
        data as CreateStudentCompanyLinkingProcess
      );
    }
  }

  override onSuccess = (
    result: StudentCompanyLinkingProcess
  ): void => {
    this.modalRef.close(result);

    if (result.status == StudentCompanyLinkingProcessStatus.ACCEPTED) {
      this.router.navigate(['admin/student-company-contracts']);
    }
  };

  onFormSubmit(formValue: CreateStudentCompanyLinkingProcess): void {
    this.submitForm(formValue);
  }

  get studentTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca un estudiante...',
      retrieveOptions: (term: string) =>
        this.studentService.getStudentsTypeahead(term),
    };

    if (this.studentCompanyLinkingProcess?.student) {
      config.retrieveOptionsFromExistingValue = () =>
        this.studentService.getStudentsTypeahead(
          this.studentCompanyLinkingProcess!.student._id
        );
    }

    return config;
  }

  get companyTypeaheadConfig(): TypeaheadConfig {
    const config: TypeaheadConfig = {
      placeholder: 'Busca una empresa...',
      retrieveOptions: (term: string) =>
        this.companyService.getTypeaheadCompanies(term),
    };

    if (this.studentCompanyLinkingProcess?.company) {
      config.retrieveOptionsFromExistingValue = () =>
        this.companyService.getTypeaheadCompanies(
          this.studentCompanyLinkingProcess!.company._id
        );
    }

    return config;
  }


}
