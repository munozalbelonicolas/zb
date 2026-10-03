import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/images/logo-zb.png'

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Domótica', href: '#domotica' },
  { label: 'PLC', href: '#automatizacion-plc' },
  { label: 'Obras', href: '#obras-industriales' },
  { label: 'Conectividad', href: '#conectividad' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-ink-950/90 backdrop-blur-md border-b border-ink-700' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a href="#top" className="group flex items-center">
          <img
            src={logo}
            alt="Z&B — Soluciones eléctricas inteligentes"
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-[68px]"
          />
        </a>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-volt"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden items-center gap-2 border-2 border-volt bg-volt px-5 py-2.5 font-display text-sm font-bold uppercase tracking-widest text-ink-950 shadow-volt-sm transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Pedí tu presupuesto
        </a>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-ink-700 bg-ink-950 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink-800 py-3 font-display text-base font-semibold uppercase tracking-widest text-white/80 hover:text-volt"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 border-2 border-volt bg-volt px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-ink-950"
              >
                Pedí tu presupuesto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
