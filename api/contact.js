import { Resend } from 'resend'

export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('Error: RESEND_API_KEY no está configurada en las variables de entorno de Vercel.')
    return res.status(500).json({ error: 'Configuración de servidor incompleta (falta RESEND_API_KEY).' })
  }

  const resend = new Resend(apiKey)

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  const { name, phone, service, message } = body || {}

  // Validación básica
  if (!name || !phone || !service) {
    return res.status(400).json({ error: 'Faltan campos requeridos (nombre, teléfono o servicio).' })
  }

  // Si tienes un dominio verificado en Resend (ej: nilotech.online), úsalo como remitente.
  // Por defecto usamos notificaciones@nilotech.online, o lo que definas en RESEND_FROM.
  const fromAddress = process.env.RESEND_FROM || 'ZYB Contacto <notificaciones@nilotech.online>'

  try {
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: ['marianoformal@gmail.com'],
      subject: `Nueva consulta de ${name} — ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; padding: 32px; border-radius: 8px;">
          <div style="border-bottom: 2px solid #FD6D1C; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="margin: 0; color: #FD6D1C; font-size: 22px; text-transform: uppercase; letter-spacing: 2px;">ZYB — Nueva Consulta</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #aaa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Nombre</td>
              <td style="padding: 10px 0; color: #fff; font-size: 15px;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid #333;">
              <td style="padding: 10px 0; color: #aaa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Teléfono</td>
              <td style="padding: 10px 0; color: #fff; font-size: 15px;">${phone}</td>
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
      return res.status(400).json({ error: error.message || 'Error de Resend al despachar email' })
    }

    return res.status(200).json({ ok: true, id: data?.id })
  } catch (err) {
    console.error('Error inesperado al enviar:', err)
    return res.status(500).json({ error: err.message || 'Error interno del servidor al enviar el correo' })
  }
}
