import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Network,
  Radio,
  Satellite,
  ShieldCheck,
  Signal,
  Wifi,
  Zap,
} from 'lucide-react'
import Tilt3D from './Tilt3D'
import starlinkImg from '../assets/images/starlink-networks.jpg'

const PILLARS = [
  {
    icon: Satellite,
    tag: '01',
    badge: 'Satelital',
    title: 'Instalación de Starlink',
    desc: 'Montaje profesional estructural para residencias, fincas, campamentos y empresas donde la fibra óptica o el cable no llegan.',
    points: [
      'Fijación antivibración y antiviento en mástiles o techos con línea de vista despejada',
      'Pasaje de cableado blindado exterior con sellado estanco y protección UV',
      'Configuración en modo Bypass para integrar con routers empresariales o switches',
      'Medición de señal, alineación satelital y calibración de latencia',
    ],
  },
  {
    icon: Radio,
    tag: '02',
    badge: 'Larga Distancia',
    title: 'Enlaces Punto a Punto (PtP / PtMP)',
    desc: 'Conectá sedes, galpones o puestos distantes a través del aire a distancias de 500 metros hasta más de 20 km sin pagar abonos mensuales.',
    points: [
      'Antenas direccionales de alta potencia (Ubiquiti airMAX, MikroTik)',
      'Interconexión de galpones, básculas, oficinas y garitas de seguridad',
      'Transmisión fluida de datos de alta velocidad y video de cámaras IP sin cortes',
      'Cero costos de abono recurrente: tu propia red privada inalámbrica',
    ],
  },
  {
    icon: Wifi,
    tag: '03',
    badge: 'Cobertura Total',
    title: 'Extensión y Redes Wi-Fi Mesh',
    desc: 'Eliminamos las zonas muertas y caídas de señal en casas grandes, predios, bodegas y oficinas con cobertura continua en todo el inmueble.',
    points: [
      'Sistemas Mesh con roaming transparente: te movés de un ambiente a otro sin desconectarte',
      'Access Points de alta concurrencia para interiores y exteriores (IP67 intemperie)',
      'Alimentación PoE por cable: máxima estabilidad sin depender de repetidores lentos',
      'Segmentación de redes seguras para invitados, cámaras y domótica',
    ],
  },
  {
    icon: Network,
    tag: '04',
    badge: 'Infraestructura',
    title: 'Cableado Estructurado LAN y Racks',
    desc: 'Diseño e instalación de redes cableadas de alto rendimiento para garantizar la máxima velocidad y estabilidad que el Wi-Fi no puede igualar.',
    points: [
      'Tendido certificado en cable UTP/FTP Cat6 y Cat6A 100% cobre',
      'Armado, ordenamiento y rotulado de racks de comunicaciones y patch panels',
      'Switches administrables PoE con gestión de ancho de banda y priorización (QoS)',
      'Certificación de puntos de red y diagnóstico de fallas en redes existentes',
    ],
  },
]

const STATS = [
  { value: '100%', label: 'Cobertura sin puntos ciegos' },
  { value: '25+ km', label: 'Alcance en enlaces inalámbricos' },
  { value: 'Gigabit', label: 'Velocidad de transferencia LAN' },
  { value: '24/7', label: 'Estabilidad para cámaras y datos' },
]

