import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { validateArgentinePhone, formatArgentinePhoneDisplay } from '../utils/phoneValidation'

const SERVICE_OPTIONS = [
  'Domótica',
  'Automatización de procesos industriales',
  'Electricidad industrial',
  'Electricidad de motocicletas',
  'Cámaras IP',
  'Redes, Wi-Fi y Starlink',
  'Otro / no estoy seguro',
]

function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [phoneError, setPhoneError] = useState(null)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validar formato de teléfono de Argentina
    const phoneCheck = validateArgentinePhone(form.phone)
    if (!phoneCheck.isValid) {
      setPhoneError(phoneCheck.message)
      return
    }
    setPhoneError(null)

    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          phone: formatArgentinePhoneDisplay(phoneCheck.normalized),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        console.error('Error enviando consulta:', data?.error)
        throw new Error('Hubo un inconveniente al enviar tu consulta. Por favor intentá nuevamente o comunicate por WhatsApp.')
      }
      setSent(true)
    } catch (err) {
      setError(err.message || 'Hubo un inconveniente al enviar tu consulta. Por favor intentá nuevamente o comunicate por WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-ink-900 py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_0%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
            // Hablemos
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
            Contanos tu <span className="text-volt">proyecto</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/50">
            Completá el formulario y te contactamos a la brevedad para
            coordinar un diagnóstico.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between border border-ink-700 bg-ink-950 p-8"
          >
            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Teléfono / WhatsApp', value: '+54 9 2612 51-5756' },
                { icon: Mail, label: 'Email', value: 'zybsolucionesintegrales@gmail.com' },
                { icon: MapPin, label: 'Zona de cobertura', value: 'Potrerillos y alrededores' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink-600 bg-ink-900 text-volt">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                      {label}
                    </div>
                    <div className="mt-1 font-medium text-white">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5492612515756"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 border-2 border-volt bg-volt py-3.5 font-display text-sm font-bold uppercase tracking-widest text-ink-950 shadow-volt-sm transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Escribinos por WhatsApp
            </a>

            <div className="mt-8 border-t border-ink-800 pt-6">
              <span className="block font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                Seguinos en redes
              </span>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/zyb_soluciones_integrales?stkn=bXV0aHVoN25ldWVx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Z&B"
                  className="flex flex-1 items-center justify-center gap-2 border border-ink-700 bg-ink-900 py-2.5 text-white/70 transition-all hover:border-volt hover:bg-volt hover:text-ink-950"
                >
                  <InstagramIcon size={16} />
                  <span className="font-display text-xs font-bold uppercase tracking-wider">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1GdrX9fPDN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Z&B"
                  className="flex flex-1 items-center justify-center gap-2 border border-ink-700 bg-ink-900 py-2.5 text-white/70 transition-all hover:border-volt hover:bg-volt hover:text-ink-950"
                >
                  <FacebookIcon size={16} />
                  <span className="font-display text-xs font-bold uppercase tracking-wider">Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="border border-ink-700 bg-ink-950 p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/50">
                  Nombre completo
                </span>
                <input
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Tu nombre"
                  className="border border-ink-600 bg-ink-900 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-volt"
                />
              </label>

              <label className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/50">
                    Teléfono / WhatsApp
                  </span>
                  <span className="font-mono text-[10px] text-white/40">
                    Con cód. de área (ej: 261, 11)
                  </span>
                </div>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => {
                    update('phone')(e)
                    if (phoneError) setPhoneError(null)
                  }}
                  onBlur={() => {
                    if (form.phone.trim()) {
                      const check = validateArgentinePhone(form.phone)
                      if (!check.isValid) setPhoneError(check.message)
                      else setPhoneError(null)
                    }
                  }}
                  placeholder="Ej: 261 251-5756 o 11 2345-6789"
                  className={`border bg-ink-900 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors ${
                    phoneError ? 'border-red-500 focus:border-red-500' : 'border-ink-600 focus:border-volt'
                  }`}
                />
                {phoneError && (
                  <span className="font-mono text-xs text-red-400">
                    ⚠ {phoneError}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/50">
                  Servicio
                </span>
                <select
                  value={form.service}
                  onChange={update('service')}
                  className="border border-ink-600 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-volt"
                >
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/50">
                  Contanos qué necesitás
                </span>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  placeholder="Describí brevemente tu proyecto o problema"
                  className="resize-none border border-ink-600 bg-ink-900 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-volt"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 border-2 border-volt bg-volt py-3.5 font-display text-sm font-bold uppercase tracking-widest text-ink-950 shadow-volt-sm transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 sm:w-auto sm:px-10"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Enviar consulta
                </>
              )}
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 font-mono text-sm text-volt"
              >
                ✓ Gracias, recibimos tu consulta. Te contactaremos a la brevedad.
              </motion.p>
            )}

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 font-mono text-sm text-red-400"
              >
                ✗ {error}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
