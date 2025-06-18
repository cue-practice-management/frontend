import { Professor } from '@/features/professor/professor.models';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from "@atoms/avatar/avatar.component";

@Component({
  selector: 'app-professor-home-header',
  standalone: true,
  imports: [AvatarComponent, CommonModule],
  templateUrl: './professor-home-header.component.html',
  styleUrl: './professor-home-header.component.scss'
})
export class ProfessorHomeHeaderComponent {
  @Input() professor!: Professor;

  today = new Date();
}
