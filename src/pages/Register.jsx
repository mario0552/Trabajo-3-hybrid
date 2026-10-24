import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FormInput from "../components/FormInput";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../utils/Validators";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      nombre: validateName(form.nombre),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      password2:
        form.password !== form.password2 ? "Las contraseñas no coinciden." : "",
    };
    setErrors(newErrors);

    // Si algún campo tiene mensaje de error, no seguimos
    if (Object.values(newErrors).some((msg) => msg !== "")) return;

    const result = register(form);
    if (!result.ok) {
      setErrors({ email: result.error });
      return;
    }
    navigate("/");
  }

  return (
    <section className="mx-auto max-w-md px-4 py-12">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-borde bg-superficie/80 p-6 backdrop-blur-sm"
      >
        <h1 className="mb-6 text-2xl font-bold text-principal">Crear cuenta</h1>

        <FormInput
          label="Nombre y apellido"
          id="reg-nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          error={errors.nombre}
        />
        <FormInput
          label="Email"
          id="reg-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Contraseña"
          id="reg-password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <FormInput
          label="Confirmar contraseña"
          id="reg-password2"
          name="password2"
          type="password"
          value={form.password2}
          onChange={handleChange}
          error={errors.password2}
        />

        <button
          type="submit"
          className="w-full rounded-full bg-principal py-2 font-semibold text-white hover:opacity-90"
        >
          Crear cuenta
        </button>

        <p className="mt-4 text-center text-sm text-suave">
          ¿Ya tenés cuenta?{" "}
          <Link to="/login" className="text-principal">
            Ingresá acá
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
