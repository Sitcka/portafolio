"use client";
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";


const PageTransition = ({ children }) => {
  /**
   * Este componente se encarga de mostrar una animación visual cada vez que cambias de ruta (página) en tu sitio con Next.js. Es una técnica común para mejorar la experiencia de usuario (UX) en apps modernas.
   * Use este comando para instalar AnimatePresence: npm install framer-motion
   * 
   */
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
          }}
          // exit={{
          //   opacity: 1,
          //   transition: { duration: 0.4, ease: "easeInOut" },
          // }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        /**
         * ✅ h-screen
          Significado: Altura igual al 100% del viewport (pantalla).
          Equivale a: height: 100vh;
          ¿Por qué?: Se usa para cubrir toda la pantalla verticalmente durante la transición.
          ✅ w-screen
          Significado: Ancho igual al 100% del viewport.
          Equivale a: width: 100vw;
          ¿Por qué?: Así la capa de transición cubre toda la pantalla horizontalmente.
          ✅ fixed
          Significado: Posición fija con respecto a la ventana del navegador.
          Equivale a: position: fixed;
          ¿Por qué?: Para que la transición se mantenga visible encima de todo durante el cambio de página, sin moverse con el scroll.
          ✅ top-0
          Significado: Posiciona el elemento con top: 0;
          ¿Por qué?: Como el elemento es fixed, esto hace que comience desde la parte superior de la pantalla.
          ✅ pointer-events-none
          Significado: Evita que este elemento capture clics o eventos del mouse.
          Equivale a: pointer-events: none;
          ¿Por qué?: Aunque el motion.div cubre toda la pantalla, esta clase permite que el usuario siga interactuando con el contenido debajo (por ejemplo, si hace clic justo cuando la animación termina).
          Todo combinado: Esta clase crea una capa que:
          Cubre toda la pantalla (vertical y horizontal),
          Se queda fija en su lugar (no se mueve con el scroll),
          Tiene un fondo oscuro (bg-primary),
          No bloquea clics (pointer-events-none),
          Y puede animarse con framer-motion.
         */
        />
        {children}
        {/* 
          Con esto detectas la ruta actual (/, /services, etc.).
          Al incluir key={pathname} en el <div>, le estás diciendo a React que este <div> se debe re-renderizar cada vez que cambie la ruta.
          Esto es clave para que AnimatePresence detecte un “unmount” y active las animaciones de salida (exit), aunque en tu código actual esa parte está comentada.
          "AnimatePresence" detecta cuándo un componente sale del DOM para animarlo antes de eliminarlo.
          "motion.div" es la capa que representa el efecto visual: una pantalla de color bg-primary que desaparece suavemente.
          "pointer-events-none" evita que esa capa interfiera con los clics.
        */}
      </div>
      {/* 
      Resumen sobre children, usePathname y key en animación de transiciones en Next.js
      Conceptos clave:
      1. children
      En React, children es una propiedad especial que contiene todo el contenido que un componente envuelve.

      En el contexto de un layout o un componente de transición, children representa la página o el contenido que cambia según la navegación.

      2. usePathname()
      Hook proporcionado por Next.js que devuelve la ruta actual de la aplicación (ejemplo: /contact).

      Permite detectar en qué página está el usuario en un momento dado.

      3. key
      Propiedad usada por React para identificar de manera única cada elemento en la renderización.

      Cuando la key cambia, React desmonta y vuelve a montar el componente, permitiendo ejecutar efectos y animaciones de entrada/salida.

      Cómo funcionan juntos en PageTransition:
      En el componente PageTransition, se obtiene la ruta actual con usePathname().

      Se usa la ruta (pathname) como key en un contenedor que envuelve el contenido (children).

      Esto obliga a React a reconocer cada cambio de ruta como un nuevo componente.

      Gracias a esto, Framer Motion puede ejecutar animaciones cuando el contenido cambia (por ejemplo, una animación de desvanecimiento al cambiar de página).

      Sin el key, React no reiniciaría el componente, y las animaciones de transición no funcionarían correctamente.

      Resumen final:
      Usar children permite envolver dinámicamente el contenido de cada página.
      Con usePathname detectamos la ruta actual.
      Al usar esa ruta como key, React sabe cuándo el contenido cambia y permite que las animaciones de transición se ejecuten correctamente.
      */}
    </AnimatePresence>
  )
}

export default PageTransition