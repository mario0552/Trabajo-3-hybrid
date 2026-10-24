import initialUsers from "../data/users.json";

const USERS_KEY = "hp_users";
const SESSION_KEY = "user";

// Lista de usuarios: la primera vez se carga desde users.json
export function getUsers() {
  const saved = localStorage.getItem(USERS_KEY);
  if (saved) return JSON.parse(saved);
  localStorage.setItem(USERS_KEY, JSON.stringify(initialUsers));
  return initialUsers;
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Usuario con sesión iniciada (o null si es invitado)
export function getUser() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

function saveSession(user) {
  const session = {
    id: user.id,
    nombre: user.nombre,
    email: user.email,
    role: user.role,
    token: crypto.randomUUID(),
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function login(email, password) {
  const user = getUsers().find(
    (u) => u.email === email.trim().toLowerCase() && u.password === password,
  );
  if (!user) return { ok: false, error: "Email o contraseña incorrectos." };
  saveSession(user);
  return { ok: true };
}

export function register({ nombre, email, password }) {
  const users = getUsers();
  const emailLimpio = email.trim().toLowerCase();
  if (users.some((u) => u.email === emailLimpio)) {
    return { ok: false, error: "Ese email ya está registrado." };
  }
  const newUser = {
    id: `user-${Date.now()}`,
    nombre: nombre.trim(),
    email: emailLimpio,
    password,
    role: "user",
  };
  saveUsers([...users, newUser]);
  saveSession(newUser); // al registrarse queda con la sesión iniciada
  return { ok: true };
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

// Los administradores no se pueden borrar
export function deleteUser(id) {
  saveUsers(getUsers().filter((u) => u.id !== id || u.role === "admin"));
}
