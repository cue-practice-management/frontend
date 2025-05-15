export interface TypeaheadItem<T = string> {
    value: T;
    label: string;
}

export interface TypeaheadConfig {
  placeholder?: string;
  loading?: boolean;
  options: TypeaheadItem[];
  onSearch?: (term: string) => void;
  onSelect?: (item: TypeaheadItem) => void;
}