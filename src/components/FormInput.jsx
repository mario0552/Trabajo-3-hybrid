function FormInput({ label, id, error, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1 block text-sm text-suave">
        {label}
      </label>
      <input
        id={id}
        className={`w-full rounded border bg-fondo px-3 py-2 text-texto outline-none focus:border-principal ${
          error ? "border-red-500" : "border-borde"
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}

export default FormInput;
