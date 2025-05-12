import { Component } from '@angular/core';
import { AdminSidebarComponent } from "../components/admin-sidebar/admin-sidebar.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [AdminSidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
