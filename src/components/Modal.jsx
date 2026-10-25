function Modal({ title, description, onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/60 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="my-auto w-full max-w-2xl rounded-2xl border border-borde bg-superficie p-6 shadow-2xl"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 id="modal-title" className="text-2xl font-bold">
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-sm text-suave">{description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-1 text-xl text-suave hover:bg-fondo hover:text-texto"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        {children}
      </section>
    </div>
  );
}

export default Modal;
