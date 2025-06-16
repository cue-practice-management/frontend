import { PRACTICE_PROCESS_STATUS_LABELS, PracticeProcessStatus } from '@/features/practice-process/practice-process.enums';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPracticeProcessStatus',
  standalone: true,
})
export class FormatPracticeProcessStatusPipe implements PipeTransform {
  transform(value: PracticeProcessStatus | null | undefined): string {
    if (!value) return 'Desconocido';
    return PRACTICE_PROCESS_STATUS_LABELS[value] ?? 'Desconocido';
  }
}