import { PracticeProcessDetail } from '@/features/practice-process/practice-process.models';
import { Component, Input } from '@angular/core';
import { StatusBadgeComponent } from "@atoms/status-badge/status-badge.component";
import { CommonModule } from '@angular/common';
import { PracticeProcessDetailPermissions } from '@/features/practice-process/pages/practice-process-detail-page/practice-process-detail-page.models';
import { ButtonComponent } from "../../../../../shared/components/atoms/button/button.component";

@Component({
  selector: 'app-practice-process-detail-deliverables',
  standalone: true,
  imports: [StatusBadgeComponent, CommonModule, ButtonComponent],
  templateUrl: './practice-process-detail-deliverables.component.html',
  styleUrl: './practice-process-detail-deliverables.component.scss'
})
export class PracticeProcessDetailDeliverablesComponent {
  @Input() practice!: PracticeProcessDetail;
  @Input() permissions!: PracticeProcessDetailPermissions;

  onSubmit(deliverableId: string) {
    // Abrir modal de entrega
  }

  onGrade(deliverableId: string) {
    // Abrir modal de calificación
  }
}