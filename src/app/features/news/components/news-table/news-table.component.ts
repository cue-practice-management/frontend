import { DataTable } from '@/shared/abstracts/data-table.abstract';
import { Component, Input, OnInit } from '@angular/core';
import { News, NewsFilter } from '../../news.models';
import { NewsFormComponent } from '../news-form/news-form.component';
import { TableAction } from '@/shared/models/table-actions.enum';
import { NewsService } from '../../services/news.service';
import { ModalService } from '@/core/services/modal.service';
import { Observable } from 'rxjs';
import { PaginatedResult } from '@/core/models/paginated-result.model';
import { ColumnConfig, TableRowAction } from '@/shared/components/organisms/data-table/data-table.models';
import { formatDate } from '@angular/common';
import { DataTableComponent } from "../../../../shared/components/organisms/data-table/data-table.component";

@Component({
  selector: 'app-news-table',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './news-table.component.html',
  styleUrl: './news-table.component.scss'
})
export class NewsTableComponent extends DataTable<News, NewsFilter> implements OnInit {
  override entityName = 'Noticia';
  override entityKeyName = 'news';
  override formComponent = NewsFormComponent;
  @Input() override allowedActions = [TableAction.EDIT, TableAction.DELETE];

  readonly columns: ColumnConfig<News>[] = [
    { label: 'Título', field: 'title' },
    { label: 'Resumen', field: 'summary', },
    { label: 'Fecha de Creación', field: 'createdAt', cell: (c) => formatDate(c.createdAt, 'dd/MM/yyyy', 'en-US'), },
    { label: 'Imagen de Portada', field: 'coverImageUrl', isFile: true },
    { label: 'Etiquetas', field: 'tags', cell: (news) => news.tags.join(', ') }
  ];

  constructor(
    private newsService: NewsService,
    modalService: ModalService
  ) {
    super(modalService);
  }

  ngOnInit(): void {
    this.loadPageData(this.filter);
  }

  override getAll(filter: NewsFilter): Observable<PaginatedResult<News>> {
    return this.newsService.getNews(filter);
  }

  override delete(newsId: string): Observable<void> {
    return this.newsService.deleteNews(newsId);
  }

  get actions(): TableRowAction<News>[] {
    return this.getTableActions();
  }
}
