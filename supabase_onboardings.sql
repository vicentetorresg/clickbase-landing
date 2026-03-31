-- Tabla de onboardings de clientes ClickBase
-- Ejecutar en: Supabase SQL Editor → https://supabase.com/dashboard/project/miniimuzpqiuibeciofy/sql

CREATE TABLE IF NOT EXISTS onboardings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),

  -- Datos legales
  nombre_rep_legal  text NOT NULL,
  rut_rep_legal     text NOT NULL,
  razon_social      text NOT NULL,
  rut_empresa       text NOT NULL,
  nombre_comercial  text,

  -- Contacto / negocio
  email             text NOT NULL,
  telefono          text,
  descripcion_negocio text NOT NULL,
  ciudad_operacion  text,
  ticket_promedio   text,
  buyer_persona     text NOT NULL,
  competidores      text,
  sitio_web_actual  text,
  redes_sociales    text,

  -- Objetivos
  objetivos             text NOT NULL,
  presupuesto_publicidad text,
  meta_leads_mes        text,

  -- Marketing actual
  tiene_meta_ads         boolean DEFAULT false,
  tiene_google_ads       boolean DEFAULT false,
  ha_hecho_anuncios      boolean DEFAULT false,
  plataformas_anteriores text[]  DEFAULT '{}',
  resultados_anteriores  text,
  tiene_google_analytics boolean DEFAULT false,
  tiene_meta_pixel       boolean DEFAULT false,
  tiene_gtm              boolean DEFAULT false,

  -- Diseño
  estilos_diseno      text[] DEFAULT '{}',
  estilo_otro         text,
  tiene_branding      boolean DEFAULT false,
  colores_tipografias text,
  tiene_imagenes      boolean DEFAULT false,
  web_referencia      text,

  -- Adicional
  info_adicional text
);

-- Permitir inserciones anónimas (el formulario usa el anon key)
ALTER TABLE onboardings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_onboardings_anon"
  ON onboardings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "select_onboardings_anon"
  ON onboardings
  FOR SELECT
  TO anon
  USING (true);
