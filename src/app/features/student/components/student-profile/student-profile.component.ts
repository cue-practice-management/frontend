import { Component, Input } from '@angular/core';
import { Student } from '../../student.model';
import { AvatarComponent } from "@atoms/avatar/avatar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [AvatarComponent, CommonModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {

  @Input() student!: Student;

}
