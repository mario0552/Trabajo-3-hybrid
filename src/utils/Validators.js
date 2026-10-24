export function validateName(nombre) {
  if (nombre.trim().length < 3) return "Ingresá tu nombre (mínimo 3 letras).";
  return "";
}

export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.trim())) return "Ingresá un email válido.";
  return "";
}

export function validatePassword(password) {
  if (password.length < 8)
    return "La contraseña debe tener al menos 8 caracteres.";
  return "";
}
