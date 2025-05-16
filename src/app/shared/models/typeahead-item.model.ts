import { Observable } from "rxjs";

export interface TypeaheadItem<T = string> {
    value: T;
    label: string;
}

export interface TypeaheadConfig {
  placeholder: string;
  staticOptions?: TypeaheadItem[];
  retrieveOptions?: (term: string) => Observable<TypeaheadItem[]>;
  retrieveOptionsFromExistingValue?: () => Observable<TypeaheadItem[]>;
}