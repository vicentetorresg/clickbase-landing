const benefits = [
  {
    stat: '📈',
    title: 'Más leads medibles',
    description:
      'Sabes exactamente cuántos contactos generó cada anuncio. Sin suposiciones, con datos reales.',
  },
  {
    stat: '💰',
    title: 'Mejor inversión publicitaria',
    description:
      'Con datos reales, puedes decidir dónde poner más presupuesto y qué cortar sin dudar.',
  },
  {
    stat: '🏆',
    title: 'Imagen más profesional',
    description:
      'Una landing bien hecha genera más confianza que un sitio genérico. La primera impresión importa.',
  },
  {
    stat: '✂️',
    title: 'Menos plata botada',
    description:
      'El tracking correcto permite optimizar rápido y cortar lo que no funciona antes de que sea tarde.',
  },
  {
    stat: '🔗',
    title: 'Base para escalar',
    description:
      'Una vez que tienes la estructura, agregar campañas y canales es mucho más fácil y rápido.',
  },
  {
    stat: '🔍',
    title: 'Claridad real',
    description:
      'Fin de las suposiciones. Sabes qué funciona, qué no y por qué. Decisiones con información.',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Beneficios concretos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6 max-w-2xl mx-auto leading-tight">
            Lo que cambia cuando tienes la{' '}
            <span className="gradient-text">base bien instalada</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-dark card-dark-hover rounded-2xl p-7 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

              <div className="relative">
                {/* Icon */}
                <div className="text-4xl mb-5">{benefit.stat}</div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary callout */}
        <div className="mt-14 text-center">
          <div className="inline-block max-w-2xl">
            <div className="gradient-border rounded-2xl px-8 py-8">
              <p className="text-xl lg:text-2xl font-bold text-white mb-3">
                La diferencia entre gastar en anuncios y{' '}
                <span className="gradient-text">invertir en publicidad</span> es tener
                la base correcta.
              </p>
              <p className="text-slate-400 text-sm mb-6">
                Con el sistema bien instalado, cada peso que metes en publicidad trabaja
                más duro para ti.
              </p>
              <a
                href="#contacto"
                className="btn-cta inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:brightness-110 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #1DA851, #25D366)', boxShadow: '0 0 24px rgba(37,211,102,0.4)' }}
              >
                Quiero esta base en mi negocio →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
