import { Link } from "react-router";

function NotFound() {
  return (
    <main className="relative isolate flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden bg-zinc-950 px-4 py-16 text-zinc-100">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 12px rgba(245, 158, 11, 0.35), 0 0 32px rgba(249, 115, 22, 0.2);
          }
          50% {
            text-shadow: 0 0 22px rgba(245, 158, 11, 0.75), 0 0 56px rgba(249, 115, 22, 0.45);
          }
        }

        .not-found-float {
          animation: float 3.5s ease-in-out infinite;
        }

        .not-found-glow {
          animation: glow 2.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .not-found-float, .not-found-glow {
            animation: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_38%,rgba(245,158,11,0.12),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[min(80vw,34rem)] w-[min(80vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/10"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[min(64vw,26rem)] w-[min(64vw,26rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/10"
      />

      <section className="w-full max-w-2xl text-center">
        <div className="not-found-float mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-amber-500/40 bg-amber-500/10 text-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.16)] sm:mb-8 sm:h-24 sm:w-24">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-11 w-11 sm:h-14 sm:w-14"
          >
            <path d="m13 2-3 8h7L9 22l3-9H5z" />
          </svg>
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500 sm:text-sm">
          Hybrid Parts · Sistema de navegación
        </p>
        <h1 className="not-found-glow mt-2 text-7xl font-black tracking-tight text-amber-400 sm:text-8xl md:text-9xl">
          404
        </h1>
        <h2 className="mt-3 text-xl font-extrabold tracking-[0.08em] sm:text-2xl">
          CIRCUITO NO ENCONTRADO
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
          Parece que esta ruta tomó un desvío. La página que buscás no existe en
          Hybrid Parts o fue movida a otro lugar.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-bold text-zinc-950 transition hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z" />
            </svg>
            Volver al inicio
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 font-semibold text-zinc-200 transition hover:border-amber-500/60 hover:text-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M9 14 4 9l5-5" />
              <path d="M4 9h10a6 6 0 0 1 0 12h-2" />
            </svg>
            Volver atrás
          </button>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
