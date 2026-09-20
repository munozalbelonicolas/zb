import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MousePointer2 } from 'lucide-react'
import industrialImg from '../assets/images/hero-industrial.jpg'
import domoticaImg from '../assets/images/hero-domotica.jpg'
import camarasImg from '../assets/images/hero-camaras.jpg'
import motosImg from '../assets/images/hero-motos.jpg'

const SLIDE_MS = 6500

const SLIDES = [
  {
    id: 'industrial',
    tag: 'Industrial',
    img: industrialImg,
    position: '35% center',
    kicker: 'Electricidad & automatización industrial',
    lines: ['Potencia', 'bajo', 'control'],
    text: 'Tableros, tendido eléctrico y automatización con PLC para plantas, talleres y comercios.',
    cta: { label: 'Ver obras industriales', href: '#obras-industriales' },
  },
  {
    id: 'domotica',
    tag: 'Domótica',
    img: domoticaImg,
    position: 'center',
    kicker: 'Domótica & hogar inteligente',
    lines: ['Tu casa', 'te', 'obedece'],
    text: 'Luces, climatización, accesos y escenas automáticas comandadas por voz o desde el celular.',
    cta: { label: 'Conocer domótica', href: '#domotica' },
  },
  {
    id: 'camaras',
    tag: 'Cámaras IP',
    img: camarasImg,
    position: 'center',
    kicker: 'Cámaras IP & seguridad',
    lines: ['Ojos', 'en cada', 'rincón'],
    text: 'Videovigilancia IP con monitoreo remoto, grabación y alertas en tiempo real.',
    cta: { label: 'Quiero cámaras', href: '#contacto' },
  },
  {
    id: 'motos',
    tag: 'Motos',
    img: motosImg,
    position: '60% center',
    kicker: 'Electricidad de motocicletas',
    lines: ['Tu moto', 'siempre', 'en marcha'],
    text: 'Diagnóstico eléctrico, reparación de fallas e instalación de accesorios.',
    cta: { label: 'Consultar', href: '#contacto' },
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const sectionRef = useRef(null)
  const slide = SLIDES[index]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '9%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const goTo = useCallback((next) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => goTo(index + 1), SLIDE_MS)
    return () => clearTimeout(timer)
  }, [index, goTo])

  useEffect(() => {
    SLIDES.forEach(({ img }) => {
      const preload = new Image()
      preload.src = img
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink-950"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <motion.img
            src={slide.img}
            alt=""
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: 14, ease: 'linear' }}
            style={{ y: parallaxY, objectPosition: slide.position }}
            className="absolute inset-0 h-[112%] w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/75 to-ink-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/80" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 pb-28 pt-24 lg:px-10">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div key={slide.id}>
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 flex items-center gap-3"
                >
                  <span className="h-px w-10 bg-volt" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-volt">
                    {slide.kicker}
                  </span>
                </motion.div>

                <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] font-bold uppercase leading-[0.85] tracking-tight text-white">
                  {slide.lines.map((line, i) => (
                    <span
                      key={line}
                      className="-mt-[0.16em] block overflow-hidden pt-[0.16em]"
                    >
                      <motion.span
                        initial={{ y: '110%' }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 0.7,
                          delay: 0.1 + i * 0.09,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="block"
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.42 }}
                  className="mt-7 max-w-md text-base text-white/70 sm:text-lg"
                >
                  {slide.text}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.52 }}
                  className="mt-9 flex flex-wrap items-center gap-4"
                >
                  <a
                    href={slide.cta.href}
                    className="group inline-flex items-center gap-2 bg-volt px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-ink-950 transition-transform hover:-translate-y-0.5"
                  >
                    {slide.cta.label}
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                  <a
                    href="#contacto"
                    className="font-display text-sm font-bold uppercase tracking-widest text-white underline-offset-8 transition-colors hover:text-volt hover:underline"
                  >
                    Pedir presupuesto
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div className="grid w-full max-w-2xl grid-cols-4 gap-3 sm:gap-5">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className="group text-left"
                  aria-label={`Ver ${s.tag}`}
                >
                  <div className="relative h-[3px] w-full overflow-hidden bg-white/20">
                    {i === index && (
                      <motion.div
                        key={`bar-${index}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                        className="absolute inset-y-0 left-0 bg-volt"
                      />
                    )}
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span
                      className={`font-mono text-[10px] transition-colors ${
                        i === index ? 'text-volt' : 'text-white/40'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`hidden font-display text-xs font-bold uppercase tracking-wider transition-colors sm:block ${
                        i === index
                          ? 'text-white'
                          : 'text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {s.tag}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-2 pb-1 font-mono text-[10px] uppercase tracking-widest text-white/40 lg:flex">
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <MousePointer2 size={14} />
              </motion.span>
              Scrolleá para ver más
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-hazard-stripes" />
      </div>
    </section>
  )
}
