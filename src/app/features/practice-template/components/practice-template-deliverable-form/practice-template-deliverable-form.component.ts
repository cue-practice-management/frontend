import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { CreatePracticeTemplateDeliverableRequest, PracticeTemplateDeliverable, UpdatePracticeTemplateDeliverableRequest } from '../../practice-template.models';
import { PracticeTemplateDeliverablesService } from '../../services/practice-template-deliverables.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { Validators } from '@angular/forms';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from "../../../../shared/components/organisms/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-practice-template-deliverable-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './practice-template-deliverable-form.component.html',
  styleUrl: './practice-template-deliverable-form.component.scss'
})
export class PracticeTemplateDeliverableFormComponent extends FormSubmitComponent<CreatePracticeTemplateDeliverableRequest | UpdatePracticeTemplateDeliverableRequest, PracticeTemplateDeliverable> implements OnInit {
  @Input() templateId!: string;
  @Input() deliverable: PracticeTemplateDeliverable | null = null;
  practiceTemplateDeliverableFormConfig!: DynacmicFormConfig;

  constructor(
    private readonly practiceTemplateDeliverableService: PracticeTemplateDeliverablesService,
    private readonly modalRef: ModalRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.buildFormConfig();
  }

  private buildFormConfig(): void {
    const deliverable = this.deliverable;

    this.practiceTemplateDeliverableFormConfig = {
      title: deliverable ? 'Editar entregable' : 'Crear entregable de práctica',
      buttonLabel: deliverable ? 'Guardar cambios' : 'Crear entregable',
      sections: [
        {
          title: 'Información del entregable',
          fields: [
            {
              key: 'title',
              label: 'Nombre del entregable',
              value: deliverable ? deliverable.title : '',
              type: FormFieldType.TEXT,
              validators: [Validators.required],
            },
            {
              key: 'description',
              label: 'Descripción',
              value: deliverable ? deliverable.description : '',
              type: FormFieldType.TEXTAREA,
              validators: [Validators.required],
            },
            {
              key: 'estimatedDueOffsetDays',
              label: 'Días estimados para la entrega',
              value: deliverable ? deliverable.estimatedDueOffsetDays : 0,
              type: FormFieldType.NUMBER,
              validators: [Validators.required, Validators.min(0)],
            }
          ]
        }
      ]
    };
  }

  onFormSubmit(formData: CreatePracticeTemplateDeliverableRequest | UpdatePracticeTemplateDeliverableRequest): void {
    this.submitForm(formData);
  }

  protected override submitData(data: CreatePracticeTemplateDeliverableRequest | UpdatePracticeTemplateDeliverableRequest): Observable<PracticeTemplateDeliverable> {
    if (this.deliverable) {
      return this.practiceTemplateDeliverableService.updatePracticeTemplateDeliverable(this.templateId, this.deliverable._id, data as UpdatePracticeTemplateDeliverableRequest);
    } else {
      return this.practiceTemplateDeliverableService.createPracticeTemplateDeliverable(this.templateId, data as CreatePracticeTemplateDeliverableRequest);
    }
  }

  protected override onSuccess(data: PracticeTemplateDeliverable): void {
    this.modalRef.close(data);
  }
}
