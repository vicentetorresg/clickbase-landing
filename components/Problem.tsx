const painPoints = [
  {
    icon: '🔥',
    title: 'Gastas en anuncios pero no sabes qué genera leads',
    description:
      'Sin tracking bien configurado, no puedes saber qué campaña, anuncio o palabra clave realmente convierte.',
  },
  {
    icon: '📉',
    title: 'Tu página no está preparada para convertir tráfico pagado',
    description:
      'Una web genérica no es lo mismo que una landing pensada para vender. La diferencia en conversión puede ser enorme.',
  },
  {
    icon: '👻',
    title: 'No tienes Pixel de Meta ni conversiones de Google instaladas',
    description:
      'Sin estos datos, Google y Meta no pueden optimizar tus anuncios automáticamente. Estás compitiendo con las manos atadas.',
  },
  {
    icon: '🎯',
    title: 'No sabes cuántos leads reales te generan tus campañas',
    description:
      'Si no tienes un sistema de medición, cada decisión de inversión es básicamente una apuesta.',
  },
  {
    icon: '🔄',
    title: 'Dependes de boca en boca, no de un sistema predecible',
    description:
      'Los referidos son geniales, pero no son escalables. Un sistema bien configurado te da leads todos los días.',
  },
  {
    icon: '💸',
    title: 'Cada mes terminas sin saber qué funcionó y qué fue plata botada',
    description:
      'Sin datos correctos, el ciclo se repite: gastar, no medir, dudar, volver a gastar.',
  },
]

export default function Problem() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">El problema</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6 max-w-3xl mx-auto leading-tight">
            ¿Por qué tus anuncios no están generando los resultados que esperabas?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            La mayoría de los negocios invierte en publicidad sin tener la base correcta.
            El resultado: plata gastada, leads que no llegan y campañas que no se pueden
            optimizar.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="card-dark card-dark-hover rounded-2xl p-6 transition-all duration-300 group"
              style={{ borderLeft: '3px solid rgba(124, 58, 237, 0.5)' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 mt-0.5">{point.icon}</span>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">¿Te identificas con alguno de estos problemas?</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-200 hover:shadow-glow-purple text-sm"
          >
            Ver cómo podemos ayudarte →
          </a>
        </div>
      </div>
    </section>
  )
}
