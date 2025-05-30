import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileConfig } from './input-file.models';

@Component({
  selector: 'app-input-file',
  standalone: true,
  imports: [],
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss'
})
export class InputFileComponent {
  @Input() control!: FormControl;
  @Input() id = '';
  @Input() config!: FileConfig;

  @Output() fileSelected = new EventEmitter<File>();

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.control.setValue(file);
      this.control.markAsTouched();
      this.fileSelected.emit(file);
    }
  }

  get fileLabel(): string {
    const value = this.control?.value;

    if (!value) return 'Selecciona un archivo...';

    if (value instanceof File) return value.name;
    if (typeof value === 'string') return 'Archivo actual: ' + this.extractFileName(value);
    return 'Archivo cargado';
  }

  private extractFileName(path: string): string {
    return path.split('/').pop() || path;
  }
}