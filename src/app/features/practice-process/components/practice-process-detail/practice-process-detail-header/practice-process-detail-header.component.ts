import { PracticeProcessDetail } from '@/features/practice-process/practice-process.models';
import { AvatarComponent } from '@/shared/components/atoms/avatar/avatar.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StatusBadgeComponent } from "@atoms/status-badge/status-badge.component";

@Component({
  selector: 'app-practice-process-detail-header',
  standalone: true,
  imports: [CommonModule, AvatarComponent, StatusBadgeComponent],
  templateUrl: './practice-process-detail-header.component.html',
  styleUrl: './practice-process-detail-header.component.scss'
})
export class PracticeProcessDetailHeaderComponent {
  @Input() practice!: PracticeProcessDetail;
  @Input() showStudent = false;
  @Input() showProfessor = false;
}
