import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BellRing, Camera, DoorOpen, Lightbulb, Lock, Mic, Video } from 'lucide-react'
import Tilt3D from './Tilt3D'
import houseImg from '../assets/images/smart-house.jpg'

const HOTSPOTS = [
  {
    id: 'camaras',
    x: 88,
    y: 20,
    icon: Camera,
    title: 'Cámaras IP',
    desc: 'Videovigilancia perimetral en HD con acceso remoto desde el celular.',
  },
  {
    id: 'cerraduras',
    x: 10,
    y: 70,
    icon: Lock,
    title: 'Cerraduras inteligentes',
    desc: 'Apertura por app, código o huella digital. Se acabaron las llaves.',
  },
  {
    id: 'portero',
    x: 21,
    y: 61,
    icon: Video,
    title: 'Portero con cámara',
    desc: 'Video portero conectado: atendé la puerta desde cualquier lugar.',
  },
  {
    id: 'alarma',
    x: 6,
    y: 40,
    icon: BellRing,
    title: 'Alarmas',
    desc: 'Sensores de movimiento y apertura con monitoreo permanente.',
  },
  {
    id: 'switches',
    x: 63,
    y: 57,
    icon: Lightbulb,
    title: 'Switches inteligentes',
    desc: 'Control de luces y circuitos por voz, app o escenas automáticas.',
  },
  {
    id: 'porton',
    x: 47,
    y: 93,
    icon: DoorOpen,
    title: 'Portones inteligentes',
    desc: 'Apertura automática de portones y accesos vehiculares.',
  },
]

function Hotspot({ spot, active, onToggle }) {
  const { icon: Icon, title, desc, x, y } = spot
  const flipUp = y > 55

  return (
    <div
      className="absolute z-20"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate3d(-50%, -50%, 60px)' }}
    >
      <button
        type="button"
        onClick={() => onToggle(spot.id)}
        onMouseEnter={() => onToggle(spot.id, 'enter')}
        onMouseLeave={() => onToggle(spot.id, 'leave')}
        className="group relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-volt bg-ink-950/90 text-volt shadow-volt-sm sm:h-10 sm:w-10"
      >
        <span className="absolute inset-0 rounded-full border border-volt/70 animate-ping" />
        <span className="absolute -inset-2 rounded-full border border-volt/20" />
        <Icon size={16} strokeWidth={2.25} />
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: flipUp ? 8 : -8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: flipUp ? 8 : -8, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-1/2 z-30 w-52 -translate-x-1/2 border border-volt/40 bg-ink-950/95 p-3 shadow-volt backdrop-blur-sm sm:w-56 ${
              flipUp ? 'bottom-full mb-3' : 'top-full mt-3'
            }`}
          >
            <div className="mb-1 flex items-center gap-2">
              <Icon size={14} className="text-volt" />
              <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
                {title}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-white/60">{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SmartHome() {
  const [hoverId, setHoverId] = useState(null)
  const [pinnedId, setPinnedId] = useState(null)
  const activeId = hoverId ?? pinnedId

  const handleToggle = (id, mode) => {
    if (mode === 'enter') {
      setHoverId(id)
      return
    }
    if (mode === 'leave') {
      setHoverId((cur) => (cur === id ? null : cur))
      return
    }
    setPinnedId((cur) => (cur === id ? null : id))
  }

  return (
    <section id="domotica" className="relative overflow-hidden bg-ink-900 py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
              // Domótica en acción
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
              Tu casa, <span className="text-volt">bajo control</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50">
            Tocá o pasá el mouse sobre los puntos de la imagen para descubrir qué
            podemos automatizar en tu hogar o negocio.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr,0.6fr] lg:items-center">
          <Tilt3D maxTilt={6} scale={1.01} className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-ink-600 shadow-volt sm:aspect-[16/10]">
              <img
                src={houseImg}
                alt="Casa moderna con sistemas de domótica instalados"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/30" />
              <div className="absolute inset-0 bg-hazard-stripes opacity-[0.05]" />

              {HOTSPOTS.map((spot) => (
                <Hotspot
                  key={spot.id}
                  spot={spot}
                  active={activeId === spot.id}
                  onToggle={handleToggle}
                />
              ))}

              <div className="absolute left-4 top-4 z-20 flex items-center gap-2 border border-volt/40 bg-ink-950/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-volt backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-volt" />
                6 puntos automatizables
              </div>
            </div>
          </Tilt3D>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-white/60">
              Integramos cada dispositivo en un mismo ecosistema inteligente,
              controlado por voz o desde tu celular, en cualquier lugar del
              mundo.
            </p>

            <div className="border border-ink-700 bg-ink-950 p-6">
              <div className="mb-4 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-white/50">
                <Mic size={14} className="text-volt" />
                Comandado por voz
              </div>
              <div className="flex flex-wrap gap-3">
                {['Amazon Alexa', 'Google Assistant'].map((assistant) => (
                  <div
                    key={assistant}
                    className="flex items-center gap-2.5 border border-volt/30 bg-volt/5 px-4 py-2.5"
                  >
                    <div className="flex items-end gap-[3px]">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-[3px] rounded-full bg-volt"
                          animate={{ height: [4, 14, 4] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: 'easeInOut',
                          }}
                        />
                      ))}
                    </div>
                    <span className="font-display text-xs font-bold uppercase tracking-wide text-white">
                      {assistant}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 border-2 border-volt bg-volt px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-ink-950 shadow-volt-sm transition-transform hover:-translate-y-0.5"
            >
              Automatizar mi casa
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
