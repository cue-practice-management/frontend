import { Student } from '@/features/student/student.model';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from "@atoms/avatar/avatar.component";
import { LucideAngularModule, UserCircleIcon } from 'lucide-angular';

@Component({
  selector: 'app-student-home-header',
  standalone: true,
  imports: [CommonModule, AvatarComponent, LucideAngularModule],
  templateUrl: './student-home-header.component.html',
  styleUrl: './student-home-header.component.scss'
})
export class StudentHomeHeaderComponent {
  @Input() student!: Student;
  today = new Date();

  UserIcon = UserCircleIcon
}
