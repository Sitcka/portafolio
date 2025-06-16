"use client"
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Components
import Stairs from "./Stairs";


const StairTransition = () => {
  /**
   * Usa usePathname() para saber la página actual.
    Cuando cambia la ruta, se vuelve a montar el div con key={pathname}.
    Renderiza los Stairs dentro de un <AnimatePresence mode="wait">, que permite hacer animaciones de salida antes de mostrar la nueva ruta.
    También incluye un motion.div con un fondo oscuro que desaparece con opacity: 0, creando un efecto de fundido.
   */
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            {/* h-screen w-screen: ocupa toda la pantalla.
              fixed: posición fija (se mantiene mientras cambia el contenido).
              pointer-events-none: no bloquea clicks del usuario.
              z-40: se asegura de estar sobre el contenido.
              flex: para que los “escalones” estén uno al lado del otro (en columnas). */
              }
            <Stairs />
          </div>
          <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  )
}

export default StairTransition