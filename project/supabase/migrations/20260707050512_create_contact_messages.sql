/*
# Create contact_messages table

## Purpose
Stores messages sent by visitors through the portfolio contact form.

## New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `subject` (text, not null) — message subject
  - `message` (text, not null) — message body
  - `created_at` (timestamptz, default now()) — submission timestamp
  - `read` (boolean, default false) — tracks whether the message has been read

## Security
- RLS enabled on `contact_messages`.
- Public INSERT: anyone (anon or authenticated) can submit a message — this is a public contact form.
- No SELECT/UPDATE/DELETE for anon — messages are private once submitted.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  email       text NOT NULL,
  subject     text NOT NULL,
  message     text NOT NULL,
  read        boolean NOT NULL DEFAULT false,
  created_at  timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_messages" ON contact_messages;
CREATE POLICY "public_insert_messages" ON contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
