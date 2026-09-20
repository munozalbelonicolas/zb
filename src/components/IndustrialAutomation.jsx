import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Cpu,
  Eye,
  Gauge,
  Layers,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import Tilt3D from './Tilt3D'
import heroImg from '../assets/images/plc-hero.jpg'
import plcImg from '../assets/images/plc-1.jpg'
import robotImg from '../assets/images/plc-3.jpg'
import techImg from '../assets/images/plc-2.jpg'

const ADVANTAGES = [
  {
    icon: TrendingUp,
    title: 'Mayor productividad',
    desc: 'Procesos más rápidos y consistentes, sin los tiempos muertos del control manual.',
  },
  {
    icon: ShieldCheck,
    title: 'Menos errores humanos',
    desc: 'La lógica programada repite cada ciclo exactamente igual, ciclo tras ciclo.',
  },
  {
    icon: Eye,
    title: 'Trazabilidad en tiempo real',
    desc: 'Visualizá el estado de cada proceso desde una pantalla HMI o de forma remota.',
  },
  {
    icon: Layers,
    title: 'Integración total',
    desc: 'Sensores, variadores, HMI y SCADA trabajando bajo una misma lógica de control.',
  },
  {
    icon: Gauge,
    title: 'Escalable',
    desc: 'Sumá máquinas o líneas nuevas sin tener que rediseñar todo el sistema.',
  },
  {
    icon: Cpu,
    title: 'Mantenimiento predictivo',
    desc: 'Detectamos anomalías antes de que se conviertan en una parada de planta.',
  },
]

const BRANDS = ['Siemens', 'Allen-Bradley', 'Schneider Electric', 'Delta', 'LS Electric']

export default function IndustrialAutomation() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section id="automatizacion-plc" className="relative overflow-hidden bg-ink-900 py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-grid opacity-[0.25]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
              // Control inteligente
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
              Automatización con <span className="text-volt">PLC</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50">
            Programamos la lógica que hace que tu planta funcione sola:
            controladores, sensores y pantallas trabajando en conjunto.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr,1fr]">
          <div
            ref={heroRef}
            className="relative h-[280px] overflow-hidden border border-ink-700 sm:h-[360px]"
          >
            <motion.img
              src={heroImg}
              alt="Tablero de control con PLC industrial"
              style={{ y: heroY, scale: 1.15 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-7 sm:p-9">
              <span className="mb-3 inline-flex w-fit items-center gap-2 border border-volt/40 bg-ink-950/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-volt backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-volt" />
                Programación &amp; puesta en marcha
              </span>
              <h3 className="max-w-md font-display text-xl font-bold uppercase text-white sm:text-2xl">
                Lógica de control a medida de tu proceso
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Tilt3D maxTilt={14} scale={1.03} className="col-span-2 sm:col-span-1">
              <div className="relative h-full min-h-[170px] overflow-hidden border border-ink-700">
                <img
                  src={plcImg}
                  alt="Controlador PLC Siemens en tablero industrial"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                <span
                  className="absolute bottom-3 left-3 font-display text-xs font-bold uppercase tracking-wide text-white"
                  style={{ transform: 'translateZ(24px)' }}
                >
                  Controladores PLC
                </span>
              </div>
            </Tilt3D>

            <Tilt3D maxTilt={14} scale={1.03}>
              <div className="relative h-full min-h-[170px] overflow-hidden border border-ink-700">
                <img
                  src={robotImg}
                  alt="Brazo robótico automatizado en línea de producción"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                <span
                  className="absolute bottom-3 left-3 font-display text-xs font-bold uppercase tracking-wide text-white"
                  style={{ transform: 'translateZ(24px)' }}
                >
                  Robótica industrial
                </span>
              </div>
            </Tilt3D>

            <Tilt3D maxTilt={14} scale={1.03}>
              <div className="relative h-full min-h-[170px] overflow-hidden border border-ink-700">
                <img
                  src={techImg}
                  alt="Técnico programando un sistema de automatización industrial"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                <span
                  className="absolute bottom-3 left-3 font-display text-xs font-bold uppercase tracking-wide text-white"
                  style={{ transform: 'translateZ(24px)' }}
                >
                  Programación en planta
                </span>
              </div>
            </Tilt3D>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between border border-ink-700 bg-ink-950 p-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-white">
                Experiencia en planta
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Diseñamos, programamos y ponemos en marcha sistemas de control
                para líneas de producción, máquinas dedicadas y procesos
                industriales, acompañando cada proyecto desde el diagnóstico
                hasta el soporte post-instalación.
              </p>
            </div>

            <div className="mt-6">
              <div className="mb-3 font-display text-xs font-bold uppercase tracking-widest text-white/40">
                Programamos en las principales plataformas
              </div>
              <div className="flex flex-wrap gap-2">
                {BRANDS.map((b) => (
                  <span
                    key={b}
                    className="border border-ink-600 bg-ink-900 px-3 py-1.5 font-mono text-xs text-white/70"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="border border-ink-700 bg-ink-900/60 p-5 transition-colors hover:border-volt/50"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center border border-ink-600 bg-ink-800 text-volt">
                  <Icon size={18} />
                </div>
                <h4 className="font-display text-sm font-bold uppercase text-white">
                  {title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
