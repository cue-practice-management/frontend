import { Component, EnvironmentInjector, HostListener, inject, Injector, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalConfig } from './modal.models';
import { ModalRef } from './modal.ref';
import { MODAL_CONFIG } from './modal.token';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() config!: ModalConfig;
  @Input() modalRef!: ModalRef;
  @ViewChild('modalContent', { read: ViewContainerRef, static: true })
  modalContent!: ViewContainerRef;
  constructor(private injector: Injector) { }

  create<T>(
    component: Type<T>,
    config: ModalConfig,
    modalRef: ModalRef,
    envInjector: EnvironmentInjector
  ): void {
    this.config = config;
    this.modalRef = modalRef;

    const customInjector = Injector.create({
      providers: [
        { provide: ModalRef, useValue: modalRef },
        { provide: MODAL_CONFIG, useValue: config }
      ],
      parent: this.injector
    });

    this.modalContent.createComponent(component, {
      environmentInjector: envInjector,
      injector: customInjector
    });
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    if (this.config.closeOnEsc !== false) {
      this.modalRef.close(null);
    }
  }

  onBackdropClick(): void {
    if (this.config.closeOnBackdropClick !== false) {
      this.modalRef.close(null);
    }
  }
}
