import { Component } from '@angular/core';
import { AdminSectionWrapperComponent } from "../../components/admin-section-wrapper/admin-section-wrapper.component";
import { AcademicProgramTableComponent } from "../../../academic-program/components/academic-program-table/academic-program-table.component";

@Component({
  selector: 'app-admin-academic-program-page',
  standalone: true,
  imports: [AdminSectionWrapperComponent, AcademicProgramTableComponent],
  templateUrl: './admin-academic-program-page.component.html',
  styleUrl: './admin-academic-program-page.component.scss'
})
export class AdminAcademicProgramPageComponent {

}
