import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-check-box',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-check-box.component.html',
  styleUrl: './input-check-box.component.scss'
})
export class InputCheckBoxComponent {
  @Input() control!: FormControl;
  @Input() id = '';
  @Input() label? = '';
}

