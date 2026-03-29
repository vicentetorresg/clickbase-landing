'use client'

export default function AboutPreview() {
  const handleScroll = () => {
    document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-10 border-b border-brand-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleScroll}
          className="w-full group flex flex-col sm:flex-row items-center sm:items-center gap-5 card-dark rounded-2xl px-6 py-5 hover:border-brand-purple/40 transition-all duration-300 text-left"
        >
          {/* Photo */}
          <img
            src="/vicente.png"
            alt="Vicente Torres G."
            className="w-14 h-14 rounded-xl object-cover object-top flex-shrink-0"
          />

          {/* Text */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Quiénes somos</p>
            <p className="text-white font-bold text-base leading-tight">
              Vicente Torres G.
              <span className="text-slate-400 font-normal"> · CEO @ Proppi, fundador de ClickBase</span>
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Ing. Civil Industrial PUC · Experto en Paid Media · +150 proyectos configurados
            </p>
          </div>

          {/* CTA arrow */}
          <div className="flex items-center gap-2 text-brand-purple-light text-sm font-semibold flex-shrink-0 group-hover:gap-3 transition-all duration-200">
            Ver perfil
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </button>
      </div>
    </section>
  )
}
