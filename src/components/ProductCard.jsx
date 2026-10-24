import { Link } from "react-router";

function ProductCard({ product }) {
  const { id, nombre, categoria, marca, precio, stock, imagen } = product;
  const soldOut = stock === 0;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-borde bg-superficie/80 backdrop-blur-sm">
      <img
        src={imagen}
        alt={nombre}
        loading="lazy"
        className="h-48 w-full object-cover"
      />

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs uppercase tracking-wide text-suave">
          {categoria} · {marca}
        </span>
        <h2 className="text-lg font-semibold">{nombre}</h2>
        <p className="text-xl font-bold text-principal">
          $ {precio.toLocaleString("es-AR")}
        </p>
        <p className={`text-sm ${soldOut ? "text-red-400" : "text-suave"}`}>
          {soldOut ? "Sin stock" : `Stock: ${stock}`}
        </p>

        <Link
          to={`/product/${id}`}
          className="mt-auto rounded-full bg-principal py-2 text-center font-semibold text-white hover:opacity-90"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
