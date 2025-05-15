import { TypeaheadConfig, TypeaheadItem } from "@/shared/models/typeahead-item.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TypeaheadService {
  createTypaheadConfig<T>(
    fetch: (term: string) => Observable<TypeaheadItem[]>,
  ): TypeaheadConfig {
    const options: TypeaheadItem[] = [];
    let loading = false;

    return {
      options,
      loading,
      onSearch: (term) => {
        loading = true;
        fetch(term).subscribe(res => {
          options.splice(0, options.length, ...res);
          loading = false;
        });
      },
    };
  }
}
