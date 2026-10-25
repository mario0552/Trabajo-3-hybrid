import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductTable from "../components/Admin/ProductTable";
import ProductForm from "../components/Admin/ProductForm";

const emptyProduct = {
  codigo: "",
  nombre: "",
  categoria: "",
  precio: "",
  marca: "",
  stock: "",
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
  const categories = [...new Set(products.map((product) => product.categoria))];

  const openCreateModal = () => {
    setEditingProduct(null);
    setFormData({ ...emptyProduct });
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
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-3xl font-bold">Administrar productos</h1>
          <button
            type="button"
            onClick={openCreateModal}
            aria-haspopup="dialog"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-orange-300 bg-principal px-6 py-3 font-bold text-white shadow-lg shadow-orange-950/40 transition hover:scale-[1.02] hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-5 w-5"
            >
              <path
                d="M10 4v12M4 10h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Agregar producto
          </button>
        </div>
        <p className="mt-2 text-sm text-suave">
          {products.length} {products.length === 1 ? "producto" : "productos"}{" "}
          en el catálogo
        </p>
      </div>

      <ProductTable
        products={products}
        onEdit={openEditModal}
        onDelete={handleDeleteProduct}
      />

      {isModalOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center overflow-y-auto bg-black/60 p-4"
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

            <ProductForm
              formData={formData}
              formError={formError}
              isEditing={Boolean(editingProduct)}
              categories={categories}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onCancel={closeModal}
            />
          </section>
        </div>
      )}
    </section>
  );
}

export default Admin;
