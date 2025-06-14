import Link from "next/link";
import { Button } from "@/components/ui/button";


// Components
import Nav from "./Nav";

const Header = () => {
    /**
     * py-8
     * Significa: padding-top y padding-bottom de 2rem (32px).
       El prefijo p es para padding, y y indica que se aplica en el eje vertical (arriba y abajo).

       xl:py-12
       Es una clase responsive.
        Significa que cuando el viewport tenga un ancho de 1280px o más (breakpoint xl), se aplicará:
        padding-top: 3rem; (48px)
        padding-bottom: 3rem;
        🔁 Sobrescribe la clase py-8 en pantallas grandes.
        Todo esto significa: 
        El <header> tiene 32px de padding vertical por defecto.
        En pantallas grandes (xl), el padding vertical aumenta a 48px.
        El texto dentro será blanco.

        | Pantalla           | Padding vertical | Texto  |
        | ------------------ | ---------------- | ------ |
        | Móvil / normal     | `py-8` → 32px    | Blanco |
        | Pantallas ≥ 1280px | `py-12` → 48px   | Blanco |

     */
    return <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto">

            {/* LOGO */}
            <Link href="/">
                {/* Link: Este es un componente de Next.js que se comporta como un <a href="/">, pero con optimización para SPA (Single Page Application). Dentro de este <Link> puedes poner cualquier contenido, como un <h1>, un botón, o una imagen. Next.js detecta esto y hace el comportamiento de enlace. */}
                <h1 className="text-4xl font-semibold">
                    {/*
                text-4xl
                Define el tamaño del texto como grande.
                En Tailwind, 4xl suele ser ~2.25rem o 36px.
                font-semibold
                Aplica un peso de fuente semi-negrita (font-weight: 600)
                Más fuerte que normal (400), pero no tan grueso como bold (700)  */}
                    Luke
                    <span className="text-accent">.</span></h1>
                {/*  text-accent: Esta clase no es estándar de Tailwind, seguramente está definida en tu configuración de Tailwind (en tailwind.config.js) */}
            </Link>
            {/* Elemento	Descripción
            container mx-auto	Centra horizontalmente el contenido con ancho máximo adaptativo
            Link href="/"	Enlace interno que navega al inicio del sitio
            text-4xl	Texto grande (≈ 36px)
            font-semibold	Peso de fuente medio-alto
            text-accent	Color especial para destacar el punto final */}

            {/* DESKTOP NAV & HIRE ME BUTTON */}
            <div className="hidden xl:flex">
                <Nav />
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>



        </div>
    </header>;
};

export default Header;