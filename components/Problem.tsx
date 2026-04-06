'use client'

import { useOpenWAModal } from '@/components/WAModalProvider'

const painPoints = [
  {
    icon: '😤',
    title: 'Llevas años trabajando duro y el negocio no crece',
    description:
      'Pones todo el esfuerzo, pero las ventas siguen igual mes a mes. La sensación de estar corriendo en círculos es real.',
  },
  {
    icon: '📵',
    title: 'Dependes del boca en boca y nunca sabes cuándo llega el próximo cliente',
    description:
      'Los referidos son buenos, pero no son predecibles. Un mes lleno, el siguiente vacío — sin poder controlar nada.',
  },
  {
    icon: '🌐',
    title: 'Tus competidores aparecen en Google y tú no existes en internet',
    description:
      'Mientras otros negocios captan clientes online todos los días, tú sigues invisible para quienes buscan lo que ofreces.',
  },
  {
    icon: '💸',
    title: 'Ya intentaste publicidad y solo quemaste plata sin resultados',
    description:
      'Pagaste a alguien para hacer anuncios, no llegaron clientes y quedaste con la sensación de que "el marketing digital no funciona".',
  },
]

export default function Problem() {
  const openModal = useOpenWAModal()

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
          <span className="section-label">¿Te reconoces aquí?</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6 max-w-3xl mx-auto leading-tight">
            El estancamiento no es mala suerte. Es falta de sistema.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            La mayoría de los dueños de PYME trabajan duro, pero siguen dependiendo del azar.
            Sin un sistema que atraiga clientes de forma predecible, siempre vas a estar apagando incendios.
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
          <p className="text-slate-400 text-sm mb-4">Si te identificaste con alguno, tenemos exactamente lo que necesitas.</p>
          <button
            onClick={() => openModal()}
            className="btn-cta inline-flex items-center font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm text-white hover:brightness-110 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #1DA851, #25D366)', boxShadow: '0 0 24px rgba(37,211,102,0.4)' }}
          >
            Quiero más clientes →
          </button>
        </div>
      </div>
    </section>
  )
}
