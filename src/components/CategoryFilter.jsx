function CategoryFilter({ categories, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Filtrar por categoría"
      className="rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal"
    >
      <option value="">Todas las categorías</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
