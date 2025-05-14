import { Component } from '@angular/core';
import { AdminSectionWrapperComponent } from '../../components/admin-section-wrapper/admin-section-wrapper.component';
import { Faculty } from '@/features/faculty/faculty.models';
import { FacultyTableComponent } from '@/features/faculty/components/faculty-table/faculty-table.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { ButtonComponent } from '@/shared/components/atoms/button/button.component';
import { ModalService } from '@/core/services/modal.service';
import { FacultyFormComponent } from '@/features/faculty/components/faculty-form/faculty-form.component';

@Component({
  selector: 'app-admin-faculty-page',
  standalone: true,
  imports: [AdminSectionWrapperComponent, FacultyTableComponent, ButtonComponent],
  templateUrl: './admin-faculty-page.component.html',
  styleUrl: './admin-faculty-page.component.scss'
})
export class AdminFacultyPageComponent {
  readonly TableAction = TableAction;

  constructor(private modalService: ModalService) { }

  openModal(): void {
    this.modalService.open(FacultyFormComponent, {
      data: {
        faculty: null
      }
    }).afterClosed()
      .subscribe((result) => {
        if (result) {

        }
      });
  }
}
