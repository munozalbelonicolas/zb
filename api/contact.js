import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function validateArgentinePhone(phone) {
  if (!phone || typeof phone !== 'string' || !phone.trim()) {
    return { isValid: false, message: 'Ingresá un número de teléfono válido.' }
  }

  let digits = phone.replace(/\D/g, '')

  if (digits.startsWith('549')) {
    digits = digits.slice(3)
  } else if (digits.startsWith('54')) {
    digits = digits.slice(2)
  }

  if (digits.startsWith('0')) {
    digits = digits.slice(1)
  }

  if (digits.startsWith('1115') && digits.length === 12) {
    digits = '11' + digits.slice(4)
  } else if (/^(2\d{2}|3\d{2})15\d{7}$/.test(digits)) {
    digits = digits.slice(0, 3) + digits.slice(5)
  } else if (/^(2\d{3}|3\d{3})15\d{6}$/.test(digits)) {
    digits = digits.slice(0, 4) + digits.slice(6)
  }

  if (digits.length !== 10) {
    return {
      isValid: false,
      message: 'El teléfono debe incluir código de área y número (10 dígitos, ej: 261 251-5756 o 11 2345-6789).',
    }
  }

  if (!/^(11|[23]\d{1,3})\d+$/.test(digits)) {
    return {
      isValid: false,
      message: 'El código de área no es válido para Argentina.',
    }
  }

  return { isValid: true, normalized: digits }
}

function formatArgentinePhone(normalized) {
  if (!normalized || normalized.length !== 10) return normalized
  if (normalized.startsWith('11')) {
    return `+54 9 11 ${normalized.slice(2, 6)}-${normalized.slice(6)}`
  }
  if (/^[23]\d{2}/.test(normalized)) {
    return `+54 9 ${normalized.slice(0, 3)} ${normalized.slice(3, 6)}-${normalized.slice(6)}`
  }
  return `+54 9 ${normalized.slice(0, 4)} ${normalized.slice(4, 7)}-${normalized.slice(7)}`
}

export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, service, message } = req.body || {}

  // Validación básica
  if (!name || !phone || !service) {
    return res.status(400).json({ error: 'Faltan campos requeridos (nombre, teléfono o servicio).' })
  }

  // Validación de número de teléfono argentino
  const phoneValidation = validateArgentinePhone(phone)
  if (!phoneValidation.isValid) {
    return res.status(400).json({ error: phoneValidation.message })
  }

  const formattedPhone = formatArgentinePhone(phoneValidation.normalized)
  const waLink = `https://wa.me/549${phoneValidation.normalized}`
  const toEmail = process.env.CONTACT_EMAIL || 'zybsolucionesintegrales@gmail.com'

  try {
    const { data, error } = await resend.emails.send({
      from: 'ZYB Contacto <onboarding@resend.dev>',
      to: [toEmail],
      subject: `Nueva consulta de ${name} — ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; padding: 32px; border-radius: 8px;">
          <div style="border-bottom: 2px solid #FD6D1C; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="margin: 0; color: #FD6D1C; font-size: 22px; text-transform: uppercase; letter-spacing: 2px;">ZYB — Nueva Consulta</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #aaa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Nombre</td>
              <td style="padding: 10px 0; color: #fff; font-size: 15px; font-weight: bold;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid #333;">
              <td style="padding: 10px 0; color: #aaa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Teléfono</td>
              <td style="padding: 10px 0; color: #fff; font-size: 15px;">
                <span style="font-family: monospace; font-size: 16px;">${formattedPhone}</span>
                <br>
                <a href="${waLink}" target="_blank" style="display: inline-block; margin-top: 6px; padding: 6px 12px; background: #25D366; color: #fff; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: bold;">
                  📲 Escribir por WhatsApp al cliente
                </a>
              </td>
            </tr>
            <tr style="border-top: 1px solid #333;">
              <td style="padding: 10px 0; color: #aaa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Servicio</td>
              <td style="padding: 10px 0; color: #FD6D1C; font-size: 15px; font-weight: bold;">${service}</td>
            </tr>
            ${message ? `
            <tr style="border-top: 1px solid #333;">
              <td style="padding: 10px 0; color: #aaa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Mensaje</td>
              <td style="padding: 10px 0; color: #ddd; font-size: 15px; line-height: 1.6;">${message}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #1a1a1a; border-left: 3px solid #FD6D1C; border-radius: 4px;">
            <p style="margin: 0; color: #888; font-size: 13px;">
              Este mensaje fue enviado desde el formulario de contacto de <strong style="color: #FD6D1C;">zybelectricidad.com</strong>
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Error devuelto por Resend API:', error)
      return res.status(400).json({ error: error.message })
    }

    return res.status(200).json({ ok: true, id: data?.id })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: error.message || 'Error al enviar el correo' })
  }
}
