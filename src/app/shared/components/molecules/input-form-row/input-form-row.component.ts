import { CommonModule, NgIf, NgSwitch } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from '../../atoms/input-text/input-text.component';
import { InputNumberComponent } from '../../atoms/input-number/input-number.component';
import { InputPasswordComponent } from '../../atoms/input-password/input-password.component';
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { TypeaheadConfig } from '@/shared/models/typeahead-item.model';
import { InputTypeaheadComponent } from "../../atoms/input-typeahead/input-typeahead.component";
import { InputSelectComponent } from "../../atoms/input-select/input-select.component";
import { SelectOption } from '../../atoms/input-select/input-select.models';
import { InputOtpComponent } from "../../atoms/input-otp/input-otp.component";
import { MultiSelectConfig } from '../../atoms/input-multi-select/input-multi-select.models';
import { InputMultiSelectComponent } from "../../atoms/input-multi-select/input-multi-select.component";
import { FileConfig } from '../../atoms/input-file/input-file.models';
import { InputDateComponent } from "../../atoms/input-date/input-date.component";
import { InputFileComponent } from "../../atoms/input-file/input-file.component";
import { InputRichTextComponent } from "../../atoms/input-rich-text/input-rich-text.component";
import { InputCheckBoxComponent } from "../../atoms/input-check-box/input-check-box.component";
import { InputTextareaComponent } from '../../atoms/input-textarea/input-textarea.component';

@Component({
  selector: 'app-input-form-row',
  standalone: true,
  imports: [
    InputTextComponent,
    InputNumberComponent,
    InputPasswordComponent,
    InputTypeaheadComponent,
    InputSelectComponent,
    InputOtpComponent,
    ReactiveFormsModule,
    CommonModule,
    InputMultiSelectComponent,
    InputDateComponent,
    InputFileComponent,
    InputRichTextComponent,
    InputCheckBoxComponent,
    InputTextareaComponent
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
  @Input() multiSelectConfig?: MultiSelectConfig;
  @Input() selectOptions?: SelectOption[];
  @Input() fileConfig?: FileConfig;
  @Input() checkboxLabel? = '';


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
    if (this.control.hasError('min')) {
      const { min } = this.control.getError('min');
      return `El valor mínimo es ${min}.`;
    }
    if (this.control.hasError('max')) {
      const { max } = this.control.getError('max');
      return `El valor máximo es ${max}.`;
    }
    if (this.control.hasError('colombianPhone')) {
      return 'El número de teléfono no es válido, debe tener 10 dígitos y comenzar con 3.';
    }
    if( this.control.hasError('notFutureDate')) {
      return 'La fecha debe ser futura.';
    }
    if (this.control.hasError('endBeforeStart')) {
      return 'La fecha de finalización debe ser posterior a la fecha de inicio.';
    }
    if (this.control.hasError('pattern')) return 'Formato inválido.';
    return 'Valor inválido.';
  }

  get isDisabled(): boolean {
    return this.control.disabled;
  }


}
