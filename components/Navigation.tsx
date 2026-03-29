'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = () => {
    // GTM: dataLayer.push({ event: 'cta_click', cta_location: 'navigation' })
    const el = document.getElementById('contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-brand-purple/20 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl">⚡</span>
            <span className="text-lg font-bold gradient-text hidden sm:inline">
              ClickBase
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#precios"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Precios
            </a>
            <a
              href="#como-funciona"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Cómo funciona
            </a>
            <a
              href="#contacto"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={handleCTAClick}
            className="gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-all duration-200 hover:shadow-glow-purple"
          >
            Cotizar ahora
          </button>
        </div>
      </div>
    </header>
  )
}
