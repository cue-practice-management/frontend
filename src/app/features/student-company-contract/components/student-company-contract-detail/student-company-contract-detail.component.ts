import { Component, Input } from '@angular/core';
import { StudentCompanyContract } from '../../student-company-contract.models';
import { getStudentCompanyContractCancelledByLabel, getStudentCompanyContractStatusLabel, StudentCompanyContractCancelledBy } from '../../student-company-contract.enums';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from "@atoms/avatar/avatar.component";
import { LucideAngularModule } from 'lucide-angular';
import {
  Eye,
  FileText,
  User,
  Building2,
  CalendarDays,
  BadgeDollarSign,
  Ban,
} from 'lucide-angular';

@Component({
  selector: 'app-student-company-contract-detail',
  standalone: true,
  imports: [CommonModule, AvatarComponent, LucideAngularModule],
  templateUrl: './student-company-contract-detail.component.html',
  styleUrl: './student-company-contract-detail.component.scss'
})
export class StudentCompanyContractDetailComponent {
  @Input() contract!: StudentCompanyContract;

  get statusLabel(): string {
    return getStudentCompanyContractStatusLabel(this.contract.status);
  }

  get cancelledByLabel(): string | null {
    return getStudentCompanyContractCancelledByLabel(
      this.contract.cancelledBy ?? StudentCompanyContractCancelledBy.UNIVERSITY
    );
  }

  Eye = Eye;
  FileText = FileText;
  User = User;
  Building2 = Building2;
  CalendarDays = CalendarDays;
  BadgeDollarSign = BadgeDollarSign;
  Ban = Ban;
}
