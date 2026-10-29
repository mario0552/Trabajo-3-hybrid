import { useContext, useState } from "react";
import { useSearchParams } from "react-router";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

// Quita tildes y pasa a minúsculas: "baterias" encuentra "Baterías"
const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function Products() {
  const { products } = useContext(ProductsContext);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("categoria") ?? "";

  const setCategory = (value) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value) {
      nextParams.set("categoria", value);
    } else {
      nextParams.delete("categoria");
    }
    setSearchParams(nextParams, { replace: true });
  };

  // Valores calculados: no son estado, se recalculan en cada render
  const categories = [...new Set(products.map((p) => p.categoria))];
  const filteredProducts = products.filter(
    (p) =>
      normalize(p.nombre).includes(normalize(search.trim())) &&
      (category === "" || p.categoria === category),
  );

  const handleClear = () => {
    setSearch("");
    setCategory("");
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Catálogo</h1>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />
      </div>

      <p className="mb-4 text-sm text-suave">
        {filteredProducts.length}{" "}
        {filteredProducts.length === 1 ? "producto" : "productos"}
      </p>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-borde bg-superficie/80 p-8 text-center">
          <p className="mb-4 text-suave">
            No encontramos productos con esos filtros.
          </p>
          <button
            type="button"
            onClick={handleClear}
            className="rounded-full bg-principal px-4 py-2 font-semibold text-white hover:opacity-90"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;