export default function NetworkConnectivity() {
  return (
    <section id="conectividad" className="relative overflow-hidden bg-ink-950 py-28">
      {/* Background grid accent */}
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-grid opacity-[0.25]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
              // Redes & Telecomunicaciones
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
              Conectividad, Redes LAN y{' '}
              <span className="text-volt">Starlink</span>
            </h2>
            <p className="mt-4 text-base text-white/60 sm:text-lg">
              Llevamos internet de alta velocidad y conectividad confiable a donde las
              empresas tradicionales no llegan: zonas rurales, fincas, naves industriales,
              galpones y predios extensos.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border-2 border-volt bg-volt px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-ink-950 shadow-volt-sm transition-transform hover:-translate-y-0.5"
          >
            Pedir cotización de conectividad
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Feature Hero Card with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 overflow-hidden border border-ink-700 bg-ink-900"
        >
          <div className="grid lg:grid-cols-12">
            {/* Image side */}
            <div className="relative min-h-[340px] overflow-hidden lg:col-span-7 lg:min-h-[440px]">
              <img
                src={starlinkImg}
                alt="Instalación profesional de Starlink y antenas punto a punto Z&B"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink-900" />
              
              <div className="absolute bottom-4 left-4 flex items-center gap-2 border border-ink-700 bg-ink-950/90 px-3.5 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-volt" />
                <span className="font-mono text-xs text-white">
                  Instalaciones en Mendoza y Cuyo
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-between p-8 lg:col-span-5 lg:p-10">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-volt">
                  <Signal size={14} />
                  <span>Internet donde no hay fibra</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase text-white sm:text-3xl">
                  Internet Satelital e Interconexión de Predios
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  Una mala instalación de Starlink o de un enlace inalámbrico causa microcortes,
                  baja velocidad y desgaste prematuro por intemperie. En Z&B realizamos montajes
                  robustos con soportes a medida, protección contra sobretensiones y bajadas
                  prolijas que garantizan el 100% de la capacidad contratada.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    'Montajes en altura libres de obstrucciones y sombras de señal',
                    'Integración completa con cámaras IP y sistemas de domótica',
                    'Equipamiento de grado industrial (Ubiquiti, MikroTik, TP-Link Omada)',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-2.5 text-xs text-white/80">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-volt" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink-800 pt-6">
                {STATS.slice(0, 2).map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl font-bold text-volt sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 font-mono text-[11px] text-white/50">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, idx) => {
            const { icon: Icon, tag, badge, title, desc, points } = pillar
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <Tilt3D
                  maxTilt={6}
                  scale={1.01}
                  className="h-full"
                  innerClassName="flex flex-col justify-between border border-ink-700 bg-ink-900/90 p-7 transition-colors hover:border-volt/60 group"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-ink-800 pb-5">
                      <div className="flex h-12 w-12 items-center justify-center border border-ink-700 bg-ink-950 text-volt transition-colors group-hover:border-volt group-hover:bg-volt group-hover:text-ink-950">
                        <Icon size={22} />
                      </div>
                      <div className="text-right">
                        <span className="block font-mono text-[11px] text-white/40">{tag}</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-volt">
                          {badge}
                        </span>
                      </div>
                    </div>

                    <h4 className="mt-5 font-display text-xl font-bold uppercase text-white group-hover:text-volt transition-colors">
                      {title}
                    </h4>

                    <p className="mt-3 text-xs leading-relaxed text-white/60">
                      {desc}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-ink-800/80 pt-4">
                      {points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-[11px] leading-tight text-white/75">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-volt" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contacto"
                    className="mt-6 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-volt transition-all group-hover:translate-x-1"
                  >
                    Consultar este servicio
                    <ArrowRight size={14} />
                  </a>
                </Tilt3D>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-6 border border-ink-700 bg-ink-900/60 p-6 sm:flex-row sm:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-volt/30 bg-ink-950 text-volt">
              <Zap size={22} />
            </div>
            <div>
              <div className="font-display text-base font-bold uppercase text-white sm:text-lg">
                ¿Tenés una finca, bodega o galpón sin internet?
              </div>
              <div className="text-xs text-white/60 sm:text-sm">
                Diseñamos una solución a medida combinando Starlink con enlaces inalámbricos y Wi-Fi en todo el predio.
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/5492612515756?text=Hola,%20quisiera%20consultar%20por%20instalaci%C3%B3n%20de%20Starlink%20/%20redes"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 border-2 border-volt bg-volt px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-ink-950 shadow-volt-sm transition-transform hover:-translate-y-0.5"
          >
            Hablar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
