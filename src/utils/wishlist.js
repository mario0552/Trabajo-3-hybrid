import { getUser, getUsers } from "./auth";

// Mismo lugar donde auth.js guarda a los usuarios
const USERS_KEY = "hp_users";
export const WISHLIST_EVENT = "wishlist-cambio";

// Lista de deseos del usuario con sesión: un arreglo de ids guardado dentro
// del propio usuario. Si no hay sesión, devuelve [].
export function getWishlist() {
  const session = getUser();
  if (!session) return [];
  const user = getUsers().find((u) => u.id === session.id);
  return user?.wishlist ?? []; // los usuarios que ya existían no tienen el campo
}

// Agrega el producto si no estaba, o lo quita si ya estaba. Devuelve la lista nueva.
export function toggleWishlist(productId) {
  const session = getUser();
  if (!session) return [];

  const actual = getWishlist();
  const nueva = actual.includes(productId)
    ? actual.filter((id) => id !== productId)
    : [...actual, productId];

  const users = getUsers().map((u) =>
    u.id === session.id ? { ...u, wishlist: nueva } : u,
  );
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  // Avisa a los corazones y a la página /wishlist que la lista cambió
  window.dispatchEvent(new Event(WISHLIST_EVENT));
  return nueva;
}
