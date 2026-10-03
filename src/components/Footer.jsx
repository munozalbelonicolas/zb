import logoFull from '../assets/images/logo-zb-full.png'

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Domótica', href: '#domotica' },
  { label: 'PLC', href: '#automatizacion-plc' },
  { label: 'Obras', href: '#obras-industriales' },
  { label: 'Conectividad', href: '#conectividad' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

function InstagramIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-800 bg-ink-950">
      <div className="h-1.5 bg-hazard-stripes" />
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <a href="#top" className="block">
            <img
              src={logoFull}
              alt="Z&B — Soluciones eléctricas inteligentes"
              className="h-40 w-auto sm:h-48"
            />
          </a>

          <div className="flex flex-col gap-6 lg:items-end">
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-sm font-semibold uppercase tracking-widest text-white/50 transition-colors hover:text-volt"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Redes Sociales */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                Redes sociales:
              </span>
              <a
                href="https://www.instagram.com/zyb_soluciones_integrales?stkn=bXV0aHVoN25ldWVx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Z&B Soluciones Integrales"
                className="group flex h-10 items-center gap-2 border border-ink-700 bg-ink-900 px-4 text-white/70 shadow-sm transition-all hover:border-volt hover:bg-volt hover:text-ink-950 hover:-translate-y-0.5"
              >
                <InstagramIcon className="transition-transform group-hover:scale-110" />
                <span className="font-display text-xs font-bold uppercase tracking-wider">
                  Instagram
                </span>
              </a>
              <a
                href="https://www.facebook.com/share/1GdrX9fPDN/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Z&B Soluciones Integrales"
                className="group flex h-10 items-center gap-2 border border-ink-700 bg-ink-900 px-4 text-white/70 shadow-sm transition-all hover:border-volt hover:bg-volt hover:text-ink-950 hover:-translate-y-0.5"
              >
                <FacebookIcon className="transition-transform group-hover:scale-110" />
                <span className="font-display text-xs font-bold uppercase tracking-wider">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ink-800 pt-6 font-mono text-xs uppercase tracking-widest text-white/30 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Z&B — Todos los derechos reservados</span>
          <span>Domótica · Automatización · Redes & Starlink · Cámaras IP</span>
        </div>
      </div>
    </footer>
  )
}
