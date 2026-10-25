import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { id, nombre, categoria, marca, precio, stock, imagen } = product;
  const soldOut = stock === 0;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-borde bg-superficie/100 backdrop-blur-sm">
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
        <button
          type="button"
          onClick={() => addToCart(product)}
          disabled={soldOut}
          className="rounded-full border border-principal px-4 py-2 font-semibold text-principal transition hover:bg-principal hover:text-white disabled:cursor-not-allowed disabled:border-borde disabled:text-suave"
        >
          Agregar al carrito
        </button>

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
