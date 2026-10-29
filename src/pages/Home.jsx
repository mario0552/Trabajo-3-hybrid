import { useEffect, useState } from "react";
import { Link } from "react-router";

const promotions = [
  {
    eyebrow: "ENERGÍA PARA CADA TRAYECTO",
    title: "Energía confiable para tu híbrido.",
    description:
      "Encontrá baterías seleccionadas para mantener tu híbrido en marcha y viajar con tranquilidad.",
    offer: "15% OFF",
    offerDetail: "en baterías seleccionadas",
    category: "Baterías",
    icon: "battery",
  },
  {
    eyebrow: "POTENCIA QUE SE SIENTE",
    title: "Todo para el corazón de tu híbrido.",
    description:
      "Motores, inversores y componentes seleccionados con asesoramiento de especialistas.",
    offer: "HASTA 6 CUOTAS",
    offerDetail: "en productos seleccionados",
    category: "Motores",
    icon: "engine",
  },
  {
    eyebrow: "MÁS KILÓMETROS, MENOS VUELTAS",
    title: "Tu próximo repuesto llega a casa.",
    description:
      "Comprá online y recibí tus repuestos en cualquier punto del país.",
    offer: "ENVÍO GRATIS",
    offerDetail: "en compras seleccionadas",
    category: "Cables y conectores de alto voltaje",
    icon: "shipping",
  },
];

const benefits = [
  {
    icon: "shield",
    title: "Calidad garantizada",
    description: "Repuestos seleccionados y garantía para que compres seguro.",
  },
  {
    icon: "truck",
    title: "Envíos a todo el país",
    description: "Recibí tu pedido donde estés, con seguimiento incluido.",
  },
  {
    icon: "card",
    title: "Pagos flexibles",
    description: "Elegí la forma de pago que mejor se adapta a vos.",
  },
  {
    icon: "wrench",
    title: "Asesoramiento técnico",
    description: "Te ayudamos a encontrar el repuesto adecuado para tu auto.",
  },
];

const categories = [
  {
    name: "Baterías",
    detail: "Energía confiable para tu híbrido",
    icon: "battery",
  },
  {
    name: "Motores",
    detail: "Componentes para volver a la ruta",
    icon: "engine",
  },
  {
    name: "Inversores y convertidores",
    detail: "Tecnología para el sistema eléctrico",
    icon: "chip",
  },
  {
    name: "Cables y conectores de alto voltaje",
    detail: "Conexiones seguras y compatibles",
    icon: "bolt",
  },
];

const iconPaths = {
  engine: (
    <>
      <path d="M3 10h3l2-3h7l2 3h2a2 2 0 0 1 2 2v5h-4l-2 2H9l-2-2H3z" />
      <path d="M8 7V4h5v3m-6 6h2m7 0h2" />
    </>
  ),
  shipping: (
    <>
      <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
      <circle cx="7.5" cy="18" r="1.5" />
      <circle cx="18" cy="18" r="1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
      <circle cx="7.5" cy="18" r="1.5" />
      <circle cx="18" cy="18" r="1.5" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18m-14 5h3" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 12l-2-2z" />
  ),
  battery: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M7 7V4h3v3m4 0V4h3v3m-9 6h8m-4-3v6" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v4m6-4v4m-6 12v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" />
    </>
  ),
  bolt: <path d="m13 2-3 8h7L9 22l3-9H5z" />,
};

