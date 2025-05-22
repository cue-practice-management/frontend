import { ModalComponent } from '@/shared/components/organisms/modal/modal.component';
import { ModalConfig } from '@/shared/components/organisms/modal/modal.models';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import {
  ApplicationRef,
  EnvironmentInjector,
  Injectable,
  Type,
  createComponent
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(
    private appRef: ApplicationRef,
    private envInjector: EnvironmentInjector 
  ) {}

  open<T extends object, D = any>(component: Type<T>, config: ModalConfig<D> = {}): ModalRef  {
    const modalRef = new ModalRef();

    const containerRef = createComponent(ModalComponent, {
      environmentInjector: this.envInjector
    });

    containerRef.instance.create(component, config, modalRef, this.envInjector);

    this.appRef.attachView(containerRef.hostView);
    document.body.appendChild(containerRef.location.nativeElement);

    modalRef.afterClosed().subscribe(() => {
      this.appRef.detachView(containerRef.hostView);
      containerRef.destroy();
    });

    return modalRef;
  }
}
