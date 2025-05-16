import { CommonModule, NgIf, NgSwitch } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputTextComponent } from '../../atoms/input-text/input-text.component';
import { InputNumberComponent } from '../../atoms/input-number/input-number.component';
import { InputPasswordComponent } from '../../atoms/input-password/input-password.component';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { InputTypeaheadComponent } from "../../atoms/input-typeahead/input-typeahead.component";

@Component({
  selector: 'app-input-form-row',
  standalone: true,
  imports: [
    InputTextComponent,
    InputNumberComponent,
    InputPasswordComponent,
    CommonModule,
    InputTypeaheadComponent
  ],
  templateUrl: './input-form-row.component.html',
  styleUrl: './input-form-row.component.scss'
})
export class InputFormRowComponent {
  @Input() control!: FormControl;
  @Input() id = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: FormFieldType = FormFieldType.TEXT;
  @Input() typeaheadConfig?: TypeaheadConfig;

  get showError(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  get errorMessage(): string {
    if (this.control.hasError('invalidOption')) return 'Selecciona una opción válida del listado.';
    if (this.control.hasError('required')) return 'Este campo es obligatorio.';
    if (this.control.hasError('email')) return 'Correo inválido.';
    if (this.control.hasError('minlength')) {
      const { requiredLength } = this.control.getError('minlength');
      return `Debe tener al menos ${requiredLength} caracteres.`;
    }
    if(this.control.hasError('min')){
      const { min } = this.control.getError('min');
      return `El valor mínimo es ${min}.`;
    }
    if(this.control.hasError('max')){
      const { max } = this.control.getError('max');
      return `El valor máximo es ${max}.`;
    }
    if (this.control.hasError('pattern')) return 'Formato inválido.';
    console.error(this.control.errors);
    return 'Valor inválido.';
  }

  get isDisabled(): boolean {
    return this.control.disabled;
  }


}
