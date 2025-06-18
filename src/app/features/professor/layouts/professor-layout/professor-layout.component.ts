import { Component } from '@angular/core';
import { ProfessorNavComponent } from "../../components/professor-nav/professor-nav.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-professor-layout',
  standalone: true,
  imports: [ProfessorNavComponent, RouterModule],
  templateUrl: './professor-layout.component.html',
  styleUrl: './professor-layout.component.scss'
})
export class ProfessorLayoutComponent {

}
