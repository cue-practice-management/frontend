import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Eye, EyeOff, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss'
})
export class InputPasswordComponent {
  @Input() control!: FormControl;
  @Input() id = '';
  @Input() placeholder = '';

  showPassword = false;

  readonly Eye = Eye;
  readonly EyeOff = EyeOff;

  toggle(): void {
    this.showPassword = !this.showPassword;
  }

  get inputType(): 'text' | 'password' {
    return this.showPassword ? 'text' : 'password';
  }
}
