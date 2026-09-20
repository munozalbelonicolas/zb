import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

const STATS = [
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 150, suffix: '+', label: 'Instalaciones realizadas' },
  { value: 5, suffix: '', label: 'Especialidades técnicas' },
  { value: 98, suffix: '%', label: 'Clientes satisfechos' },
]

const POINTS = [
  'Diagnóstico técnico antes de cada intervención',
  'Materiales y componentes certificados',
  'Presupuesto claro, sin sorpresas',
  'Soporte y mantenimiento post-instalación',
]

export default function About() {
  return (
    <section id="nosotros" className="relative border-t border-ink-800 bg-ink-900 py-28">
      <div className="pointer-events-none absolute inset-0 bg-hazard-stripes opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
              // Quiénes somos
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
              Ingeniería con
              <br />
              <span className="text-volt">respaldo técnico</span>
            </h2>
            <p className="mt-6 max-w-lg text-white/60">
              En Z&B combinamos electricidad, automatización y tecnología
              aplicada para dar soluciones integrales a hogares, comercios e
              industrias. Cada proyecto pasa por un mismo estándar de
              seguridad, precisión y cumplimiento de normas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {POINTS.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-volt" />
                  <span className="text-sm text-white/70">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {STATS.map(({ value, suffix, label }) => (
              <div
                key={label}
                className="flex flex-col justify-center border border-ink-700 bg-ink-950 p-8 transition-colors hover:border-volt/50"
              >
                <div className="font-display text-4xl font-bold text-volt sm:text-5xl">
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <div className="mt-2 font-display text-sm font-semibold uppercase tracking-wide text-white/50">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
