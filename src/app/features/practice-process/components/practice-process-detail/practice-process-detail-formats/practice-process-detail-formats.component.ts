import { PracticeProcessDetail } from '@/features/practice-process/practice-process.models';
import { PracticeTemplateFormat } from '@/features/practice-template/practice-template.models';
import { Component, Input } from '@angular/core';
import { DownloadIcon, FileTextIcon, LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from "@atoms/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice-process-detail-formats',
  standalone: true,
  imports: [ButtonComponent, LucideAngularModule, CommonModule],
  templateUrl: './practice-process-detail-formats.component.html',
  styleUrl: './practice-process-detail-formats.component.scss'
})
export class PracticeProcessDetailFormatsComponent {

  @Input() practice!: PracticeProcessDetail;
  FileIcon = FileTextIcon;
  DownloadIcon = DownloadIcon;

  get formats(): PracticeTemplateFormat[] {
    return this.practice.practiceDefinition.practiceTemplate.formats;
  }
}
