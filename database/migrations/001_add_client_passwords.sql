-- Add password field to clients table
ALTER TABLE clients ADD COLUMN IF NOT EXISTS password_hash TEXT;

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_clients_email ON clients(email);

-- Add updated_at trigger if not exists
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
