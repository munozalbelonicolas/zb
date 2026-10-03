import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, service, message } = req.body || {}

  // Validación básica
  if (!name || !phone || !service) {
    return res.status(400).json({ error: 'Faltan campos requeridos' })
  }

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
      return res.status(400).json({ error: error.message })
    }

    return res.status(200).json({ ok: true, id: data?.id })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: error.message || 'Error al enviar el correo' })
  }
}
