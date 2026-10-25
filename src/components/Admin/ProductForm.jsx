const inputClass =
  "mt-1 w-full rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal";

function ProductForm({
  formData,
  formError,
  isEditing,
  categories,
  onChange,
  onSubmit,
  onCancel,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-x-4 sm:grid-cols-2">
        <label className="mb-4 block text-sm text-suave">
          Código
          <input
            name="codigo"
            value={formData.codigo}
            onChange={onChange}
            required
            maxLength={40}
            className={inputClass}
          />
        </label>
        <label className="mb-4 block text-sm text-suave">
          Nombre
          <input
            name="nombre"
            value={formData.nombre}
            onChange={onChange}
            required
            maxLength={120}
            className={inputClass}
          />
        </label>
        <label className="mb-4 block text-sm text-suave">
          Categoría
          <select
            name="categoria"
            value={formData.categoria}
            onChange={onChange}
            required
            className={inputClass}
          >
            <option value="">Elegí una categoría</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className="mb-4 block text-sm text-suave">
          Precio
          <input
            name="precio"
            type="number"
            value={formData.precio}
            onChange={onChange}
            required
            min="0"
            step="0.01"
            className={inputClass}
          />
        </label>
        <label className="mb-4 block text-sm text-suave">
          Marca
          <input
            name="marca"
            value={formData.marca}
            onChange={onChange}
            maxLength={80}
            className={inputClass}
          />
        </label>
        <label className="mb-4 block text-sm text-suave">
          Stock
          <input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={onChange}
            required
            min="0"
            step="1"
            className={inputClass}
          />
        </label>
        <label className="mb-4 block text-sm text-suave sm:col-span-2">
          URL de imagen
          <input
            name="imagen"
            type="url"
            value={formData.imagen}
            onChange={onChange}
            className={inputClass}
          />
        </label>
        <label className="mb-4 block text-sm text-suave sm:col-span-2">
          Descripción
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={onChange}
            rows={3}
            maxLength={500}
            className={`${inputClass} resize-y`}
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
          onClick={onCancel}
          className="rounded-full border border-borde px-5 py-2 font-semibold transition hover:bg-fondo"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-full bg-principal px-5 py-2 font-semibold text-white transition hover:opacity-90"
        >
          {isEditing ? "Guardar cambios" : "Crear producto"}
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
