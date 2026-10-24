function Footer() {
  return (
    <footer className="mt-12 border-t border-borde bg-superficie/50 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold">
            Hybrid<span className="text-principal">Parts</span>
          </h2>
          <p className="mt-2 text-sm text-suave">
            Repuestos y componentes de alta tensión para vehículos híbridos.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Seguinos</h3>
          <ul className="mt-2 space-y-1 text-sm text-principal">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Horarios de atención</h3>
          <p className="mt-2 text-sm text-suave">
            Lunes a viernes de 9 a 18 hs
          </p>
          <p className="text-sm text-suave">Av. del Libertador, Buenos Aires</p>
        </div>
      </div>

      <p className="border-t border-borde py-4 text-center text-sm text-suave">
        &copy; 2026 HybridParts. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
