import { Component } from '@angular/core';
import { AdminEntityPageComponent } from "../../components/admin-entity-page/admin-entity-page.component";
import { TableAction } from '@/shared/models/table-actions.enum';
import { NewsTableComponent } from '@/features/news/components/news-table/news-table.component';
import { NewsFormComponent } from '@/features/news/components/news-form/news-form.component';
import { AdminEntityPageConfig } from '../../admin.models';
import { News, NewsFilter } from '@/features/news/news.models';

@Component({
  selector: 'app-admin-news-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './admin-news-page.component.html',
  styleUrl: './admin-news-page.component.scss'
})
export class AdminNewsPageComponent {

  newsPageConfig: AdminEntityPageConfig<News, NewsFilter> = {
    title: 'Noticias',
    description: 'Gestiona las noticias de la institución',
    createButtonLabel: 'Crear noticia',
    tableComponent: NewsTableComponent,
    formComponent: NewsFormComponent,
    allowedActions: [TableAction.EDIT, TableAction.DELETE],
    modalData: () => ({ news: null })
  }

}
