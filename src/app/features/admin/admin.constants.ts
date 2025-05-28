import { ROUTES } from "@/core/constants/routes.constants";
import { SidebarItem } from "./admin.models";
import * as LucideIcons from 'lucide-angular';

export const ADMIN_SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'Usuarios',
    icon: LucideIcons.User,
    children: [
      { label: 'Estudiantes', route: ROUTES.ADMIN.STUDENTS, icon: LucideIcons.User },
      { label: 'Profesores', route: ROUTES.ADMIN.PROFESSORS, icon: LucideIcons.UserCheck }
    ]
  },
  {
    label: 'Empresas',
    route: ROUTES.ADMIN.COMPANIES,
    icon: LucideIcons.Building
  },
  {
    label: 'Facultades',
    route: ROUTES.ADMIN.FACULTIES,
    icon: LucideIcons.SwatchBook
  },
  {
    label: 'Programas Académicos',
    route: ROUTES.ADMIN.ACADEMIC_PROGRAMS,
    icon: LucideIcons.BookType
  },
  {
    label: 'Configuración',
    icon: LucideIcons.Settings,
    children: [
      { label: 'Países', route: ROUTES.ADMIN.COUNTRIES, icon: LucideIcons.Globe },
      { label: 'Ciudades', route: ROUTES.ADMIN.CITIES, icon: LucideIcons.MapPin }
    ]
  }
];
