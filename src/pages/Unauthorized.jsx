import { Link } from "react-router";
import fondoAncho from "../assets/gato-mecanico.webp";
import fondoVertical from "../assets/no-autorizado-pq.jpg";

function Unauthorized() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-black">
      <h1 className="sr-only">No autorizado</h1>
      <picture>
        <source media="(min-width: 768px)" srcSet={fondoAncho} />
        <img
          src={fondoVertical}
          alt="Gato mecánico de Hybrid Parts con un cartel que dice: No autorizado, no tienes permiso de ingresar a esta página"
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

export default Unauthorized;
