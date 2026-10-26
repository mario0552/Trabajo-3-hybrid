function TeamCard({ name, role, image }) {
  return (
    <article className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-amber-500/60">
      <div className="mb-5 h-36 w-36 overflow-hidden rounded-full border-4 border-amber-500 bg-zinc-800 shadow-lg shadow-amber-950/30 sm:h-40 sm:w-40">
        {image ? (
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={`Sin foto de ${name}`}
            className="flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-400"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-10 w-10 text-amber-500"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M5 21a7 7 0 0 1 14 0" />
            </svg>
            <span className="text-sm font-medium">Sin foto</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-zinc-100">{name}</h3>
      <p className="mt-1 text-sm font-medium text-amber-500">{role}</p>
    </article>
  );
}

export default TeamCard;
