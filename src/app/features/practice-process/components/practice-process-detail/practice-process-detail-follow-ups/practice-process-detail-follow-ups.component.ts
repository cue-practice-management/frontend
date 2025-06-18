import { ModalService } from '@/core/services/modal.service';
import { PracticeProcessDetailPermissions } from '@/features/practice-process/pages/practice-process-detail-page/practice-process-detail-page.models';
import { PracticeProcessDetail, PracticeProcessFollowUp } from '@/features/practice-process/practice-process.models';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BanIcon, CalendarIcon, CheckCircleIcon, CircleFadingPlus, LinkIcon, LucideAngularModule, MapPinIcon, MessageCircleIcon } from 'lucide-angular';
import { StatusBadgeComponent } from "@atoms/status-badge/status-badge.component";
import { ButtonComponent } from "@atoms/button/button.component";
import { PracticeProcessFollowUpStatus } from '@/features/practice-process/practice-process.enums';
import { CancelPracticeProcessFollowUpFormComponent } from '../../cancel-practice-process-follow-up-form/cancel-practice-process-follow-up-form.component';
import { PRACTICE_PROCESS_FOLLOW_UP_SORT_PRIORITY } from '@/features/practice-process/practice-process.constants';
import { SchedulePracticeProcessFollowUpFormComponent } from '../../schedule-practice-process-follow-up-form/schedule-practice-process-follow-up-form.component';
import { CompletePracticeProcessFollowUpFormComponent } from '../../complete-practice-process-follow-up-form/complete-practice-process-follow-up-form.component';

@Component({
  selector: 'app-practice-process-detail-follow-ups',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, StatusBadgeComponent, ButtonComponent],
  templateUrl: './practice-process-detail-follow-ups.component.html',
  styleUrl: './practice-process-detail-follow-ups.component.scss'
})
export class PracticeProcessDetailFollowUpsComponent {
  @Input() practice!: PracticeProcessDetail;
  @Input() permissions!: PracticeProcessDetailPermissions;

  @Output() followUpScheduled = new EventEmitter<void>();
  @Output() followUpCompleted = new EventEmitter<void>();
  @Output() followUpMissed = new EventEmitter<void>();
  @Output() followUpCancelled = new EventEmitter<void>();

  constructor(
    private readonly modalService: ModalService
  ) { }

  calendarIcon = CalendarIcon;
  checkIcon = CheckCircleIcon;
  locationIcon = MapPinIcon;
  linkIcon = LinkIcon;
  commentIcon = MessageCircleIcon;
  cancelIcon = BanIcon;
  circleAddIcon = CircleFadingPlus;

  onScheduleFollowUp() {
    this.modalService.open(SchedulePracticeProcessFollowUpFormComponent, {
      data: {
        practiceProcessId: this.practice._id
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.followUpCancelled.emit();
      }
    });

  }

  onMarkAsCompleted(followUpId: string) {
    this.modalService.open(CompletePracticeProcessFollowUpFormComponent, {
      data: {
        practiceProcessId: this.practice._id,
        followUpId
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.followUpCompleted.emit();
      }
    });
  }

  onMarkAsMissed(followUpId: string) {
    // this.modalService.open(MissFollowUpFormComponent, {
    //   data: {
    //     practiceProcessId: this.practice._id,
    //     followUpId
    //   }
    // }).afterClosed().subscribe(result => {
    //   if (result) {
    //     this.followUpMissed.emit();
    //   }
    // });
  }

  onMarkAsCancelled(followUpId: string) {
    this.modalService.open(CancelPracticeProcessFollowUpFormComponent,
      {
        data: {
          practiceProcessId: this.practice._id,
          followUpId
        }
      }
    ).afterClosed().subscribe(result => {
      if (result) {
        this.followUpCancelled.emit();
      }
    })
  }

  get followUps(): PracticeProcessFollowUp[] {
    return this.practice.followUps.slice().sort((a, b) => {
      const statusDiff = PRACTICE_PROCESS_FOLLOW_UP_SORT_PRIORITY[a.status] - PRACTICE_PROCESS_FOLLOW_UP_SORT_PRIORITY[b.status];
      if (statusDiff !== 0) return statusDiff;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }

  canMarkAsCompleted(followUp: PracticeProcessFollowUp): boolean {
    return this.permissions.canMarkAsCompletedFollowUps && followUp.status === PracticeProcessFollowUpStatus.SCHEDULED && new Date() > new Date(followUp.date);
  }

  canMarkAsMissed(followUp: PracticeProcessFollowUp): boolean {
    return this.permissions.canMarkAsMissedFollowUps && followUp.status === PracticeProcessFollowUpStatus.SCHEDULED && new Date() > new Date(followUp.date);
  }

  canMarkAsCancelled(followUp: PracticeProcessFollowUp): boolean {
    return this.permissions.canMarkAsCancelledFollowUps && followUp.status === PracticeProcessFollowUpStatus.SCHEDULED && new Date(followUp.date) > new Date();
  }
}
