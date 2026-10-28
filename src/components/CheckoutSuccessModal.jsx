function CheckoutSuccessModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 animate-[checkout-backdrop_300ms_ease-in-out]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-success-title"
        className="w-full max-w-md rounded-2xl border border-neutral-800 bg-gray-900 p-7 text-center shadow-2xl transition-all duration-300 ease-in-out animate-[checkout-panel_300ms_ease-in-out]"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-9 w-9"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="m8 12 2.5 2.5L16.5 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
        </div>
        <h2
          id="checkout-success-title"
          className="text-2xl font-bold text-white"
        >
          ¡Compra Exitosa!
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-300">
          Gracias por elegirnos. Tu pedido ha sido procesado con éxito y estamos
          preparando tus autopartes.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-7 w-full rounded-full bg-emerald-500 px-5 py-3 font-semibold text-gray-950 transition-all duration-300 ease-in-out hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          Seguir comprando
        </button>
      </section>
    </div>
  );
}

export default CheckoutSuccessModal;
