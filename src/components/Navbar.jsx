import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser, isLoggedIn, isAdmin, logout } = useAuth();

  const close = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    `block py-2 transition hover:text-principal ${isActive ? "text-principal" : "text-suave"}`;

  function handleLogout() {
    logout();
    close();
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 border-principal bg-superficie">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" onClick={close} className="text-xl font-bold">
          Hybrid<span className="text-principal">Parts</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          className="text-2xl md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

        <ul
          className={`${open ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-1 border-b border-borde bg-superficie px-4 pb-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:p-0`}
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

          {isAdmin && (
            <li>
              <NavLink to="/admin" onClick={close} className={linkClass}>
                Admin
              </NavLink>
            </li>
          )}

          {isLoggedIn ? (
            <>
              <li className="py-2 font-semibold text-principal">
                {currentUser.nombre}
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
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
