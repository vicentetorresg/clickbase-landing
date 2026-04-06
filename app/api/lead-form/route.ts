import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, phone, rubro, budget, source } = await req.json()

  const now = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })

  try {
    await supabase.from('events').insert({
      type: 'form_submit',
      source: source || null,
      user_agent: req.headers.get('user-agent') || null,
    })
  } catch (_) {}

  await resend.emails.send({
    from: 'ClickBase <notificaciones@priceguard.cl>',
    to: 'vicente.torres@proppi.cl',
    subject: `🎯 Nuevo lead · ${name} · ${phone}`,
    html: `
      <!DOCTYPE html>
      <html lang="es">
      <head><meta charset="UTF-8"></head>
      <body style="margin:0;padding:0;background:#08080F;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        <div style="max-width:480px;margin:0 auto;padding:28px 16px;">
          <div style="text-align:center;margin-bottom:20px;">
            <span style="font-size:20px;">⚡</span>
            <span style="font-size:16px;font-weight:800;background:linear-gradient(135deg,#7C3AED,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-left:6px;">ClickBase</span>
            <p style="margin:6px 0 0 0;font-size:11px;color:#334155;">${now}</p>
          </div>
          <div style="background:#12122A;border:1px solid rgba(124,58,237,0.3);border-radius:16px;padding:24px;">
            <div style="text-align:center;margin-bottom:20px;">
              <span style="background:rgba(124,58,237,0.15);border:1px solid rgba(124,58,237,0.4);color:#A855F7;font-size:13px;font-weight:700;padding:5px 14px;border-radius:20px;">🎯 Nuevo Lead</span>
            </div>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;">Nombre</span>
                  <div style="font-size:15px;font-weight:700;color:#fff;margin-top:3px;">${name}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;">Teléfono</span>
                  <div style="font-size:15px;font-weight:700;color:#10B981;margin-top:3px;">${phone}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;">Rubro</span>
                  <div style="font-size:14px;font-weight:600;color:#e2e8f0;margin-top:3px;">${rubro || '—'}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;">Inversión en publicidad</span>
                  <div style="font-size:14px;font-weight:600;color:#e2e8f0;margin-top:3px;">${budget || '—'}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;">Correo</span>
                  <div style="font-size:14px;font-weight:600;color:#e2e8f0;margin-top:3px;">${email}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;">Fuente</span>
                  <div style="font-size:13px;font-weight:600;color:#64748b;margin-top:3px;">${source || '/'}</div>
                </td>
              </tr>
            </table>
          </div>
          <p style="text-align:center;font-size:10px;color:#1e293b;margin-top:16px;">⚡ ClickBase · clickbase.cl</p>
        </div>
      </body>
      </html>
    `,
  })

  return NextResponse.json({ ok: true })
}
