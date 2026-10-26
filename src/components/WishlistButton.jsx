import { useNavigate } from "react-router";
import useWishlist from "../hooks/useWishlist";
import { getUser } from "../utils/auth";

// Corazón para agregar o quitar un producto de la lista de deseos.
// Con conTexto={true} muestra también el texto (se usa en el detalle).
function WishlistButton({ productId, conTexto = false, className = "" }) {
  const navigate = useNavigate();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const active = isInWishlist(productId);

  const handleClick = () => {
    if (!getUser()) {
      navigate("/login");
      return;
    }
    toggleWishlist(productId);
  };

  const label = active ? "Quitar de favoritos" : "Agregar a favoritos";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center gap-2 rounded-full border transition ${
        active
          ? "border-principal text-principal"
          : "border-borde text-suave hover:border-principal hover:text-principal"
      } ${conTexto ? "px-6 py-3 font-semibold" : "h-9 w-9 bg-superficie/80"} ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        className="h-5 w-5"
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {conTexto && label}
    </button>
  );
}

export default WishlistButton;
