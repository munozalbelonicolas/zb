import logoFull from '../assets/images/logo-zb-full.png'

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Domótica', href: '#domotica' },
  { label: 'PLC', href: '#automatizacion-plc' },
  { label: 'Obras', href: '#obras-industriales' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-800 bg-ink-950">
      <div className="h-1.5 bg-hazard-stripes" />
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <a href="#top" className="block">
            <img
              src={logoFull}
              alt="Z&B — Soluciones eléctricas inteligentes"
              className="h-40 w-auto sm:h-48"
            />
          </a>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm font-semibold uppercase tracking-widest text-white/50 hover:text-volt"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ink-800 pt-6 font-mono text-xs uppercase tracking-widest text-white/30 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Z&B — Todos los derechos reservados</span>
          <span>Domótica · Automatización · Electricidad · Cámaras IP</span>
        </div>
      </div>
    </footer>
  )
}
