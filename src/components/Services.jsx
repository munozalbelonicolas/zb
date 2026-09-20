import { motion } from 'framer-motion'
import { Bike, Camera, Cpu, Home, Zap, ArrowUpRight } from 'lucide-react'
import Tilt3D from './Tilt3D'

const SERVICES = [
  {
    icon: Home,
    tag: '01',
    title: 'Domótica',
    desc: 'Automatizamos tu hogar o negocio: iluminación, climatización, accesos y control remoto integrado en un solo sistema inteligente.',
  },
  {
    icon: Cpu,
    tag: '02',
    title: 'Automatización de procesos industriales',
    desc: 'Diseño e implementación de sistemas de control, PLC y tableros para optimizar líneas de producción y procesos industriales.',
  },
  {
    icon: Zap,
    tag: '03',
    title: 'Electricidad industrial',
    desc: 'Instalaciones, tableros de fuerza, mantenimiento preventivo y correctivo para plantas y equipos industriales.',
  },
  {
    icon: Bike,
    tag: '04',
    title: 'Electricidad de motocicletas',
    desc: 'Diagnóstico y reparación de sistemas eléctricos, instalación de accesorios y solución de fallas en motocicletas.',
  },
  {
    icon: Camera,
    tag: '05',
    title: 'Cámaras IP',
    desc: 'Sistemas de videovigilancia IP con monitoreo remoto desde tu celular, grabación en la nube y configuración a medida.',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="servicios" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
              // Qué hacemos
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
              Nuestros <span className="text-volt">servicios</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50">
            Cinco especialidades, un mismo estándar: precisión técnica,
            materiales certificados y soluciones que se sostienen en el tiempo.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ icon: Icon, tag, title, desc }, idx) => (
            <motion.div
              key={title}
              variants={item}
              className={idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <Tilt3D maxTilt={8} scale={1.02} className="h-full">
                <div className="group relative h-full overflow-hidden border border-ink-700 bg-ink-900/60 p-8 transition-colors hover:border-volt/60">
                  <div className="absolute right-0 top-0 h-16 w-16 -translate-y-1/2 translate-x-1/2 rotate-45 bg-volt/10 transition-transform duration-500 group-hover:scale-150" />

                  <div
                    className="mb-8 flex items-center justify-between"
                    style={{ transform: 'translateZ(24px)' }}
                  >
                    <span className="font-mono text-xs text-white/30">{tag}</span>
                    <div className="flex h-12 w-12 items-center justify-center border border-ink-600 bg-ink-800 text-volt transition-all duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-ink-950">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase leading-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {desc}
                  </p>

                  <div className="mt-6 flex items-center gap-1 font-display text-xs font-bold uppercase tracking-widest text-volt opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Consultar
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
