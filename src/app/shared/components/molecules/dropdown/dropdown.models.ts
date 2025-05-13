import { LucideIconData } from "lucide-angular";

export interface DropdownItem {
  label: string;
  icon?: LucideIconData; 
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  action: () => void;
}