import { FormSubmitComponent } from '@/shared/abstracts/form-submit.abstract';
import { Component, Input } from '@angular/core';
import { CreateNewsRequest, News, UpdateNewsRequest } from '../../news.models';
import { Observable } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { ModalRef } from '@/shared/components/organisms/modal/modal.ref';
import { DynacmicFormConfig } from '@/shared/components/organisms/dynamic-form/dynamic.form.models';
import { DynamicFormComponent } from "../../../../shared/components/organisms/dynamic-form/dynamic-form.component";
import { FormFieldType } from '@/shared/models/form-field-type.enum';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent extends FormSubmitComponent<CreateNewsRequest | UpdateNewsRequest, News> {
  @Input() news!: News | null;
  newsFormConfig!: DynacmicFormConfig;
  constructor(
    private newsService: NewsService,
    private modalRef: ModalRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.updateFormConfig();
  }

  private updateFormConfig(): void {
    this.newsFormConfig = {
      title: this.news ? 'Editar noticia' : 'Crear noticia',
      buttonLabel: this.news ? 'Guardar cambios' : 'Crear noticia',
      sections: [
        {
          fields: [
            {
              key: 'title',
              label: 'Título',
              value: this.news?.title,
              type: FormFieldType.TEXT,
              placeholder: 'Ingrese el título de la noticia',
              validators: [Validators.required],
            },
            {
              key: 'summary',
              label: 'Resumen',
              value: this.news?.summary,
              type: FormFieldType.TEXT,
              placeholder: 'Ingrese un resumen breve de la noticia',
              validators: [Validators.required]
            },
            {
              key: 'content',
              label: 'Contenido',
              value: this.news?.content,
              type: FormFieldType.RICH_TEXT,
              placeholder: 'Ingrese el contenido completo de la noticia',
              validators: [Validators.required]
            },
            {
              key: 'file',
              label: 'Imagen de Portada',
              value: this.news?.coverImageUrl,
              type: FormFieldType.FILE,
              fileConfig: {
                accept:'image/*'
              }
            }
          ]
        }
      ]
    };
  }

  protected override submitData(data: CreateNewsRequest | UpdateNewsRequest): Observable<News> {
    if (this.news) {
      return this.newsService.updateNews(this.news._id, data as UpdateNewsRequest);
    } else {
      return this.newsService.createNews(data as CreateNewsRequest);
    }
  }
  
  protected override onSuccess(res: News): void {
    this.modalRef.close(res);
  }

  onFormSubmit(data: CreateNewsRequest | UpdateNewsRequest): void {
    this.submitForm(data);
  }

}
