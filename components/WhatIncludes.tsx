const includes = [
  {
    icon: '🎨',
    title: 'Diseño y desarrollo de landing',
    description: 'Diseñada con foco en conversión, no solo en estética.',
  },
  {
    icon: '📋',
    title: 'Formulario de contacto',
    description: 'Conectado para recibir leads directamente en tu email o CRM.',
  },
  {
    icon: '💬',
    title: 'Botón a WhatsApp',
    description: 'Integrado y configurado para disparar eventos de conversión.',
  },
  {
    icon: '🏷️',
    title: 'Google Tag Manager',
    description: 'Instalado y configurado como base para todo el tracking.',
  },
  {
    icon: '📊',
    title: 'Meta Pixel',
    description: 'Instalado para medir conversiones y crear audiencias en Facebook e Instagram.',
  },
  {
    icon: '✅',
    title: 'Conversiones configuradas',
    description: 'Envío de formulario y clics en WhatsApp medidos desde el día uno.',
  },
  {
    icon: '🚀',
    title: 'Setup de primera campaña',
    description: 'Estructura inicial de Google Ads o Meta Ads lista para activar.',
  },
  {
    icon: '📱',
    title: 'Versión responsive',
    description: 'Se ve y convierte bien en celular, tablet y desktop.',
  },
]

export default function WhatIncludes() {
  return (
    <section id="incluye" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Qué incluye</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6 max-w-2xl mx-auto leading-tight">
            Todo lo que entra en el setup de{' '}
            <span className="gradient-text">$699.990 + IVA</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Un solo pago, todo instalado. Sin sorpresas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {includes.map((item, index) => (
            <div
              key={index}
              className="card-dark card-dark-hover rounded-2xl p-6 transition-all duration-300 group"
            >
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Price highlight */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 gradient-border rounded-2xl px-8 py-6">
            <div>
              <p className="text-sm text-slate-400 mb-1">Todo lo anterior por</p>
              <p className="text-4xl font-extrabold text-white">
                $699.990
                <span className="text-xl font-normal text-slate-400"> + IVA</span>
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-brand-purple/30" />
            <div>
              <p className="text-sm text-slate-400 mb-1">Pago único</p>
              <p className="text-base font-semibold text-brand-purple-light">Sin mensualidad obligatoria</p>
            </div>
          </div>
        </div>

        {/* Callout note */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-3 bg-dark-card border border-slate-700 rounded-xl px-5 py-4">
            <span className="text-xl flex-shrink-0 mt-0.5">💡</span>
            <p className="text-sm text-slate-400">
              <span className="font-semibold text-slate-300">¿Necesitas algo más?</span>{' '}
              Los desarrollos adicionales, integraciones especiales y nuevas
              funcionalidades se cotizan por separado según el alcance del proyecto.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 gradient-bg text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-200 hover:shadow-glow-purple"
          >
            Quiero cotizar el setup completo →
          </a>
        </div>
      </div>
    </section>
  )
}
