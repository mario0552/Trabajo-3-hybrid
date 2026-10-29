import { useContext } from "react";
import { Link } from "react-router";
import { ProductsContext } from "../context/ProductsContext";
import useWishlist from "../hooks/useWishlist";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const { products } = useContext(ProductsContext);
  const { wishlist } = useWishlist();

  // Solo los productos que siguen existiendo en el catálogo
  const favoritos = products.filter((product) => wishlist.includes(product.id));

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold">Mis favoritos</h1>
      <p className="mb-6 mt-1 text-sm text-suave">
        Los repuestos que guardaste para más adelante.
      </p>

      {favoritos.length === 0 ? (
        <div className="rounded-2xl border border-borde bg-superficie/80 p-8 text-center">
          <p className="mb-4 text-suave">Todavía no guardaste ningún producto.</p>
          <Link
            to="/productos"
            className="inline-flex rounded-full bg-principal px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
          >
            Explorar productos
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favoritos.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;
