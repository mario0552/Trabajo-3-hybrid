import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import initialUsers from "../data/users.json";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [users, setUsers] = useLocalStorage("hp_users", initialUsers);
  const [sessionId, setSessionId] = useLocalStorage("hp_session", null);

  // El usuario actual se busca en la lista: así hay una sola fuente de datos
  const currentUser = users.find((u) => u.id === sessionId) || null;
  const isLoggedIn = currentUser !== null;
  const isAdmin = currentUser?.rol === "admin";

  function register({ nombre, email, password }) {
    const emailLimpio = email.trim().toLowerCase();
    if (users.some((u) => u.email === emailLimpio)) {
      return { ok: false, error: "Ese email ya está registrado." };
    }
    const newUser = {
      id: `user-${Date.now()}`,
      nombre: nombre.trim(),
      email: emailLimpio,
      password,
      rol: "user",
    };
    setUsers((prev) => [...prev, newUser]);
    setSessionId(newUser.id); // al registrarse queda con la sesión iniciada
    return { ok: true };
  }

  function login(email, password) {
    const user = users.find(
      (u) => u.email === email.trim().toLowerCase() && u.password === password,
    );
    if (!user) return { ok: false, error: "Email o contraseña incorrectos." };
    setSessionId(user.id);
    return { ok: true };
  }

  function logout() {
    setSessionId(null);
  }

  // Los administradores no se pueden borrar
  function deleteUser(id) {
    setUsers((prev) => prev.filter((u) => u.id !== id || u.rol === "admin"));
  }

  const value = {
    users,
    currentUser,
    isLoggedIn,
    isAdmin,
    register,
    login,
    logout,
    deleteUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return context;
}
