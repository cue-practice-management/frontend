import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@/features/auth/services/auth.service';
import { CurrentUserService } from '@/core/services/current-user.service';
import { LogOut } from 'lucide-angular';
import { StudentNavComponent } from "../../components/student-nav/student-nav.component";

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [RouterOutlet, StudentNavComponent],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.scss'
})
export class StudentLayoutComponent {

}
