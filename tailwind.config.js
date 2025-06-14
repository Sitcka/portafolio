/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  /**
    Esto le dice a Tailwind:
    “Escanea estos archivos y genera solo las clases CSS que realmente se usan ahí”.
    Incluye:
    /app/ → para proyectos con la App Router de Next.js
    /pages/ → para la versión tradicional con Pages Router
    /components/ → tus componentes reutilizables

 */
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    /**
     * Hace que los div class="container":
      estén centrados (center: true)
      tengan 15px de padding lateral por defecto
     */
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    /**
     *  Esto define los breakpoints para diseño responsive (muy útil para clases como xl:py-12 en tu <header>).
     */
    fontFamily: {
      primary: ["var(--font-jetbrainsMono)"],
    },
    /**
     * Se espera que tú hayas cargado una fuente (como JetBrains Mono) usando CSS o     Next.js.
      Luego puedes usar font-primary para aplicar esa fuente.
     */
    extend: {
      /**
       * 📌 Esto:
      Añade text-primary, bg-primary, etc.
      Añade text-accent, bg-accent, text-accent-foreground
      Usa CSS Variables que están definidas en tu globals.css (explicado abajo)
       */
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187"
        },
        border: "var(--color-border)",
        ring: "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
      },
      /**
       * bg-primary → fondo oscuro
      text-accent → color principal brillante
      text-accent-hover (¡ojo! debes usar accent-hover con una variante hover: en el HTML)
      text-foreground, bg-background, border-border, etc. — todos usando variables CSS
       */
    },
  },
  plugins: [require("tailwindcss-animate")],
};
