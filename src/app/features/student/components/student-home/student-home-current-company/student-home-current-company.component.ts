import { Company } from '@/features/company/company.models';
import { Student } from '@/features/student/student.model';
import { AvatarComponent } from '@/shared/components/atoms/avatar/avatar.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Briefcase, Building, Globe, LucideAngularModule, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-student-home-current-company',
  standalone: true,
  imports: [CommonModule, AvatarComponent, LucideAngularModule],
  templateUrl: './student-home-current-company.component.html',
  styleUrl: './student-home-current-company.component.scss'
})
export class StudentHomeCurrentCompanyComponent {

  @Input() student!: Student;

  get company(): Company | undefined {
    return this.student.currentCompany;
  }

  GlobeIcon = Globe;
  MapPinIcon = MapPin;
  BuildingIcon = Building;

}
