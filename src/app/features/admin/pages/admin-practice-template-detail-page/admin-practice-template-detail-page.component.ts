import { Component, OnInit } from '@angular/core';
import { AdminSectionWrapperComponent } from "../../components/admin-section-wrapper/admin-section-wrapper.component";
import { ActivatedRoute } from '@angular/router';
import { PRACTICE_TEMPLATE_ID_PARAM } from '../../admin.constants';
import { TabsComponent } from "@organisms/tabs/tabs.component";
import { TabComponent } from "@molecules/tab/tab.component";
import { PracticeTemplateDeliverableFormComponent } from "../../../practice-template/components/practice-template-deliverable-form/practice-template-deliverable-form.component";
import { PracticeTemplateDeliverableTableComponent } from "../../../practice-template/components/practice-template-deliverable-table/practice-template-deliverable-table.component";
import { CommonModule } from '@angular/common';
import { TableAction } from '@/shared/models/table-actions.enum';

@Component({
  selector: 'app-admin-practice-template-detail-page',
  standalone: true,
  imports: [AdminSectionWrapperComponent, TabsComponent, TabComponent, PracticeTemplateDeliverableFormComponent, PracticeTemplateDeliverableTableComponent, CommonModule],
  templateUrl: './admin-practice-template-detail-page.component.html',
  styleUrl: './admin-practice-template-detail-page.component.scss'
})
export class AdminPracticeTemplateDetailPageComponent implements OnInit {
  practiceTemplateId!: string;

  deliverableActions = [TableAction.EDIT, TableAction.DELETE];

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const templateId = this.route.snapshot.paramMap.get(PRACTICE_TEMPLATE_ID_PARAM);

    if (!templateId) {
      console.error('Practice Template ID is required');
      return;
    }

    this.practiceTemplateId = templateId;
  }
}
