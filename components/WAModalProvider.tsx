'use client'

import { createContext, useContext, useState } from 'react'
import { fbq } from '@/lib/fbq'

const WAModalContext = createContext<(title?: string) => void>(() => {})

const WAIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.5a.5.5 0 0 0 .61.61l5.651-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.228-1.449l-.374-.224-3.879 1.009 1.009-3.879-.224-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

export function useOpenWAModal() {
  return useContext(WAModalContext)
}

function LeadModal({ title, onClose }: { title: string; onClose: () => void }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const source = typeof window !== 'undefined' ? window.location.pathname : '/'
    await fetch('/api/lead-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, source }),
    }).catch(() => {})
    fbq('track', 'Lead')
    setSent(true)
    setLoading(false)
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-[#12122A] border border-[rgba(124,58,237,0.3)] rounded-2xl p-6 w-full max-w-sm"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white text-lg leading-none">✕</button>
        {sent ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-white font-bold text-xl mb-2">¡Listo!</h3>
            <p className="text-slate-400 text-sm">Te contactaremos por WhatsApp a la brevedad.</p>
          </div>
        ) : (
          <>
            <h3 className="text-white font-bold text-xl mb-1">¿Listo para aumentar tus clientes?</h3>
            <p className="text-slate-400 text-sm mb-3">Déjanos tu número y te escribimos hoy por WhatsApp.</p>
            <ul className="flex flex-col gap-1.5 mb-4">
              {['Setup listo en 7 días', 'Tracking + landing + campaña'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-green-400 text-xs">✓</span> {item}
                </li>
              ))}
            </ul>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                required
                value={name}
                onChange={e => setName(e.target.value)}
                name="name"
                placeholder="Tu nombre"
                autoComplete="name"
                className="bg-[#1a1a3a] border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[rgba(124,58,237,0.6)]"
                style={{ fontSize: '16px' }}
              />
              <input
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                name="tel"
                placeholder="Tu WhatsApp"
                type="tel"
                autoComplete="tel"
                className="bg-[#1a1a3a] border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[rgba(124,58,237,0.6)]"
                style={{ fontSize: '16px' }}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-cta w-full inline-flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-white transition-all duration-200 disabled:opacity-60 mt-1"
                style={{ background: 'linear-gradient(135deg, #1DA851, #25D366)', boxShadow: '0 0 24px rgba(37,211,102,0.4)' }}
              >
                {loading ? 'Enviando...' : <><span>Te escribimos hoy</span> <WAIcon /></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export function WAModalProvider({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState('Quiero más clientes')

  function openModal(t?: string) {
    const title = t || 'Quiero más clientes'
    setModalTitle(title)
    setShowModal(true)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      fetch('/api/modal-open', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          source: window.location.pathname,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent,
          utm_source: params.get('utm_source'),
          utm_medium: params.get('utm_medium'),
          utm_campaign: params.get('utm_campaign'),
          utm_content: params.get('utm_content'),
        }),
      }).catch(() => {})
    }
  }

  return (
    <WAModalContext.Provider value={openModal}>
      {children}
      {showModal && <LeadModal title={modalTitle} onClose={() => setShowModal(false)} />}
    </WAModalContext.Provider>
  )
}
