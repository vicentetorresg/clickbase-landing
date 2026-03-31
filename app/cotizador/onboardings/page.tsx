'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

type Onboarding = {
  id: string
  created_at: string
  // Legales
  nombre_rep_legal: string
  rut_rep_legal: string
  razon_social: string
  rut_empresa: string
  nombre_comercial: string | null
  // Contacto / negocio
  email: string
  telefono: string | null
  descripcion_negocio: string
  ciudad_operacion: string | null
  ticket_promedio: string | null
  buyer_persona: string
  competidores: string | null
  sitio_web_actual: string | null
  redes_sociales: string | null
  // Objetivos
  objetivos: string
  presupuesto_publicidad: string | null
  meta_leads_mes: string | null
  // Marketing
  tiene_meta_ads: boolean
  tiene_google_ads: boolean
  ha_hecho_anuncios: boolean
  plataformas_anteriores: string[]
  resultados_anteriores: string | null
  tiene_google_analytics: boolean
  tiene_meta_pixel: boolean
  tiene_gtm: boolean
  // Diseño
  estilos_diseno: string[]
  estilo_otro: string | null
  tiene_branding: boolean
  colores_tipografias: string | null
  tiene_imagenes: boolean
  web_referencia: string | null
  // Extra
  info_adicional: string | null
}

