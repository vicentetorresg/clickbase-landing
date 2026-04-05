-- Tabla de clicks en botones de WhatsApp
-- Ejecutar en: https://supabase.com/dashboard/project/miniimuzpqiuibeciofy/sql

CREATE TABLE IF NOT EXISTS whatsapp_clicks (
  id         uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  source     text,        -- página de origen: '/', 'embudo1', 'embudo2', etc.
  referrer   text,        -- URL desde donde llegó el usuario
  user_agent text         -- dispositivo/navegador
);

ALTER TABLE whatsapp_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_whatsapp_clicks_anon"
  ON whatsapp_clicks FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "select_whatsapp_clicks_anon"
  ON whatsapp_clicks FOR SELECT TO anon USING (true);
