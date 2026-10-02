import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Activity, Gauge, ShieldCheck, Wrench } from 'lucide-react'
import Tilt3D from './Tilt3D'
import heroImg from '../assets/images/industrial-hero.jpg'
import img1 from '../assets/images/industrial-1.jpg'
import img2 from '../assets/images/industrial-2.jpg'
import img3 from '../assets/images/industrial-3.jpg'
import img4 from '../assets/images/industrial-4.jpg'

const WORKS = [
  {
    img: img1,
    tag: '01',
    title: 'Centros de control y CCM',
    desc: 'Montaje, cableado y conexionado de gavetas y celdas de distribución en planta.',
  },
  {
    img: img2,
    tag: '02',
    title: 'Tableros de potencia y capacitores',
    desc: 'Armado de tableros con seccionadores, barras protegidas y corrección de factor de potencia.',
  },
  {
    img: img3,
    tag: '03',
    title: 'Canalizaciones y bandejas técnicas',
    desc: 'Montaje de bandejas portacables perforadas y curvas técnicas en naves industriales.',
  },
  {
    img: img4,
    tag: '04',
    title: 'Tendido de conductores de potencia',
    desc: 'Tendido, peinado y zunchado de conductores de gran sección según normativa.',
  },
]

const IMPROVEMENTS = [
  {
    icon: Gauge,
    title: 'Reducción de consumo',
    desc: 'Optimizamos cargas y horarios de uso para bajar la factura energética.',
  },
  {
    icon: Activity,
    title: 'Corrección de factor de potencia',
    desc: 'Instalación de bancos de capacitores para evitar penalizaciones.',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento predictivo',
    desc: 'Termografías y controles periódicos para anticipar fallas.',
  },
  {
    icon: ShieldCheck,
    title: 'Cumplimiento normativo',
    desc: 'Instalaciones alineadas a normas de seguridad eléctrica vigentes.',
  },
]

export default function IndustrialShowcase() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const heroScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.15, 1.08])

  return (
    <section id="obras-industriales" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
              // Obras realizadas
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
              Tendido eléctrico <span className="text-volt">industrial</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50">
            Del diagnóstico a la puesta en marcha: así trabajamos en plantas,
            talleres y naves industriales.
          </p>
        </div>

        <div
          ref={heroRef}
          className="relative mb-16 h-[340px] overflow-hidden border border-ink-700 sm:h-[420px]"
        >
          <motion.img
            src={heroImg}
            alt="Electricista industrial trabajando en un tablero eléctrico"
            style={{ y: heroY, scale: heroScale }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10" />
          <div className="absolute inset-0 bg-hazard-stripes opacity-[0.04]" />

          <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-12">
            <span className="mb-3 inline-flex w-fit items-center gap-2 border border-volt/40 bg-ink-950/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-volt backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-volt" />
              Trabajo de campo
            </span>
            <h3 className="max-w-xl font-display text-2xl font-bold uppercase text-white sm:text-3xl">
              Ejecución profesional en cada instalación
            </h3>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WORKS.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Tilt3D maxTilt={12} scale={1.03} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden border border-ink-700 bg-ink-900">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={w.img}
                      alt={w.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                    <span className="absolute left-3 top-3 font-mono text-xs text-volt/80">
                      {w.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5" style={{ transform: 'translateZ(30px)' }}>
                    <h4 className="font-display text-sm font-bold uppercase leading-snug text-white">
                      {w.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-8 text-center font-display text-2xl font-bold uppercase text-white">
            Mejoras y <span className="text-volt">optimizaciones</span>
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {IMPROVEMENTS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-ink-700 bg-ink-900/60 p-6 text-center transition-colors hover:border-volt/50"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-ink-600 bg-ink-800 text-volt">
                  <Icon size={22} />
                </div>
                <h4 className="font-display text-sm font-bold uppercase text-white">
                  {title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-white/50">
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