function Badge({ active, label }: { active: boolean; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${
        active
          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
          : 'bg-slate-800 text-slate-500 border border-slate-700'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-emerald-400' : 'bg-slate-600'}`} />
      {label}
    </span>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  if (!value && value !== false && value !== 0) return null
  return (
    <div className="flex gap-3">
      <span className="text-xs text-slate-500 w-40 flex-shrink-0 pt-0.5">{label}</span>
      <span className="text-sm text-slate-200 flex-1">{value}</span>
    </div>
  )
}

function DetailModal({ ob, onClose }: { ob: Onboarding; onClose: () => void }) {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="w-full max-w-2xl my-6">
        <div className="card-dark rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-white/5 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-white">{ob.razon_social}</h2>
              <p className="text-sm text-slate-400 mt-0.5">
                {ob.nombre_comercial ? `${ob.nombre_comercial} · ` : ''}{ob.email}
              </p>
              <p className="text-xs text-slate-600 mt-1">{fmt(ob.created_at)}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 flex items-center justify-center transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-6">

            <Section title="Datos legales">
              <Row label="Rep. Legal" value={ob.nombre_rep_legal} />
              <Row label="RUT Rep. Legal" value={ob.rut_rep_legal} />
              <Row label="Razón social" value={ob.razon_social} />
              <Row label="RUT empresa" value={ob.rut_empresa} />
              <Row label="Nombre comercial" value={ob.nombre_comercial} />
            </Section>

            <div className="h-px bg-white/5 mb-6" />

            <Section title="Contacto y negocio">
              <Row label="Email" value={
                <a href={`mailto:${ob.email}`} className="text-brand-purple-light hover:underline">{ob.email}</a>
              } />
              <Row label="Teléfono" value={ob.telefono} />
              <Row label="Ciudad / Región" value={ob.ciudad_operacion} />
              <Row label="Ticket promedio" value={ob.ticket_promedio} />
              <Row label="Sitio web actual" value={ob.sitio_web_actual ? (
                <a href={ob.sitio_web_actual} target="_blank" rel="noopener noreferrer" className="text-brand-purple-light hover:underline break-all">{ob.sitio_web_actual}</a>
              ) : null} />
              <Row label="Redes sociales" value={ob.redes_sociales} />
              <Row label="Competidores" value={ob.competidores} />
            </Section>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Descripción del negocio</p>
              <p className="text-sm text-slate-300 bg-dark rounded-xl p-4 border border-slate-800 leading-relaxed whitespace-pre-wrap">{ob.descripcion_negocio}</p>
            </div>
            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Buyer persona</p>
              <p className="text-sm text-slate-300 bg-dark rounded-xl p-4 border border-slate-800 leading-relaxed whitespace-pre-wrap">{ob.buyer_persona}</p>
            </div>

            <div className="h-px bg-white/5 my-6" />

            <Section title="Objetivos">
              <Row label="Presupuesto ads/mes" value={ob.presupuesto_publicidad} />
              <Row label="Meta leads/mes" value={ob.meta_leads_mes} />
            </Section>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Objetivos del proyecto</p>
              <p className="text-sm text-slate-300 bg-dark rounded-xl p-4 border border-slate-800 leading-relaxed whitespace-pre-wrap">{ob.objetivos}</p>
            </div>

            <div className="h-px bg-white/5 my-6" />

            <Section title="Marketing actual">
              <div className="flex flex-wrap gap-2">
                <Badge active={ob.tiene_meta_ads} label="Meta Ads" />
                <Badge active={ob.tiene_google_ads} label="Google Ads" />
                <Badge active={ob.tiene_gtm} label="GTM" />
                <Badge active={ob.tiene_meta_pixel} label="Meta Pixel" />
                <Badge active={ob.ha_hecho_anuncios} label="Ha hecho anuncios" />
              </div>
              {ob.ha_hecho_anuncios && ob.plataformas_anteriores?.length > 0 && (
                <Row label="Plataformas usadas" value={ob.plataformas_anteriores.join(', ')} />
              )}
              {ob.resultados_anteriores && (
                <div className="mt-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Resultados anteriores</p>
                  <p className="text-sm text-slate-300 bg-dark rounded-xl p-4 border border-slate-800 leading-relaxed whitespace-pre-wrap">{ob.resultados_anteriores}</p>
                </div>
              )}
            </Section>

            <div className="h-px bg-white/5 my-6" />

            <Section title="Diseño de la landing">
              {ob.estilos_diseno?.length > 0 && (
                <div>
                  <p className="text-xs text-slate-500 mb-2">Estilos preferidos</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ob.estilos_diseno.map((e) => (
                      <span key={e} className="text-xs px-2.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple-light">
                        {e}
                      </span>
                    ))}
                  </div>
                  {ob.estilo_otro && <p className="text-sm text-slate-300 mt-2">"{ob.estilo_otro}"</p>}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge active={ob.tiene_branding} label="Tiene branding" />
                <Badge active={ob.tiene_imagenes} label="Tiene imágenes propias" />
              </div>
              {ob.colores_tipografias && (
                <Row label="Colores y tipografías" value={ob.colores_tipografias} />
              )}
              {ob.web_referencia && (
                <Row label="Web de referencia" value={
                  <a href={ob.web_referencia} target="_blank" rel="noopener noreferrer" className="text-brand-purple-light hover:underline break-all">{ob.web_referencia}</a>
                } />
              )}
            </Section>

            {ob.info_adicional && (
              <>
                <div className="h-px bg-white/5 mb-6" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Info adicional</p>
                  <p className="text-sm text-slate-300 bg-dark rounded-xl p-4 border border-slate-800 leading-relaxed whitespace-pre-wrap">{ob.info_adicional}</p>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-white/5 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-slate-600 text-slate-300 rounded-xl text-sm font-medium hover:border-slate-400 hover:bg-white/5 transition-all duration-200"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OnboardingsPage() {
  const [authed, setAuthed] = useState(false)
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [loginError, setLoginError] = useState(false)

  const [onboardings, setOnboardings] = useState<Onboarding[]>([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState<Onboarding | null>(null)
  const [search, setSearch] = useState('')

  const fetchOnboardings = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('onboardings')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error && data) setOnboardings(data as Onboarding[])
    setLoading(false)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuthed = localStorage.getItem('cb_auth') === 'true'
      setAuthed(isAuthed)
      if (isAuthed) fetchOnboardings()
    }
  }, [fetchOnboardings])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (usuario === 'vtorres' && clave === 'admin') {
      localStorage.setItem('cb_auth', 'true')
      setAuthed(true)
      fetchOnboardings()
    } else {
      setLoginError(true)
    }
  }

  const filtered = onboardings.filter((o) => {
    const q = search.toLowerCase()
    return (
      o.razon_social?.toLowerCase().includes(q) ||
      o.nombre_rep_legal?.toLowerCase().includes(q) ||
      o.email?.toLowerCase().includes(q) ||
      o.nombre_comercial?.toLowerCase().includes(q)
    )
  })

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric' })

  // ── Login ────────────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-3xl">⚡</span>
              <span className="text-2xl font-bold gradient-text">ClickBase</span>
            </div>
            <p className="text-slate-500 text-sm">Onboardings · acceso interno</p>
          </div>
          <form onSubmit={handleLogin} className="card-dark rounded-2xl p-8 space-y-4">
            <h2 className="text-lg font-bold text-white mb-2">Iniciar sesión</h2>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">Usuario</label>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full bg-dark border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5">Contraseña</label>
              <input
                type="password"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                className="w-full bg-dark border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:outline-none"
              />
            </div>
            {loginError && <p className="text-red-400 text-sm">Usuario o contraseña incorrectos.</p>}
            <button
              type="submit"
              className="w-full gradient-bg text-white font-bold py-3 rounded-xl text-sm hover:opacity-90 transition-all duration-200 mt-2"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ── Main view ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Top bar */}
      <div className="border-b border-white/5 px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/cotizador" className="flex items-center gap-2 group">
            <span className="text-xl">⚡</span>
            <span className="font-bold gradient-text">ClickBase</span>
          </Link>
          <span className="text-slate-600 text-sm">/</span>
          <Link href="/cotizador" className="text-slate-400 hover:text-slate-200 text-sm transition-colors">
            Cotizador
          </Link>
          <span className="text-slate-600 text-sm">/</span>
          <span className="text-slate-300 text-sm font-medium truncate">Onboardings</span>
        </div>
        <button
          onClick={() => { localStorage.removeItem('cb_auth'); setAuthed(false) }}
          className="text-xs text-slate-500 hover:text-white transition-colors flex-shrink-0"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-white">Onboardings</h1>
            <p className="text-slate-400 text-sm mt-1">
              {onboardings.length} formulario{onboardings.length !== 1 ? 's' : ''} recibido{onboardings.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchOnboardings}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-3 py-2 rounded-lg transition-all"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
              </svg>
              Actualizar
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por empresa, nombre o email..."
            className="w-full bg-dark-card border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-600 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:outline-none"
          />
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-500 gap-3">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Cargando onboardings...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📋</div>
            <p className="text-slate-400 font-medium">
              {search ? 'No se encontraron resultados' : 'Aún no hay onboardings'}
            </p>
            <p className="text-slate-600 text-sm mt-1">
              {search ? 'Prueba con otro término' : 'Los formularios completados aparecerán aquí'}
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filtered.map((ob) => (
              <button
                key={ob.id}
                onClick={() => setSelected(ob)}
                className="card-dark card-dark-hover rounded-2xl p-5 text-left transition-all duration-200 w-full group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Main info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {ob.razon_social?.[0]?.toUpperCase() || '?'}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-white group-hover:text-brand-purple-light transition-colors truncate">
                          {ob.razon_social}
                          {ob.nombre_comercial && ob.nombre_comercial !== ob.razon_social && (
                            <span className="text-slate-500 font-normal ml-2 text-sm">({ob.nombre_comercial})</span>
                          )}
                        </h3>
                        <p className="text-sm text-slate-400 truncate">{ob.email}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 ml-13 pl-0 sm:pl-0 leading-relaxed">
                      {ob.descripcion_negocio}
                    </p>
                  </div>

                  {/* Right info */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                    <span className="text-xs text-slate-500">{fmt(ob.created_at)}</span>
                    <div className="flex gap-1.5">
                      {ob.tiene_meta_ads && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Meta</span>
                      )}
                      {ob.tiene_google_ads && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Google</span>
                      )}
                    </div>
                    <span className="text-xs text-brand-purple-light group-hover:underline">Ver detalle →</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selected && <DetailModal ob={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
