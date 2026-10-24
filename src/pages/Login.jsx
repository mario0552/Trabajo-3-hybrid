import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FormInput from "../components/FormInput";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const result = login(email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate("/");
  }

  return (
    <section className="mx-auto max-w-md px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-borde bg-superficie/80 p-6 backdrop-blur-sm"
      >
        <h1 className="mb-6 text-2xl font-bold text-principal">
          Ingresá a tu cuenta
        </h1>

        <FormInput
          label="Email"
          id="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Contraseña"
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-full bg-principal py-2 font-semibold text-white hover:opacity-90"
        >
          Ingresar
        </button>

        <p className="mt-4 text-center text-sm text-suave">
          ¿No tenés cuenta?{" "}
          <Link to="/register" className="text-principal">
            Registrate
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
