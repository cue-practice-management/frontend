import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-input-rich-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, QuillModule],
  templateUrl: './input-rich-text.component.html',
  styleUrl: './input-rich-text.component.scss'
})
export class InputRichTextComponent {
  @Input() control!: FormControl
  @Input() placeholder = '';

}


