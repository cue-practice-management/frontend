import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { CreatePracticeTemplateRequest, PracticeTemplate, UpdatePracticeTemplateRequest } from '../../practice-template.models';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { PracticeTemplateService } from '../../services/practice-template.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from "@organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-practice-template-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './practice-template-form.component.html',
  styleUrl: './practice-template-form.component.scss'
})
export class PracticeTemplateFormComponent extends FormSubmitComponent<CreatePracticeTemplateRequest | UpdatePracticeTemplateRequest, PracticeTemplate> implements OnInit {
  @Input() template: PracticeTemplate | null = null;
  practiceTemplateFormConfig!: DynacmicFormConfig;

  constructor(
    private readonly practiceTemplateService: PracticeTemplateService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.buildFormConfig();
  }

  private buildFormConfig(): void {
    const template = this.template;

    this.practiceTemplateFormConfig = {
      title: template ? 'Editar plantilla de práctica' : 'Crear plantilla de práctica',
      buttonLabel: template ? 'Guardar cambios' : 'Crear plantilla',
      sections: [
        {
          title: 'Información de la plantilla',
          fields: [
            {
              key: 'name',
              label: 'Nombre de la plantilla',
              value: template ? template.name : '',
              type: FormFieldType.TEXT,
              validators: [Validators.required],
            },
            {
              key: 'description',
              label: 'Descripción',
              value: template ? template.description : '',
              type: FormFieldType.TEXTAREA,
              validators: [Validators.required],
            }
          ]
        }
      ]
    };
  }

  onFormSubmit(formData: CreatePracticeTemplateRequest | UpdatePracticeTemplateRequest): void {
    this.submitForm(formData);
  }

  protected override submitData(data: CreatePracticeTemplateRequest | Partial<Omit<PracticeTemplate, 'createdAt' | 'updatedAt' | 'deliverables' | 'formats'>>): Observable<PracticeTemplate> {
    if (this.template) {
      return this.practiceTemplateService.updatePracticeTemplate(this.template._id, data as UpdatePracticeTemplateRequest);
    } else {
      return this.practiceTemplateService.createPracticeTemplate(data as CreatePracticeTemplateRequest);
    }
  }

  protected override onSuccess(data: PracticeTemplate): void {
    this.modalRef.close(data);
  }

}
