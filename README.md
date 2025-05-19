# 🎓 CUE Practice Management Frontend

Frontend de la plataforma **CUE Gestión de Prácticas Empresariales**, desarrollado con Angular 17 standalone, arquitectura modular y componentes reusables.

---

## 🚀 Tecnologías principales

- **Angular 17** standalone
- **SCSS modular** con BEM
- **Lucide Icons** con tipado
- **Componentes dinámicos**
- **Arquitectura** `core/`, `shared/`, `features/`
- **Reactive Forms** + validación dinámica
- **RxJS** para flujo reactivo
- **Tailored Modal & Confirmation System**

---

## 📦 Estructura del proyecto

```bash
src/
│
├── app/
│   ├── core/            # Servicios globales, tokens, constantes
│   ├── shared/          # Componentes reusables y abstracts
│   ├── features/        # Dominio por feature (auth, faculty, student, etc.)
│   ├── environments/    # Configuración por ambiente
│   └── app.config.ts    # Bootstrap con imports standalone
