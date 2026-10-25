import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

const emptyProduct = {
  codigo: "",
  nombre: "",
  categoria: "",
  precio: "",
  marca: "",
  stock: "0",
  imagen: "",
  descripcion: "",
};

function Admin() {
  const { products, handleCreate, handleUpdate, handleDelete, codeExists } =
    useContext(ProductsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState(emptyProduct);
  const [formError, setFormError] = useState("");

  const openCreateModal = () => {
    setEditingProduct(null);
    setFormData(emptyProduct);
    setFormError("");
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setFormData({
      codigo: product.codigo ?? "",
      nombre: product.nombre ?? "",
      categoria: product.categoria ?? "",
      precio: String(product.precio ?? ""),
      marca: product.marca ?? "",
      stock: String(product.stock ?? 0),
      imagen: product.imagen ?? "",
      descripcion: product.descripcion ?? "",
    });
    setFormError("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormError("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const code = formData.codigo.trim();

    if (codeExists(code, editingProduct?.id)) {
      setFormError("Ya existe un producto con ese código.");
      return;
    }

    const productData = {
      ...formData,
      codigo: code,
      nombre: formData.nombre.trim(),
      categoria: formData.categoria.trim(),
      precio: Number(formData.precio),
      marca: formData.marca.trim() || null,
      stock: Number(formData.stock),
      imagen: formData.imagen.trim(),
      descripcion: formData.descripcion.trim(),
    };

    if (editingProduct) {
      handleUpdate({ ...editingProduct, ...productData });
    } else {
      handleCreate(productData);
    }

    closeModal();
  };

  const handleDeleteProduct = (product) => {
    const shouldDelete = window.confirm(
      `¿Querés eliminar "${product.nombre}"? Esta acción no se puede deshacer.`,
    );

    if (shouldDelete) {
      handleDelete(product.id);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Administrar productos</h1>
          <p className="mt-1 text-sm text-suave">
            {products.length} {products.length === 1 ? "producto" : "productos"}{" "}
            en el catálogo
          </p>
        </div>
        <button
          type="button"
          onClick={openCreateModal}
          className="rounded-full bg-principal px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
        >
          Agregar producto
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-borde bg-superficie/80">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] divide-y divide-borde text-left">
            <thead className="bg-fondo/70">
              <tr className="text-sm text-suave">
                <th scope="col" className="px-5 py-4 font-semibold">
                  Producto
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  Categoría
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  Precio
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  Stock
                </th>
                <th scope="col" className="px-5 py-4 text-right font-semibold">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-borde">
              {products.map((product) => (
                <tr key={product.id} className="transition hover:bg-fondo/40">
                  <td className="px-5 py-4">
                    <p className="font-semibold">{product.nombre}</p>
                    <p className="mt-1 text-sm text-suave">
                      {product.codigo} · {product.marca || "Sin marca"}
                    </p>
                  </td>
                  <td className="px-5 py-4 text-sm">{product.categoria}</td>
                  <td className="px-5 py-4 font-semibold">
                    $ {Number(product.precio).toLocaleString("es-AR")}
                  </td>
                  <td className="px-5 py-4 text-sm">{product.stock ?? 0}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => openEditModal(product)}
                        className="rounded-full border border-borde px-4 py-2 text-sm font-medium transition hover:border-principal hover:text-principal"
                        aria-label={`Editar ${product.nombre}`}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteProduct(product)}
                        className="rounded-full border border-red-500/40 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
                        aria-label={`Eliminar ${product.nombre}`}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-12 text-center text-sm text-suave"
                  >
                    Todavía no hay productos. Agregá uno para comenzar.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="my-auto w-full max-w-2xl rounded-2xl border border-borde bg-superficie p-6 shadow-2xl"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 id="product-modal-title" className="text-2xl font-bold">
                  {editingProduct ? "Editar producto" : "Nuevo producto"}
                </h2>
                <p className="mt-1 text-sm text-suave">
                  Completá los datos del producto para el catálogo.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full px-3 py-1 text-xl text-suave hover:bg-fondo hover:text-texto"
                aria-label="Cerrar formulario"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-x-4 sm:grid-cols-2">
                <label className="mb-4 block text-sm text-suave">
                  Código
                  <input
                    name="codigo"
                    value={formData.codigo}
                    onChange={handleChange}
                    required
                    maxLength={40}
                    className="mt-1 w-full rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal"
                  />
                </label>
                <label className="mb-4 block text-sm text-suave">
                  Nombre
                  <input
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    maxLength={120}
                    className="mt-1 w-full rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal"
                  />
                </label>
                <label className="mb-4 block text-sm text-suave">
                  Categoría
                  <input
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                    maxLength={80}
                    className="mt-1 w-full rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal"
                  />
                </label>
                <label className="mb-4 block text-sm text-suave">
                  Precio
                  <input
                    name="precio"
                    type="number"
                    value={formData.precio}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    className="mt-1 w-full rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal"
                  />
                </label>
                <label className="mb-4 block text-sm text-suave">
                  Marca
                  <input
                    name="marca"
                    value={formData.marca}
                    onChange={handleChange}
                    maxLength={80}
                    className="mt-1 w-full rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal"
                  />
                </label>
                <label className="mb-4 block text-sm text-suave">
                  Stock
                  <input
                    name="stock"
                    type="number"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                    min="0"
                    step="1"
                    className="mt-1 w-full rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal"
                  />
                </label>
                <label className="mb-4 block text-sm text-suave sm:col-span-2">
                  URL de imagen
                  <input
                    name="imagen"
                    type="url"
                    value={formData.imagen}
                    onChange={handleChange}
                    className="mt-1 w-full rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal"
                  />
                </label>
                <label className="mb-4 block text-sm text-suave sm:col-span-2">
                  Descripción
                  <textarea
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    rows={3}
                    maxLength={500}
                    className="mt-1 w-full resize-y rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal"
                  />
                </label>
              </div>

              {formError && (
                <p role="alert" className="mb-4 text-sm text-red-400">
                  {formError}
                </p>
              )}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-borde px-5 py-2 font-semibold transition hover:bg-fondo"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-principal px-5 py-2 font-semibold text-white transition hover:opacity-90"
                >
                  {editingProduct ? "Guardar cambios" : "Crear producto"}
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </section>
  );
}

export default Admin;