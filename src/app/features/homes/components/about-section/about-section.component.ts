import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckCircle, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  aboutTitle = 'Acerca de Nuestro Sistema de Gestión de Prácticas Universitarias';
  aboutDescription = 'Nuestro sistema está diseñado para facilitar la gestión de prácticas profesionales universitarias, conectando a estudiantes, universidades y empresas de manera eficiente. Con una interfaz intuitiva y herramientas avanzadas, buscamos optimizar el proceso de selección, seguimiento y evaluación de prácticas, asegurando una experiencia enriquecedora para todos los involucrados.';

  benefits = [
    {
      title: 'Evaluación Efectiva',
      description: 'Herramientas de evaluación y retroalimentación para mejorar la calidad de las prácticas'
    },
    {
      title: 'Mobile-Friendly',
      description: 'Acceso y gestión de prácticas desde cualquier dispositivo móvil o computadora'
    },
    {
      title: 'Estadísticas Avanzadas',
      description: 'Análisis detallado del rendimiento de los estudiantes y la efectividad de las prácticas'
    },
    {
      title: 'Comunicación Efectiva',
      description: 'Canales de comunicación integrados para facilitar la interacción entre estudiantes, universidades y empresas'
    },
    {
      title: 'Digitalización de Procesos',
      description: 'Eliminación del papeleo y digitalización de todos los procesos relacionados con las prácticas profesionales'
    }
  ];

  CheckIcon = CheckCircle;
}
