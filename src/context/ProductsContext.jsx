import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import initialProducts from "../data/products.json";

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useLocalStorage(
    "hp_products",
    initialProducts,
  );

  function addProduct(data) {
    const newProduct = {
      ...data,
      id: `prod-${Date.now()}`, // id autogenerado
      precio: Number(data.precio),
      stock: Number(data.stock),
    };
    setProducts((prev) => [...prev, newProduct]);
  }

  function updateProduct(id, data) {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              ...data,
              precio: Number(data.precio),
              stock: Number(data.stock),
            }
          : p,
      ),
    );
  }

  function deleteProduct(id) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  function getProductById(id) {
    return products.find((p) => p.id === id);
  }

  // Para validar que el código no se repita (ignoreId sirve al editar)
  function codeExists(codigo, ignoreId = null) {
    return products.some(
      (p) =>
        p.codigo.toLowerCase() === codigo.trim().toLowerCase() &&
        p.id !== ignoreId,
    );
  }

  const value = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    codeExists,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProducts debe usarse dentro de <ProductsProvider>");
  return context;
}
