import { animation, style, animate } from '@angular/animations';

export const slideInLeft = animation([
  style({ opacity: 0, transform: 'translateX(-40px)' }),
  animate('{{duration}} ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
]);

export const slideInRight = animation([
  style({ opacity: 0, transform: 'translateX(40px)' }),
  animate('{{duration}} ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
]);

export const fadeInScale = animation([
  style({ opacity: 0, transform: 'scale(0.95)' }),
  animate('{{duration}} ease-out', style({ opacity: 1, transform: 'scale(1)' }))
]);
