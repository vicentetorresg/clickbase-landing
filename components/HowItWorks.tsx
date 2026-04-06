const steps = [
  {
    number: '01',
    title: 'Nos contactas',
    description:
      'Cuéntanos tu negocio, tu rubro y qué necesitas. Sin compromiso.',
    icon: '💬',
  },
  {
    number: '02',
    title: 'Levantamos tu oferta',
    description:
      'Entendemos qué vendes, a quién le vendes y qué quieres que hagan los visitantes.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Construimos la base',
    description:
      'Diseñamos la landing, instalamos el tracking y configuramos la campaña inicial.',
    icon: '🏗️',
  },
  {
    number: '04',
    title: 'Lanzamos y medimos',
    description:
      'Activamos el sistema. Desde el primer día puedes medir qué está funcionando.',
    icon: '🚀',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">El proceso</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6">
            De cero a tu sistema listo en{' '}
            <span className="gradient-text">4 pasos</span>
          </h2>
        </div>

        {/* Steps — horizontal timeline on desktop, vertical on mobile */}
        <div className="relative">
          {/* Dashed connector line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px mx-32">
            <div
              className="w-full h-full"
              style={{
                background:
                  'repeating-linear-gradient(90deg, rgba(124,58,237,0.4) 0, rgba(124,58,237,0.4) 8px, transparent 8px, transparent 20px)',
              }}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center lg:items-center">
                {/* Mobile vertical connector */}
                {index < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute top-16 left-1/2 -translate-x-1/2 w-px h-full -z-10"
                    style={{
                      background:
                        'repeating-linear-gradient(180deg, rgba(124,58,237,0.4) 0, rgba(124,58,237,0.4) 8px, transparent 8px, transparent 20px)',
                    }}
                  />
                )}

                {/* Step circle */}
                <div className="relative z-10 mb-5">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-glow-purple">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark border-2 border-brand-purple flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-purple-light">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="card-dark rounded-xl p-5 w-full card-dark-hover transition-all duration-300">
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time estimate */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 card-dark rounded-full px-6 py-3 border border-brand-purple/30">
            <span className="text-lg">⏱️</span>
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-white">Tiempo de entrega estimado:</span>{' '}
              5 a 10 días hábiles desde que recibimos toda la información.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="#contacto"
            className="btn-cta inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:brightness-110 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #1DA851, #25D366)', boxShadow: '0 0 24px rgba(37,211,102,0.4)' }}
          >
            Empezar ahora →
          </a>
        </div>
      </div>
    </section>
  )
}
