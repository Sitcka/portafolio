"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "contact",
    path: "/contact"
  }
]

const Nav = () => {
  //Uso de usePathname(): Excelente decisión. Esto permite saber cuál es la ruta activa en cualquier momento.
  /**
   * usePathname es un hook de Next.js que te devuelve la ruta actual del navegador (por ejemplo, /, /services, etc.).
   * ⚠️ Importante: Solo funciona en componentes cliente (por eso viste "use client" al inicio del archivo).
   * Se usa para poder detectar en qué página estás actualmente y resaltar el enlace activo en el menú de navegación.
   * 🧩 ¿Cómo sabe Next.js qué ruta estás viendo?
    Cuando usas usePathname():
    Next.js escucha los cambios de ruta automáticamente.
    No necesitas eventos adicionales.
    Funciona perfectamente con navegación SPA (sin recarga de página).
    | Uso común                               | ¿Por qué sirve?                              |
    | --------------------------------------- | -------------------------------------------- |
    | Menús de navegación                     | Resaltar el link activo                      |
    | Breadcrumbs (migas de pan)              | Mostrar dónde está el usuario                |
    | Mostrar/ocultar contenido según la ruta | Ej: ocultar el header en `/login` o `/admin` |
    | Animaciones de transición entre páginas | Saber si vienes de una sección específica    |

   */
  const pathname = usePathname()
  // Este console.log para poder saber en donde esta ubicado, mediante el nav desktop
  console.log(pathname);
  return (
    <nav className="flex gap-8">

      {/* Renderizado dinámico de enlaces
      | Característica             | ✅ Correcto uso                                     |
      | -------------------------- | -------------------------------------------------- |
      | `link.path === pathname`   | Para marcar el link activo                         |
      | `capitalize`               | Para que los nombres se vean con mayúscula inicial |
      | `hover:text-accent`        | Buena UX en hover                                  |
      | `transition-all`           | Añade una animación suave                          |
      | `border-b-2 border-accent` | Subraya el link activo, visualmente claro          | */}
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
            capitalize font-medium hover:text-accent transition-all`}>
            {/* Esto hace que si el enlace coincide con la ruta actual, se apliquen estilos para mostrarlo como "activo". */}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav