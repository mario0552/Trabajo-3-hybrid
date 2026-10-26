import { Link } from "react-router";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart, getAvailableStock } = useContext(CartContext);
  const [justAdded, setJustAdded] = useState(false);
  const feedbackTimeout = useRef(null);
  const { id, nombre, categoria, marca, precio, imagen } = product;
  const stock = getAvailableStock(product);
  const soldOut = stock === 0;

  useEffect(
    () => () => {
      window.clearTimeout(feedbackTimeout.current);
    },
    [],
  );

  const handleAddToCart = () => {
    if (!addToCart(product)) return;

    setJustAdded(true);
    window.clearTimeout(feedbackTimeout.current);
    feedbackTimeout.current = window.setTimeout(() => {
      setJustAdded(false);
    }, 800);
  };

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border bg-superficie backdrop-blur-sm transition duration-300 ${
        justAdded
          ? "scale-[1.02] border-principal shadow-[0_0_28px_rgba(255,122,0,0.28)]"
          : "border-borde"
      }`}
    >
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
          onClick={handleAddToCart}
          disabled={soldOut}
          className="rounded-full border border-principal px-4 py-2 font-semibold text-principal transition hover:bg-principal hover:text-white disabled:cursor-not-allowed disabled:border-borde disabled:text-suave"
          aria-live="polite"
        >
          {justAdded ? "¡Agregado!" : "Agregar al carrito"}
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