function Icon({ name, className = "h-6 w-6" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

function Home() {
  const [activePromotion, setActivePromotion] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePromotion((current) => (current + 1) % promotions.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const goToPromotion = (direction) => {
    setActivePromotion(
      (current) => (current + direction + promotions.length) % promotions.length,
    );
  };

  const promotion = promotions[activePromotion];

  return (
    <main>
      <section
        aria-label="Promociones destacadas"
        aria-roledescription="carrusel"
        className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:pb-16 sm:pt-10"
      >
        <div className="relative isolate min-h-[390px] overflow-hidden rounded-3xl border border-borde bg-superficie sm:min-h-[430px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_40%,rgba(255,122,0,0.2),transparent_45%),linear-gradient(120deg,rgba(255,255,255,0.03),transparent_60%)]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-16 top-1/2 -z-10 hidden h-80 w-80 -translate-y-1/2 rounded-full border border-principal/20 sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute -right-6 top-1/2 -z-10 hidden h-60 w-60 -translate-y-1/2 rounded-full border border-principal/30 sm:block"
          />

          <div className="grid min-h-[390px] items-center gap-8 px-6 py-10 sm:min-h-[430px] sm:grid-cols-[1.2fr_0.8fr] sm:px-12 lg:px-16">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-principal sm:text-sm">
                <span className="h-px w-7 bg-principal" />
                {promotion.eyebrow}
              </p>
              <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {promotion.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-suave sm:text-lg">
                {promotion.description}
              </p>
              <Link
                to={`/productos?categoria=${encodeURIComponent(promotion.category)}`}
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-principal px-5 py-3 font-bold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
              >
                Ver productos
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative flex aspect-square w-full max-w-[250px] items-center justify-center rounded-full border border-principal/30 bg-fondo/60 sm:max-w-[290px]">
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-full border border-dashed border-borde"
                />
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-principal/40 bg-principal/10 text-principal shadow-[0_0_60px_rgba(255,122,0,0.15)] sm:h-36 sm:w-36">
                  <Icon
                    name={promotion.icon}
                    className="h-16 w-16 sm:h-20 sm:w-20"
                  />
                </div>
                <div className="absolute -bottom-2 right-0 rounded-xl border border-principal/40 bg-fondo px-4 py-3 shadow-xl sm:right-[-1rem]">
                  <p className="text-lg font-black text-principal sm:text-2xl">
                    {promotion.offer}
                  </p>
                  <p className="mt-0.5 text-xs text-suave">
                    {promotion.offerDetail}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => goToPromotion(-1)}
            aria-label="Ver promoción anterior"
            className="absolute bottom-3 left-4 flex h-9 w-9 items-center justify-center rounded-full border border-borde bg-fondo/90 text-texto transition hover:border-principal hover:text-principal sm:bottom-auto sm:left-3 sm:top-1/2 sm:h-10 sm:w-10 sm:-translate-y-1/2"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => goToPromotion(1)}
            aria-label="Ver promoción siguiente"
            className="absolute bottom-3 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-borde bg-fondo/90 text-texto transition hover:border-principal hover:text-principal sm:bottom-auto sm:right-3 sm:top-1/2 sm:h-10 sm:w-10 sm:-translate-y-1/2"
          >
            <span aria-hidden="true">→</span>
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {promotions.map((item, index) => (
              <button
                key={item.eyebrow}
                type="button"
                onClick={() => setActivePromotion(index)}
                aria-label={`Ver promoción ${index + 1}: ${item.title}`}
                aria-current={index === activePromotion ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  index === activePromotion
                    ? "w-7 bg-principal"
                    : "w-2.5 bg-borde hover:bg-suave"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-borde/70 bg-fondo/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-principal">
              La experiencia HybridParts
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-borde bg-superficie/80 p-5 transition hover:-translate-y-1 hover:border-principal/60"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-principal/10 text-principal">
                  <Icon name={benefit.icon} />
                </div>
                <h3 className="text-lg font-bold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-suave">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-principal">
              Encontrá lo que necesitás
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Categorías destacadas
            </h2>
          </div>
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 font-bold text-principal transition hover:text-white"
          >
            Ver todo el catálogo <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/productos?categoria=${encodeURIComponent(category.name)}`}
              className="group flex min-h-48 flex-col justify-between rounded-2xl border border-borde bg-superficie/80 p-5 transition hover:-translate-y-1 hover:border-principal/70 hover:bg-superficie focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-principal/10 text-principal transition group-hover:bg-principal group-hover:text-white">
                  <Icon name={category.icon} />
                </div>
                <span className="text-xl text-suave transition group-hover:translate-x-1 group-hover:text-principal">
                  →
                </span>
              </div>
              <div className="mt-7">
                <h3 className="text-lg font-bold">{category.name}</h3>
                <p className="mt-1 text-sm text-suave">{category.detail}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-principal/30 bg-[linear-gradient(110deg,rgba(255,122,0,0.12),rgba(30,30,30,0.8)_55%)] p-6 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              ¿Buscás un repuesto específico?
            </h2>
            <p className="mt-1 text-sm text-suave">
              Explorá el catálogo completo y encontrá el indicado para tu vehículo.
            </p>
          </div>
          <Link
            to="/productos"
            className="shrink-0 rounded-lg bg-principal px-5 py-3 font-bold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
          >
            Ir al catálogo
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
