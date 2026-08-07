-- Assistant Secteur V1.3 — configuration Supabase pour prototype
-- À coller dans Supabase > SQL Editor > New query > Run

create table if not exists public.sector_state (
  room text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.sector_state enable row level security;

-- Prototype : lecture/écriture via la clé anon.
-- La séparation entre secteurs repose sur un code "room" long et difficile à deviner.
drop policy if exists "prototype_select_sector_state" on public.sector_state;
drop policy if exists "prototype_insert_sector_state" on public.sector_state;
drop policy if exists "prototype_update_sector_state" on public.sector_state;

create policy "prototype_select_sector_state" on public.sector_state
for select to anon using (true);

create policy "prototype_insert_sector_state" on public.sector_state
for insert to anon with check (true);

create policy "prototype_update_sector_state" on public.sector_state
for update to anon using (true) with check (true);
