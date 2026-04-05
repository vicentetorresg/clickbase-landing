-- Tabla unificada de eventos de analítica
-- Ejecutar en: https://supabase.com/dashboard/project/miniimuzpqiuibeciofy/sql

CREATE TABLE IF NOT EXISTS events (
  id           uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at   timestamptz DEFAULT now(),
  type         text        NOT NULL, -- 'visit' | 'scroll' | 'wa_click' | 'form_submit'
  source       text,                 -- pathname: '/', '/embudo1', '/embudo2', etc.
  referrer     text,
  user_agent   text,
  session_id   text,
  scroll_depth int                   -- solo para type='scroll': 25, 50, 75, 100
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_events_anon"
  ON events FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "select_events_anon"
  ON events FOR SELECT TO anon USING (true);
