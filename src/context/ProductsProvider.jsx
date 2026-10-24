import { useState, useEffect } from "react";
import { ProductsContext } from "./ProductsContext.js";
import initialProducts from "../data/products.json";

const STORAGE_KEY = "hp_products";

// Lee los productos guardados; si no hay nada, usa los de products.json
function loadProducts() {
  const savedProducts = localStorage.getItem(STORAGE_KEY);
  return savedProducts ? JSON.parse(savedProducts) : initialProducts;
}

function ProductsProvider({ children }) {
  const [products, setProducts] = useState(loadProducts);

  // Cada vez que cambia la lista, se guarda sola en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  // CREATE: agrega un producto nuevo con un id único
  const handleCreate = (newProduct) => {
    setProducts([...products, { ...newProduct, id: `prod-${Date.now()}` }]);
  };

  // UPDATE: reemplaza el producto que tiene el mismo id
  const handleUpdate = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product,
      ),
    );
  };

  // DELETE: se queda con todos los productos menos el que tiene ese id
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Para validar que el código no se repita (al editar se ignora el mismo producto)
  const codeExists = (codigo, ignoreId = null) => {
    return products.some(
      (product) =>
        product.codigo.toLowerCase() === codigo.trim().toLowerCase() &&
        product.id !== ignoreId,
    );
  };

  return (
    // 2️⃣ Proveer: todo lo que esté adentro puede leer estos valores
    <ProductsContext
      value={{ products, handleCreate, handleUpdate, handleDelete, codeExists }}
    >
      {children}
    </ProductsContext>
  );
}

export default ProductsProvider;
