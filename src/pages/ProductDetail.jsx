import { useContext } from "react";
import { Link, useParams } from "react-router";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const { addToCart, getAvailableStock } = useContext(CartContext);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Producto no encontrado</h1>
        <Link
          to="/productos"
          className="mt-4 inline-flex rounded-full bg-principal px-5 py-2.5 font-semibold text-white"
        >
          Volver al catálogo
        </Link>
      </section>
    );
  }

  const availableStock = getAvailableStock(product);
  const soldOut = availableStock === 0;

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-2">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="h-72 w-full rounded-2xl border border-borde object-cover md:h-full md:max-h-[520px]"
      />
      <div className="flex flex-col items-start">
        <p className="text-sm uppercase tracking-wide text-suave">
          {product.categoria}
          {product.marca ? ` · ${product.marca}` : ""}
        </p>
        <h1 className="mt-2 text-3xl font-bold">{product.nombre}</h1>
        <p className="mt-4 text-2xl font-bold text-principal">
          $ {Number(product.precio).toLocaleString("es-AR")}
        </p>
        <p
          className={`mt-2 text-sm ${soldOut ? "text-red-400" : "text-suave"}`}
        >
          {soldOut ? "Sin stock" : `Stock disponible: ${availableStock}`}
        </p>
        {product.descripcion && (
          <p className="mt-6 leading-relaxed text-suave">
            {product.descripcion}
          </p>
        )}
        <button
          type="button"
          onClick={() => addToCart(product)}
          disabled={soldOut}
          className="mt-8 rounded-full bg-principal px-6 py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:bg-borde"
        >
          Agregar al carrito
        </button>
        <Link
          to="/productos"
          className="mt-4 text-sm text-suave transition hover:text-principal"
        >
          Volver al catálogo
        </Link>
      </div>
    </section>
  );
}

export default ProductDetail;
