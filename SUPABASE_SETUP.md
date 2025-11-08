# Supabase Setup Guide for M'LiteEv

This guide will help you set up the Supabase database for the M'LiteEv website.

## Prerequisites

1. Create a Supabase account at https://supabase.com
2. Create a new project in Supabase

## Database Schema

Run the following SQL commands in your Supabase SQL Editor:

### 1. Create Tables

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Scooters Table
CREATE TABLE scooters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(100),
  short_description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  specs JSONB DEFAULT '{}'::jsonb,
  seo_title VARCHAR(255),
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Variants Table
CREATE TABLE variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  scooter_id UUID REFERENCES scooters(id) ON DELETE CASCADE,
  color_name VARCHAR(100) NOT NULL,
  color_hex VARCHAR(7) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  hero_image_url TEXT,
  gallery_images TEXT[] DEFAULT ARRAY[]::TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(scooter_id, slug)
);

-- Leads Table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL,
  scooter_id UUID REFERENCES scooters(id),
  variant_id UUID REFERENCES variants(id),
  page_url TEXT,
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  ip VARCHAR(45),
  user_agent TEXT,
  status VARCHAR(50) DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Site Settings Table
CREATE TABLE site_settings (
  key VARCHAR(100) PRIMARY KEY,
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admins Table
CREATE TABLE admins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) DEFAULT 'editor',
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2. Create Indexes

```sql
-- Indexes for better query performance
CREATE INDEX idx_scooters_slug ON scooters(slug);
CREATE INDEX idx_variants_scooter_id ON variants(scooter_id);
CREATE INDEX idx_variants_slug ON variants(slug);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_status ON leads(status);
```

### 3. Row Level Security (RLS)

```sql
-- Enable RLS
ALTER TABLE scooters ENABLE ROW LEVEL SECURITY;
ALTER TABLE variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Public read access for scooters and variants
CREATE POLICY "Allow public read access to scooters"
  ON scooters FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to variants"
  ON variants FOR SELECT
  USING (true);

-- Allow anyone to insert leads
CREATE POLICY "Allow public insert to leads"
  ON leads FOR INSERT
  WITH CHECK (true);

-- Admin policies (authenticated users only)
CREATE POLICY "Allow authenticated read access to leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update to leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated full access to scooters"
  ON scooters FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated full access to variants"
  ON variants FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read access to site_settings"
  ON site_settings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update access to site_settings"
  ON site_settings FOR UPDATE
  TO authenticated
  USING (true);
```

### 4. Insert Initial Data

```sql
-- Insert default site settings
INSERT INTO site_settings (key, value) VALUES
  ('owner_email', 'info@mliteev.com'),
  ('whatsapp_number', '919876543210'),
  ('hero_title', 'Energise your ride — premium urban EV scooters'),
  ('hero_subtitle', 'Built for city life. Designed for the future.'),
  ('facebook_url', 'https://facebook.com'),
  ('instagram_url', 'https://instagram.com'),
  ('twitter_url', 'https://twitter.com');

-- Insert sample scooters (optional)
INSERT INTO scooters (name, slug, category, short_description, features, specs, seo_title, seo_description) VALUES
  (
    'M''Lite City',
    'mlite-city',
    'City',
    'Perfect for daily urban commutes',
    '[
      {"icon": "⚡", "title": "Fast Charging", "description": "4-hour quick charge"},
      {"icon": "🔋", "title": "Long Range", "description": "60km on single charge"},
      {"icon": "🛡️", "title": "Safe Riding", "description": "Dual disc brakes"}
    ]'::jsonb,
    '{
      "range": "60 km",
      "motor": "250W BLDC",
      "top_speed": "25 km/h",
      "battery": "48V 12Ah Lithium",
      "weight": "45 kg",
      "warranty": "3 Years",
      "charging_time": "4-5 hours",
      "brakes": "Front & Rear Disc"
    }'::jsonb,
    'M''Lite City - Urban Electric Scooter',
    'Eco-friendly electric scooter perfect for city commuting with 60km range'
  );

-- Insert sample variants
INSERT INTO variants (scooter_id, color_name, color_hex, slug) VALUES
  (
    (SELECT id FROM scooters WHERE slug = 'mlite-city'),
    'Midnight Black',
    '#000000',
    'mlite-city-midnight-black'
  ),
  (
    (SELECT id FROM scooters WHERE slug = 'mlite-city'),
    'Pearl White',
    '#FFFFFF',
    'mlite-city-pearl-white'
  ),
  (
    (SELECT id FROM scooters WHERE slug = 'mlite-city'),
    'Sunset Orange',
    '#FF6A00',
    'mlite-city-sunset-orange'
  );
```

## Storage Setup (for images)

1. Go to Storage in your Supabase dashboard
2. Create a new bucket called `scooter-images`
3. Set the bucket to public
4. Create folders: `heroes`, `galleries`, `logos`

### Storage Policies

```sql
-- Allow public read access
CREATE POLICY "Public read access"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'scooter-images');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'scooter-images');
```

## Get Your Credentials

1. Go to Settings > API in your Supabase dashboard
2. Copy the following:
   - `Project URL` → This is your `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. Add these to your `.env.local` file (see ENV_SETUP.md)

## Next Steps

1. Set up environment variables (see `ENV_SETUP.md`)
2. Upload scooter images to Supabase Storage
3. Update variant records with image URLs
4. Create admin user accounts

## Useful Supabase Features

- **Database**: View and edit your tables in the Table Editor
- **SQL Editor**: Run custom queries
- **Storage**: Manage images and files
- **Auth**: Set up admin authentication (optional for Phase 2)
- **Logs**: Monitor API calls and errors
