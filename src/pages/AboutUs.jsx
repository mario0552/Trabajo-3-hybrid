import TeamCard from "../components/TeamCard";

const team = [
  { name: "Jonaiker noriega", role: "Frontend", image: "src/assets/WhatsApp Image 2026-10-25 at 10.25.42 PM.jpeg" },
  { name: "William Lopez", role: "Frontend", image: "https://raw.githubusercontent.com/mario0552/codigo-hybrid-jona/ec7c8e1a55a648e787e4e2169a4bff20c958e42e/assets/images/ribhavagrawal-ai-generated-8979714.jpg" },
  { name: "Isaias Emanuel Soria", role: "Frontend", image: "src/assets/is.jpeg" },
  { name: "Mario Fernando López", role: "Scrum Master", image: "src/assets/fl.jpeg" },
];

const statistics = [
  { value: "50", label: "Componentes en catálogo" },
  { value: "4", label: "Categorías desarrolladas" },
  { value: "4", label: "Integrantes del equipo" },
];

function AboutUs() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="relative isolate overflow-hidden border-b border-zinc-800">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.13),transparent_48%)]"
        />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-500">
            Hybrid Parts
          </p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Acerca de <span className="text-amber-500">nosotros</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            Impulsamos la movilidad híbrida acercando componentes confiables y
            soluciones para sus sistemas de alta tensión. Trabajamos para que
            encontrar el repuesto que necesitás sea una experiencia clara,
            segura y sencilla.
          </p>
        </div>
      </section>

      <section
        aria-label="Hybrid Parts en números"
        className="mx-auto max-w-6xl px-4 py-12 sm:py-16"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {statistics.map((statistic) => (
            <article
              key={statistic.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/70 px-5 py-7 text-center sm:py-8"
            >
              <p className="text-4xl font-black text-amber-500 sm:text-5xl">
                {statistic.value}
              </p>
              <h2 className="mt-3 text-sm font-semibold text-zinc-300 sm:text-base">
                {statistic.label}
              </h2>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:pb-20">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500">
            Las personas detrás del proyecto
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Nuestro equipo
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
