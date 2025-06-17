import { PracticeProcessDeliverable, PracticeProcessDetail } from '@/features/practice-process/practice-process.models';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusBadgeComponent } from "@atoms/status-badge/status-badge.component";
import { CommonModule } from '@angular/common';
import { PracticeProcessDetailPermissions } from '@/features/practice-process/pages/practice-process-detail-page/practice-process-detail-page.models';
import { ButtonComponent } from "@atoms/button/button.component";
import { ModalService } from '@/core/services/modal.service';
import { SubmitPracticeProcessDeliverableFormComponent } from '../../submit-practice-process-deliverable-form/submit-practice-process-deliverable-form.component';
import { Calendar, CalendarIcon, CheckCircleIcon, FileDownIcon, FileTextIcon, LucideAngularModule, MessageCircleIcon } from 'lucide-angular';
import { PracticeProcessDeliverableStatus } from '@/features/practice-process/practice-process.enums';

@Component({
  selector: 'app-practice-process-detail-deliverables',
  standalone: true,
  imports: [StatusBadgeComponent, CommonModule, ButtonComponent, LucideAngularModule],
  templateUrl: './practice-process-detail-deliverables.component.html',
  styleUrl: './practice-process-detail-deliverables.component.scss'
})
export class PracticeProcessDetailDeliverablesComponent {
  @Input() practice!: PracticeProcessDetail;
  @Input() permissions!: PracticeProcessDetailPermissions;


  @Output() deliverableSubmitted = new EventEmitter();

  constructor(
    private readonly modalService: ModalService
  ) { }

  onSubmit(deliverableId: string) {
    this.modalService.open(SubmitPracticeProcessDeliverableFormComponent, {
      data: {
        practiceProcessId: this.practice._id,
        deliverableId: deliverableId
      }
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.deliverableSubmitted.emit();
      }
    });
  }

  onGrade(deliverableId: string) {
    // Abrir modal de calificación
  }

  isDueDatePassedAndPending(deliverable: PracticeProcessDeliverable): boolean {
    return new Date(deliverable.dueDate) < new Date() && deliverable.status === PracticeProcessDeliverableStatus.PENDING;
  }

  calendarIcon = CalendarIcon;
  checkIcon = CheckCircleIcon;
  fileIcon = FileTextIcon;
  commentIcon = MessageCircleIcon;
  downloadIcon = FileDownIcon;
}
