const solutionItems = [
  {
    number: '01',
    title: 'Landing diseñada para convertir',
    description: 'Estructura, copy y diseño pensados para transformar visitas en leads.',
  },
  {
    number: '02',
    title: 'Tracking instalado correctamente',
    description: 'GTM, Meta Pixel y conversiones de Google configuradas desde el día uno.',
  },
  {
    number: '03',
    title: 'Anuncios configurados y listos',
    description: 'Estructura inicial de Google Ads o Meta Ads preparada para activar.',
  },
  {
    number: '04',
    title: 'Formularios y WhatsApp activos',
    description: 'Todos los puntos de contacto funcionando y midiendo correctamente.',
  },
  {
    number: '05',
    title: 'Base lista para medir y optimizar',
    description: 'Datos reales desde el primer día para tomar decisiones con información.',
  },
]

export default function Solution() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">La solución</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6 max-w-3xl mx-auto leading-tight">
            Te construimos el sistema completo para que los clientes te encuentren, te contacten y vuelvan.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            No necesitas entender de marketing digital. Nosotros nos encargamos de todo:
            la web, los anuncios y los datos — para que tú te concentres en atender a tus clientes.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: numbered list */}
          <div className="space-y-4">
            {solutionItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 card-dark rounded-xl p-5 card-dark-hover transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{item.number}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: quote callout */}
          <div className="lg:sticky lg:top-24">
            <div
              className="card-dark rounded-2xl p-8 lg:p-10 relative overflow-hidden"
              style={{ borderLeft: '4px solid #7C3AED' }}
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
              />

              <div className="relative">
                <span className="text-5xl font-serif text-brand-purple/40 leading-none block mb-4">"</span>
                <blockquote className="text-2xl lg:text-3xl font-bold text-white italic leading-snug mb-6">
                  No necesitas ser experto en marketing. Necesitas un sistema que trabaje mientras tú atiendes tu negocio.
                </blockquote>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Los dueños de PYME no tienen tiempo para aprender publicidad digital. Por eso armamos todo por ti:
                  desde la página hasta los anuncios y el seguimiento — con resultados reales desde el primer mes.
                </p>

                {/* Mini checklist */}
                <ul className="space-y-3">
                  {[
                    'Tracking configurado desde el primer día',
                    'Landing pensada para vender, no solo para verse bien',
                    'Datos reales para tomar decisiones',
                    'Base técnica que escala con tu negocio',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white text-xs">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA below quote */}
            <div className="mt-6 text-center">
              <a
                href="#precios"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple-light hover:text-white transition-colors duration-200"
              >
                Ver qué incluye el setup completo →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
