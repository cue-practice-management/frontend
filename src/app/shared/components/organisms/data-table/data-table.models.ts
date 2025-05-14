import { TemplateRef } from "@angular/core";
import { LucideIconData } from "lucide-angular";

export interface ColumnConfig<T> {
    label: string;
    field?: keyof T;
    cell?: (row: T) => string | number | TemplateRef<any>;
    align?: 'left' | 'center' | 'right';
}

export interface TableRowAction<T> {
    icon: LucideIconData; 
    label: string;
    action: (row: T) => void;
    danger?: boolean;
    disabled?: (row: T) => boolean; 
}