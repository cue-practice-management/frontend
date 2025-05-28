import { Observable } from "rxjs";

export interface MultiSelectItem<T = string> {
  value: T;
  label: string;
}

export interface MultiSelectConfig {
  placeholder: string;
  staticOptions?: MultiSelectItem[];
  retrieveOptions?: (term: string) => Observable<MultiSelectItem[]>;
}