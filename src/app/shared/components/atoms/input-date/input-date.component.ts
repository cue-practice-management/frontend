import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss'
})
export class InputDateComponent {
  @Input() id = '';
  @Input() control!: FormControl;
  @Input() type: 'date' | 'datetime-local' = 'date';
}
