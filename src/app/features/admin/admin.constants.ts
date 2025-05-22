import { ROUTES } from "@/core/constants/routes.constants";
import { SidebarItem } from "./admin.models";
import * as LucideIcons from 'lucide-angular';

export const ADMIN_SIDEBAR_ITEMS: SidebarItem[] = [
    { label: 'Estudiantes', route: ROUTES.ADMIN.STUDENTS, icon: LucideIcons.User },
    { label: 'Facultades', route: ROUTES.ADMIN.FACULTIES, icon: LucideIcons.SwatchBook },
    { label: 'Programas Academicos', route: ROUTES.ADMIN.ACADEMIC_PROGRAMS, icon: LucideIcons.BookType },
    { label: 'Equipos', route: '/admin/teams', icon: LucideIcons.Users },
    { label: 'Configuración', route: '/admin/settings', icon: LucideIcons.Settings },
];