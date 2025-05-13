import { Component, OnInit } from '@angular/core';
import { AdminSectionWrapperComponent } from '../../components/admin-section-wrapper/admin-section-wrapper.component';
import { RetrievePaginatedData } from '@/shared/abstracts/retrieve-paginated-data';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { Faculty } from '@/features/faculty/faculty.models';
import { Observable } from 'rxjs';
import { FacultyService } from '@/features/faculty/services/faculty.service';
import { FacultyFilter } from '@/features/faculty/faculty.models';
import { FacultyTableComponent } from '@/features/faculty/components/faculty-table/faculty-table.component';

@Component({
  selector: 'app-admin-faculty-page',
  standalone: true,
  imports: [AdminSectionWrapperComponent, FacultyTableComponent],
  templateUrl: './admin-faculty-page.component.html',
  styleUrl: './admin-faculty-page.component.scss'
})
export class AdminFacultyPageComponent extends RetrievePaginatedData<Faculty, FacultyFilter> implements OnInit {
  
  override filter: FacultyFilter = {
    page: 1,
    limit: 10
  };

  constructor(private facultyService: FacultyService) {
    super();
  }

  ngOnInit(): void {
    this.loadPageData(this.filter); 
  }

  override fetchPage(filter: FacultyFilter): Observable<PaginatedResult<Faculty>> {
    return this.facultyService.getFaculties(filter);
  }

  onPageChange(page: number): void {
    this.loadPageData({ ...this.filter, page });
  }

  onEditFaculty(faculty: Faculty): void {
    console.log('Editar facultad:', faculty);
  }

  onDeleteFaculty(faculty: Faculty): void {
    console.log('Eliminar facultad:', faculty);
  }
}
