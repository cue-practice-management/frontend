import { Component, inject, Input } from '@angular/core';
import { ConfirmDialogData } from './confirm.dialog.model';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ModalRef } from '../../organisms/modal/modal.ref';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {
  @Input() confirmDialogData!: ConfirmDialogData;
  private readonly modalRef = inject(ModalRef);

  confirm(): void {
    this.modalRef.close(true);
  }

  cancel(): void {
    this.modalRef.close(false);
  }
}
