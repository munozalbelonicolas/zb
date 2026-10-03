import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Domótica',
  'Automatización de procesos industriales',
  'Electricidad industrial',
  'Electricidad de motocicletas',
  'Cámaras IP',
  'Otro / no estoy seguro',
]

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

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
                { icon: Mail, label: 'Email', value: 'contacto@zybelectricidad.com' },
                { icon: MapPin, label: 'Zona de cobertura', value: 'A definir por la empresa' },
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
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/50">
                  Teléfono
                </span>
                <input
                  required
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+54 9 ..."
                  className="border border-ink-600 bg-ink-900 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-volt"
                />
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
