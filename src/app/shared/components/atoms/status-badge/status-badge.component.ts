import { PRACTICE_PROCESS_DELIVERABLE_STATUS_LABELS, PRACTICE_PROCESS_FOLLOW_UP_STATUS_LABELS, PRACTICE_PROCESS_STATUS_LABELS, PracticeProcessDeliverableStatus, PracticeProcessFollowUpStatus, PracticeProcessStatus } from '@/features/practice-process/practice-process.enums';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss'
})
export class StatusBadgeComponent {
  @Input() status!: PracticeProcessStatus | PracticeProcessDeliverableStatus | PracticeProcessFollowUpStatus;
  @Input() type!: 'practice' | 'deliverable' | 'followUp';
  @Input() label?: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get finalLabel(): string {
    if (this.label) return this.label;

    switch (this.type) {
      case 'practice':
        return PRACTICE_PROCESS_STATUS_LABELS[this.status as PracticeProcessStatus] || this.status;
      case 'deliverable':
        return PRACTICE_PROCESS_DELIVERABLE_STATUS_LABELS[this.status as PracticeProcessDeliverableStatus] || this.status;
      case 'followUp':
        return PRACTICE_PROCESS_FOLLOW_UP_STATUS_LABELS[this.status as PracticeProcessFollowUpStatus] || this.status;
      default:
        return this.status;
    }
  }
}