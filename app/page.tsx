'use client'

import Navigation from '@/components/Navigation'
import { useOpenWAModal } from '@/components/WAModalProvider'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import WhatIncludes from '@/components/WhatIncludes'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import WhoIsItFor from '@/components/WhoIsItFor'
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs'
import AboutPreview from '@/components/AboutPreview'
import FAQ from '@/components/FAQ'
import ProductMockup from '@/components/ProductMockup'
import CTAFinal from '@/components/CTAFinal'
import StickyMobileCTA from '@/components/StickyMobileCTA'

function Footer() {
  const currentYear = new Date().getFullYear()
  const openModal = useOpenWAModal()

  return (
    <footer className="border-t border-brand-purple/20 bg-dark-card/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="text-lg font-bold gradient-text">ClickBase</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Página web + primera campaña + tracking completo. Una base técnica lista para
              captar clientes desde el día uno.
            </p>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 text-sm text-brand-purple-light hover:text-white transition-colors duration-200 font-medium"
            >
              Contáctanos →
            </button>
          </div>

          {/* Links column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Qué incluye', href: '#incluye' },
                { label: 'Precios', href: '#precios' },
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Cotizar', href: '#contacto' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                'Landing pages de alta conversión',
                'Google Ads (Search & Display)',
                'Meta Ads (Facebook & Instagram)',
                'Google Tag Manager',
                'Meta Pixel',
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="text-brand-purple-light mt-0.5 flex-shrink-0">›</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-brand-purple/20 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} ClickBase. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-slate-600">
              {/* TODO: Add link to real privacy policy */}
              {/* <a href="/privacidad" className="text-slate-500 hover:text-slate-300 transition-colors">
                Política de privacidad
              </a> */}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
              Sistema activo
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-dark rounded-xl border border-slate-800">
          <p className="text-xs text-slate-600 leading-relaxed">
            <span className="text-slate-500 font-medium">Aviso:</span> Los resultados de las campañas
            publicitarias dependen de factores como industria, presupuesto, competencia y estacionalidad.
            Los precios publicados corresponden al servicio de configuración y no incluyen la inversión
            publicitaria que se paga directamente a las plataformas (Google, Meta). Los valores indicados
            no incluyen IVA.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  const openModal = useOpenWAModal()

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <ProductMockup />
        <WhatIncludes />
        <Pricing />
        <HowItWorks />

        {/* Mid-page CTA band */}
        <section className="py-14 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(124,58,237,0.10) 100%)' }}
          />
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse inline-block" />
              <p className="text-sm font-semibold text-brand-purple-light uppercase tracking-widest">En línea ahora — respuesta en minutos</p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              ¿Tu negocio sigue estancado? Es hora de tener un sistema real.
            </h2>
            <p className="text-slate-400 mb-7 max-w-xl mx-auto">
              Déjanos tus datos y en minutos te decimos si podemos ayudarte.
            </p>
            <button
              onClick={() => openModal()}
              className="btn-cta inline-flex items-center font-bold px-9 py-4 rounded-xl text-base transition-all duration-200 text-white hover:brightness-110 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}
            >
              Quiero más clientes →
            </button>
          </div>
        </section>

        <WhoIsItFor />
        <Testimonials />
        <AboutUs />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
