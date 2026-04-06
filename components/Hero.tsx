'use client'

import { useOpenWAModal } from '@/components/WAModalProvider'

export default function Hero() {
  const openModal = useOpenWAModal()
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="animate-fade-up">
            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-purple/40 bg-brand-purple/10 text-sm font-medium text-brand-purple-light mb-8 glow-purple">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse inline-block" />
              <span>Para dueños de PYME que quieren crecer de verdad</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              ¿Tu negocio lleva meses estancado sin saber cómo atraer más clientes?{' '}
              <span className="gradient-text">
                Te armamos el sistema completo para que lleguen solos.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-xl">
              Página web profesional + anuncios en Google e Instagram + tracking real.
              Sin tecnicismos, sin excusas — solo más clientes entrando por la puerta.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                {['#8B5CF6','#06B6D4','#EC4899','#10B981','#F59E0B'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-dark flex items-center justify-center text-xs font-bold text-white" style={{ background: `linear-gradient(135deg, ${c}, #06B6D4)`, zIndex: 5 - i }}>
                    {['A','V','R','M','J'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-300"><span className="text-white font-semibold">+47 empresas</span> ya generan clientes con ClickBase</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={() => openModal()}
                className="btn-cta flex items-center justify-center font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 active:scale-95 text-white w-full sm:w-fit hover:brightness-110 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #1DA851, #25D366)', boxShadow: '0 0 24px rgba(37,211,102,0.4)' }}
              >
                Quiero más clientes →
              </button>
              {/* GTM note: add dataLayer.push({ event: 'cta_click', cta_location: 'hero' }) via GTM trigger on this element */}
              <p className="text-xs text-slate-500">
                ¿Prefieres dejar tus datos?{' '}
                <a href="#contacto" className="text-slate-400 underline underline-offset-2 hover:text-white transition-colors">
                  Llena el formulario y te cotizamos →
                </a>
              </p>
            </div>

            {/* Scarcity */}
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block flex-shrink-0" />
              <span className="text-xs text-amber-400 font-medium">Solo 10 cupos disponibles por mes <span className="font-normal opacity-80">(para garantizar un trabajo personalizado para tu negocio)</span></span>
            </div>

            {/* Trust pills */}
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-dark-card border border-slate-700 text-sm text-slate-300 w-fit">
                <span className="w-2 h-2 rounded-full bg-success inline-block" />
                Listo en 7 días hábiles
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN - CSS Dashboard Widget */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-float w-full max-w-sm">
              {/* Main widget card */}
              <div className="card-dark rounded-2xl p-6 shadow-glow-brand">
                {/* Widget header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-success pulse-dot" />
                    </div>
                    <span className="text-sm font-semibold text-white">Sistema activo</span>
                  </div>
                  <span className="text-xs text-slate-500">En vivo</span>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-dark rounded-xl p-4 border border-slate-800">
                    <p className="text-xs text-slate-500 mb-1">Leads este mes</p>
                    <p className="text-2xl font-bold text-white">47</p>
                    <p className="text-xs text-success font-medium mt-1">↑ +23%</p>
                  </div>
                  <div className="bg-dark rounded-xl p-4 border border-slate-800">
                    <p className="text-xs text-slate-500 mb-1">Costo por lead</p>
                    <p className="text-2xl font-bold text-white">$2.1k</p>
                    <p className="text-xs text-success font-medium mt-1">↓ -12%</p>
                  </div>
                </div>

                {/* Mini bar chart */}
                <div className="mb-6">
                  <p className="text-xs text-slate-500 mb-3">Leads por día (últimos 12 días)</p>
                  <div className="flex items-end justify-between gap-1 h-16">
                    {[30, 55, 40, 70, 45, 80, 60, 90, 55, 75, 85, 95].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${height}%`,
                          background: `linear-gradient(to top, #7C3AED, #06B6D4)`,
                          opacity: i < 11 ? 0.6 + (i / 11) * 0.4 : 1,
                          animationDelay: `${i * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Tracking status */}
                <div className="space-y-2.5">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-3">
                    Estado del tracking
                  </p>
                  {[
                    { name: 'Google Tag Manager', color: '#F59E0B' },
                    { name: 'Meta Pixel', color: '#3B82F6' },
                    { name: 'Conversiones', color: '#10B981' },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{item.name}</span>
                      <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: item.color }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        Activo
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accent badges */}
              <div className="absolute -top-4 -right-4 bg-success/10 border border-success/30 rounded-xl px-3 py-2 text-xs font-semibold text-success shadow-lg">
                +47 leads 🎯
              </div>
              <div className="absolute -bottom-4 -left-4 bg-brand-purple/10 border border-brand-purple/30 rounded-xl px-3 py-2 text-xs font-semibold text-brand-purple-light shadow-lg">
                ROI 3.2x 📈
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
