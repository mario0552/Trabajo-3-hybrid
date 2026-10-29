import { useState } from "react";
import FormInput from "../components/FormInput";
import { validateName, validateEmail } from "../utils/Validators";

// Validación propia de esta página: el mensaje necesita al menos 10 caracteres
function validateMessage(mensaje) {
  if (mensaje.trim().length < 10)
    return "Contanos brevemente tu consulta (mínimo 10 caracteres).";
  return "";
}

function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setEnviado(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      nombre: validateName(form.nombre),
      email: validateEmail(form.email),
      mensaje: validateMessage(form.mensaje),
    };
    setErrors(newErrors);

    // Si algún campo tiene mensaje de error, no seguimos
    if (Object.values(newErrors).some((msg) => msg !== "")) return;

    // Todavía no hay servidor: dejamos el formulario vacío y mostramos el aviso
    setForm({ nombre: "", email: "", mensaje: "" });
    setEnviado(true);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">CONTACTO</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-borde">
          <iframe
            src="https://maps.google.com/maps?q=Av.%20Libertador%201234%2C%20Buenos%20Aires&output=embed"
            title="Ubicación de HybridParts en el mapa"
            loading="lazy"
            className="h-full w-full border-0"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-borde bg-superficie/80 p-6 backdrop-blur-sm"
        >
          <FormInput
            label="Nombre:"
            id="contacto-nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            error={errors.nombre}
          />
          <FormInput
            label="Email:"
            id="contacto-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          <div className="mb-4">
            <label
              htmlFor="contacto-mensaje"
              className="mb-1 block text-sm text-suave"
            >
              Mensaje:
            </label>
            <textarea
              id="contacto-mensaje"
              name="mensaje"
              rows="5"
              value={form.mensaje}
              onChange={handleChange}
              className={`w-full rounded border bg-fondo px-3 py-2 text-texto outline-none focus:border-principal ${
                errors.mensaje ? "border-red-500" : "border-borde"
              }`}
            />
            {errors.mensaje && (
              <p className="mt-1 text-sm text-red-400">{errors.mensaje}</p>
            )}
          </div>

          {enviado && (
            <p className="mb-4 rounded border border-principal px-3 py-2 text-sm text-principal">
              ¡Gracias! Recibimos tu consulta y te responderemos a la brevedad.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-principal py-2 font-semibold text-white hover:opacity-90"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
