function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar por nombre..."
      aria-label="Buscar productos por nombre"
      className="w-full rounded border border-borde bg-fondo px-3 py-2 text-texto outline-none focus:border-principal"
    />
  );
}

export default SearchBar;
