import { Link } from "react-router";
import fondoAncho from "../assets/404-wide.jpg";
import fondoVertical from "../assets/404-slim.jpg";

function NotFound() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-black">
      <h1 className="sr-only">Página no encontrada</h1>
      <picture>
        <source media="(min-width: 768px)" srcSet={fondoAncho} />
        <img
          src={fondoVertical}
          alt="Error 404: repuesto no encontrado. El gato mecánico de Hybrid Parts junto a un cartel en el taller"
          className="h-full w-full object-contain md:object-cover"
        />
      </picture>
      <Link
        to="/"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-principal px-6 py-3 font-semibold text-white shadow-lg hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </main>
  );
}

export default NotFound;
