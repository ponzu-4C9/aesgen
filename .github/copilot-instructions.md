# GitHub Copilot Instructions for aesgen

## Project Big Picture
- **Next.js App Router**: This is a Next.js project using the App Router (`app/` directory).
- **Core Tech Stack**: React 19, Next.js 16 (bleeding edge), TypeScript, and Tailwind CSS 4.
- **Docker-Centric**: Development is primarily done within a Docker container.
- **Purpose**: Input word list processing (likely for generation tasks, based on the `aesgen` name).

## Development Workflow
- **Start Environment**: Use `sudo docker compose up --build` to launch the development server.
- **Access**: The app is served at `http://localhost:3000`.
- **Containerization**: The `app` service in `docker-compose.yml` mounts the current directory to `/app`, but excludes `node_modules` to avoid conflict with the host.

## Coding Conventions
- **Language**: UI text and user-facing labels must be in **Japanese (日本語)** (e.g., [Inputbox.tsx](app/components/Inputbox.tsx)).
- **Component Structure**:
    - Functional components using `export default function Name()`.
    - Components reside in [app/components/](app/components/).
- **Imports**: Use the `@/` path alias for absolute imports from the project root (configured in [tsconfig.json](tsconfig.json)).
- **Styling**: 
    - Styling should be managed using **custom CSS classes** rather than utility classes.
    - Define custom styles in [app/globals.css](app/globals.css) or using CSS modules.
    - Component elements should use semantic class names (e.g., `.input-container`, `.input-textarea`).
    - Tailwind CSS 4 is installed and can be used within `@theme` or `@utility` in CSS files, but avoid direct usage of utility classes in `className` props.

## Key Files & Patterns
- [app/page.tsx](app/page.tsx): The main landing page. Simple entry point that composes high-level components.
- [app/components/Inputbox.tsx](app/components/Inputbox.tsx): Example of a data input component using `<textarea>` for multi-line text input.
- [docker-compose.yml](docker-compose.yml): Defines the standard development environment.
