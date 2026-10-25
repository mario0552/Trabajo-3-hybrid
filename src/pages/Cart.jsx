import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../context/CartContext";

const formatPrice = (price) => `$ ${Number(price).toLocaleString("es-AR")}`;

function Cart() {
  const { cart, total, updateQuantity, removeFromCart, clearCart } =
    useContext(CartContext);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Carrito de compras</h1>
          <p className="mt-1 text-sm text-suave">
            Revisá los repuestos que seleccionaste.
          </p>
        </div>
        {cart.length > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="rounded-full border border-borde px-4 py-2 text-sm font-semibold text-suave transition hover:border-red-400 hover:text-red-400"
          >
            Vaciar carrito
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="rounded-2xl border border-borde bg-superficie/80 p-8 text-center">
          <p className="mb-4 text-suave">Tu carrito está vacío.</p>
          <Link
            to="/productos"
            className="inline-flex rounded-full bg-principal px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
          >
            Explorar productos
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {cart.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-borde bg-superficie/80 p-4 sm:flex-row sm:items-center"
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="h-28 w-full rounded-xl object-cover sm:w-36"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-suave">
                    {item.categoria}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold">{item.nombre}</h2>
                  <p className="mt-1 font-bold text-principal">
                    {formatPrice(item.precio)}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="h-9 w-9 rounded-full border border-borde font-bold transition hover:border-principal hover:text-principal"
                      aria-label={`Reducir cantidad de ${item.nombre}`}
                    >
                      −
                    </button>
                    <span
                      className="min-w-6 text-center font-semibold"
                      aria-label={`Cantidad: ${item.quantity}`}
                    >
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="h-9 w-9 rounded-full border border-borde font-bold transition hover:border-principal hover:text-principal"
                      aria-label={`Aumentar cantidad de ${item.nombre}`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-400 transition hover:text-red-300"
                    aria-label={`Eliminar ${item.nombre} del carrito`}
                  >
                    Eliminar
                  </button>
                </div>
                <p className="min-w-28 text-right font-bold sm:self-center">
                  {formatPrice(Number(item.precio) * item.quantity)}
                </p>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-borde bg-superficie/80 p-5">
            <h2 className="text-xl font-bold">Resumen</h2>
            <div className="mt-4 flex justify-between border-t border-borde pt-4">
              <span className="text-suave">Total</span>
              <span className="text-xl font-bold text-principal">
                {formatPrice(total)}
              </span>
            </div>
            <p className="mt-3 text-sm text-suave">
              El envío y el pago se coordinan al confirmar la compra.
            </p>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
