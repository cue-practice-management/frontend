import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectOption } from './input-select.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss'
})
export class InputSelectComponent {
  @Input() control!: FormControl;
  @Input() id = '';
  @Input() placeholder = '';
  @Input() options: SelectOption[] = [];

}