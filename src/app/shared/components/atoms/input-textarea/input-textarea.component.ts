import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.scss'
})
export class InputTextareaComponent {
  @Input() control!: FormControl;
  @Input() id = '';
  @Input() placeholder = '';
}
