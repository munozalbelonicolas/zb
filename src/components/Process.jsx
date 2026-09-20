import { motion } from 'framer-motion'
import { ClipboardCheck, Hammer, LineChart, Wrench } from 'lucide-react'

const STEPS = [
  {
    icon: ClipboardCheck,
    title: 'Diagnóstico',
    desc: 'Relevamos el sitio, escuchamos la necesidad y evaluamos el estado técnico actual.',
  },
  {
    icon: LineChart,
    title: 'Propuesta',
    desc: 'Diseñamos la solución y entregamos un presupuesto detallado, sin letra chica.',
  },
  {
    icon: Hammer,
    title: 'Instalación',
    desc: 'Ejecutamos el trabajo con materiales certificados y protocolos de seguridad.',
  },
  {
    icon: Wrench,
    title: 'Soporte',
    desc: 'Acompañamos con mantenimiento y respuesta rápida ante cualquier eventualidad.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
            // Cómo trabajamos
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
            Nuestro <span className="text-volt">proceso</span>
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-ink-700 md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
            className="absolute left-0 right-0 top-[52px] hidden h-px bg-volt md:block"
          />

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="relative z-10 flex h-[104px] w-[104px] items-center justify-center border-2 border-ink-700 bg-ink-950">
                <div className="absolute inset-1.5 flex items-center justify-center border border-ink-700 bg-ink-900">
                  <Icon size={30} className="text-volt" strokeWidth={1.75} />
                </div>
                <span className="absolute -top-3 -right-1 flex h-7 w-7 items-center justify-center border border-volt bg-ink-950 font-display text-xs font-bold text-volt">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold uppercase text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-white/50">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
