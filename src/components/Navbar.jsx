import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { getUser, logout } from "../utils/auth";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const { itemCount } = useContext(CartContext);

  const user = getUser();
  const isAdmin = user?.role === "admin";

  const close = () => {
    setOpen(false);
    setAdminOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `block py-2 transition hover:text-principal ${isActive ? "text-principal" : "text-suave"}`;

  function handleLogout() {
    logout();
    close();
    navigate("/login");
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 border-principal bg-superficie">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3">
        <Link to="/" onClick={close} className="text-xl font-bold">
          Hybrid<span className="text-principal">Parts</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="text-2xl xl:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

        <ul
          className={`${open ? "flex" : "hidden"} absolute left-0 top-full z-40 w-full flex-col gap-1 border-b border-borde bg-superficie px-4 pb-4 xl:static xl:flex xl:w-auto xl:flex-1 xl:flex-row xl:flex-wrap xl:items-center xl:justify-end xl:gap-x-4 xl:gap-y-1 xl:border-0 xl:bg-transparent xl:p-0`}
        >
          <li>
            <NavLink to="/productos" onClick={close} className={linkClass}>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={close} className={linkClass}>
              Acerca de nosotros
            </NavLink>
          </li>

          <li>
            <NavLink to="/contacto" onClick={close} className={linkClass}>
              Contacto
            </NavLink>
          </li>

          {isAdmin && (
            <li className="relative">
              <button
                type="button"
                onClick={() => setAdminOpen((current) => !current)}
                aria-expanded={adminOpen}
                aria-haspopup="true"
                className="flex w-full items-center justify-between gap-2 py-2 text-left text-suave transition hover:text-principal xl:w-auto"
              >
                Administración
                <span aria-hidden="true" className="text-xs">
                  {adminOpen ? "▲" : "▼"}
                </span>
              </button>
              <ul
                className={`${adminOpen ? "block" : "hidden"} mt-1 space-y-1 rounded-lg border border-borde bg-superficie p-2 xl:absolute xl:left-0 xl:top-full xl:z-50 xl:mt-2 xl:min-w-48 xl:shadow-xl`}
              >
                <li>
                  <NavLink
                    to="/admin"
                    end
                    onClick={close}
                    className={linkClass}
                  >
                    Gestión de stock
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/usuarios"
                    onClick={close}
                    className={linkClass}
                  >
                    Gestión de usuarios
                  </NavLink>
                </li>
              </ul>
            </li>
          )}

          {user ? (
            <>
              <li>
                <NavLink to="/wishlist" onClick={close} className={linkClass}>
                  Favoritos
                </NavLink>
              </li>
              <li
                className="max-w-full truncate py-2 font-semibold text-principal xl:max-w-44"
                title={user.nombre}
              >
                {isAdmin && "👑 "}
                {user.nombre}
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded bg-principal px-3 py-1.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login" onClick={close} className={linkClass}>
                  Ingresar
                </NavLink>
              </li>
              <li>
                <Link
                  to="/register"
                  onClick={close}
                  className="inline-block rounded bg-principal px-3 py-1.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  Crear cuenta
                </Link>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/carrito"
              onClick={close}
              aria-label={`Carrito de compras, ${itemCount} productos`}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 py-2 transition hover:text-principal ${
                  isActive ? "text-principal" : "text-suave"
                }`
              }
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 1.9-1.4L22 8H6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="20" r="1.5" fill="currentColor" />
                <circle cx="18" cy="20" r="1.5" fill="currentColor" />
              </svg>
              Carrito
              <span className="min-w-6 rounded-full bg-principal px-2 py-0.5 text-center text-xs font-bold text-white">
                {itemCount}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
