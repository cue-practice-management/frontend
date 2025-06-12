import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Book, BriefcaseBusiness, LayoutDashboard, Lock, LucideAngularModule, SchoolIcon, UserCheckIcon } from 'lucide-angular';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent {
  featuresTitle = 'Características Destacadas';
  featuresSubtitle = 'Descubre las funcionalidades clave de nuestro sistema de gestión de prácticas profesionales universitarias que facilitan la conexión entre estudiantes, universidades y empresas.'

  features = [
    {
      icon: UserCheckIcon,
      title: 'Registro de estudiantes',
      description: 'Facilita el registro de estudiantes con un proceso simplificado y validación automática de datos académicos.'
    },
    {
      icon: BriefcaseBusiness,
      title: 'Gestión de Empresas',
      description: 'Permite la creación y gestión de perfiles de empresas, facilitando la conexión con estudiantes.'
    },
    {
      icon: LayoutDashboard,
      title: 'Panel de Control',
      description: 'Interfaz intuitiva para gestionar todas las actividades relacionadas con las prácticas profesionales.'
    },
    {
      icon: Lock,
      title: 'Seguridad y Permisos',
      description: 'Garantiza la seguridad de los datos con un sistema de permisos robusto, asegurando que solo los usuarios autorizados accedan a información sensible.'
    },
    {
      icon: SchoolIcon,
      title: 'Gestión Académica',
      description: 'Facilita la gestión de datos académicos incluyendo las facultades y carreras de los estudiantes.'
    },
    {
      icon: Book,
      title: 'Configuración de Prácticas',
      description: 'Facilita la creación y configuración de prácticas profesionales, incluyendo requisitos y objetivos específicos.'
    }
  ];
}
