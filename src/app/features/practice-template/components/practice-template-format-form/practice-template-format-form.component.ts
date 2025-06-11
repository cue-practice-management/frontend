import { Component, Input, OnInit } from '@angular/core';
import { CreatePracticeTemplateFormatRequest, PracticeTemplateFormat, UpdatePracticeTemplateFormatRequest } from '../../practice-template.models';
import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { PracticeTemplateFormatService } from '../../services/practice-template-format.service';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-practice-template-format-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './practice-template-format-form.component.html',
  styleUrl: './practice-template-format-form.component.scss'
})
export class PracticeTemplateFormatFormComponent extends FormSubmitComponent<CreatePracticeTemplateFormatRequest | UpdatePracticeTemplateFormatRequest, PracticeTemplateFormat> implements OnInit {
  @Input() templateId!: string;
  @Input() format: PracticeTemplateFormat | null = null;
  practiceTemplateFormatFormConfig!: DynacmicFormConfig;

  constructor(
    private readonly practiceTemplateFormatService: PracticeTemplateFormatService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.buildFormConfig();
  }

  private buildFormConfig(): void {
    const format = this.format;

    this.practiceTemplateFormatFormConfig = {
      title: format ? 'Editar formato' : 'Crear formato de práctica',
      buttonLabel: format ? 'Guardar cambios' : 'Crear formato',
      sections: [
        {
          title: 'Información del formato',
          fields: [
            {
              key: 'name',
              label: 'Nombre del formato',
              value: format ? format.name : '',
              type: FormFieldType.TEXT,
              validators: [Validators.required],
            },
            {
              key: 'description',
              label: 'Descripción del formato',
              value: format ? format.description : '',
              type: FormFieldType.TEXTAREA,
              validators: [Validators.required],
            },
            {
              key: 'file',
              label: 'Archivo del formato',
              type: FormFieldType.FILE,
              fileConfig: {
                accept: '/*',
              },
              validators: [Validators.required],
            }
          ],
        },
      ],
    };
  }

  onFormSubmit(formData: CreatePracticeTemplateFormatRequest | UpdatePracticeTemplateFormatRequest): void {
    this.submitForm(formData);
  }

  protected override submitData(data: CreatePracticeTemplateFormatRequest | UpdatePracticeTemplateFormatRequest): Observable<PracticeTemplateFormat> {
    if (this.format) {
      return this.practiceTemplateFormatService.updatePracticeTemplateFormat(this.templateId, this.format._id, data as UpdatePracticeTemplateFormatRequest);
    } else {
      return this.practiceTemplateFormatService.createPracticeTemplateFormat(this.templateId, data as CreatePracticeTemplateFormatRequest);
    }
  }

  protected override onSuccess(data: PracticeTemplateFormat): void {
    this.modalRef.close(data);
  }

}
