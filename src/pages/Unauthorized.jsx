import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <section className="mx-auto max-w-md px-4 py-12 text-center">
      <h1 className="mb-2 text-2xl font-bold text-principal">No autorizado</h1>
      <p className="mb-4 text-suave">No tenés permiso para ver esta página.</p>
      <Link to="/" className="text-principal">
        Volver al inicio
      </Link>
    </section>
  );
}

export default Unauthorized;
