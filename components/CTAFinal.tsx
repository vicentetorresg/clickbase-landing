'use client'

import { useState } from 'react'
import { fbq } from '@/lib/fbq'

type FormData = {
  nombre: string
  email: string
  phone: string
}

const initialFormData: FormData = {
  nombre: '',
  email: '',
  phone: '',
}

export default function CTAFinal() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pushEvent = (event: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      ;(window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).dataLayer.push(event)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Disparar evento de intento de envío
    pushEvent({ event: 'form_submit_attempt', form_location: 'cta_final' })

    try {
      // Leer UTMs desde sessionStorage (guardados por AnalyticsTracker)
      let utms: Record<string, string> = {}
      try {
        const stored = sessionStorage.getItem('cb_utms')
        if (stored) utms = JSON.parse(stored)
      } catch {}

      // Detectar dispositivo
      const device = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop'

      const res = await fetch('/api/lead-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          phone: formData.phone,
          source: window.location.pathname,
          device,
          ...utms,
        }),
      })

      if (!res.ok) {
        throw new Error('Error al enviar')
      }

      // ✅ Evento principal de conversión — úsalo en GTM como activador
      pushEvent({
        event: 'lead_generado',
        form_location: 'cta_final',
      })

      fbq('track', 'Lead')
      setSubmitted(true)
      setFormData(initialFormData)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Hubo un error. Intenta de nuevo.'
      )
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-dark border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:outline-none'

  return (
    <section id="contacto" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/8 to-transparent pointer-events-none" />
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div>
            <span className="section-label">Cotiza sin compromiso</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
              ¿Listo para dejar de depender del boca en boca?{' '}
              <span className="gradient-text">Cuéntanos de tu negocio.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              En 15 minutos te decimos si podemos ayudarte, cuánto cuesta y cuándo arrancamos.
              Sin tecnicismos, sin presión. Solo una conversación honesta sobre tu negocio.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Sin compromiso', 'Respuesta rápida', 'Propuesta a medida'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 bg-dark-card border border-slate-700 rounded-full px-4 py-2"
                >
                  <span className="text-success">✓</span>
                  {badge}
                </span>
              ))}
            </div>

            {/* What happens next */}
            <div className="mt-10 card-dark rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-4">¿Cómo funciona?</h3>
              <ol className="space-y-3">
                {[
                  'Llena el formulario con tus datos',
                  'Revisamos tu caso y te orientamos sin compromiso',
                  'Preparamos una propuesta a medida para tu negocio',
                  'Empezamos cuando estés listo',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT COLUMN - Form */}
          <div>
            <p className="text-sm text-slate-500 mb-3 text-center sm:text-left">
              Deja tus datos y te contactamos hoy mismo.
            </p>
            <div className="card-dark rounded-2xl p-6 sm:p-8 border border-slate-800/60">
              {submitted ? (
                /* Success state */
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">💬</div>
                  <h3 className="text-2xl font-extrabold text-white mb-4">
                    ¡Listo!
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Te contactaremos por WhatsApp a la brevedad.
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-base font-semibold text-slate-300 mb-6">
                    Déjanos tus datos y te cotizamos
                  </h3>

                  <div className="space-y-4">
                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Nombre <span className="text-brand-purple-light">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre completo"
                        autoComplete="name"
                        className={inputClass}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Email <span className="text-brand-purple-light">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Teléfono <span className="text-brand-purple-light">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Tu teléfono"
                        autoComplete="tel"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-sm text-red-400">
                      ⚠️ {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={() => pushEvent({ event: 'cta_submit_click', location: 'form' })}
                    className={`btn-cta w-full text-white font-bold py-4 px-8 rounded-xl text-base mt-6 transition-all duration-200 flex items-center justify-center gap-2 ${
                      loading ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-110 hover:scale-105'
                    }`}
                    style={{ background: 'linear-gradient(135deg, #1DA851, #25D366)', boxShadow: '0 0 28px rgba(37,211,102,0.5)' }}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      'Quiero mi cotización →'
                    )}
                  </button>

                  {/* Note */}
                  <p className="text-xs text-slate-500 mt-4 text-center leading-relaxed">
                    Sin compromiso. Te respondemos en menos de 24 horas hábiles.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
