import { ROUTES } from "@/core/constants/routes.constants";
import { SidebarItem } from "./admin.models";
import * as LucideIcons from 'lucide-angular';

export const ADMIN_SIDEBAR_ITEMS: SidebarItem[] = [
    { label: 'Facultades', route: ROUTES.ADMIN.FACULTIES, icon: LucideIcons.SwatchBook },
    { label: 'Calendario', route: '/admin/calendar', icon: LucideIcons.CalendarDays },
    { label: 'Equipos', route: '/admin/teams', icon: LucideIcons.Users },
    { label: 'Configuración', route: '/admin/settings', icon: LucideIcons.Settings },
];