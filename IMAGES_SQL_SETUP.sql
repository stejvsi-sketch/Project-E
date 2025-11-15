-- ============================================
-- M'LiteEv Image Upload - Supabase SQL Setup
-- ============================================
-- 
-- INSTRUCTIONS:
-- 1. Replace YOUR_PROJECT_ID with your actual Supabase project ID
-- 2. Copy and paste this entire file into Supabase SQL Editor
-- 3. Click "RUN" to execute
--
-- ============================================

-- Step 1: Create model_images table
CREATE TABLE IF NOT EXISTS model_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  model_slug VARCHAR(100) NOT NULL,
  color VARCHAR(50) NOT NULL,
  image_type VARCHAR(50) NOT NULL, -- 'hero' or 'variant' or 'showcase'
  image_url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(model_slug, color, image_type)
);

-- Step 2: Enable Row Level Security
ALTER TABLE model_images ENABLE ROW LEVEL SECURITY;

-- Step 3: Create policies for public read access
CREATE POLICY "Allow public read access to model_images"
  ON model_images FOR SELECT
  USING (true);

-- Step 4: Allow authenticated users to manage images
CREATE POLICY "Allow authenticated full access to model_images"
  ON model_images FOR ALL
  TO authenticated
  USING (true);

-- Step 5: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_model_images_slug ON model_images(model_slug);
CREATE INDEX IF NOT EXISTS idx_model_images_color ON model_images(color);
CREATE INDEX IF NOT EXISTS idx_model_images_type ON model_images(image_type);

-- ============================================
-- Step 6: Insert Image Data
-- ============================================
-- 
-- ⚠️ IMPORTANT: Replace YOUR_PROJECT_ID below with your actual project ID!
-- Find it in: Supabase Dashboard → Settings → API → Project URL
-- Example: https://abcdefghijk.supabase.co
--                    ^^^^^^^^^^^
-- ============================================

DO $$
DECLARE
  -- 🔴 CHANGE THIS TO YOUR PROJECT ID 🔴
  base_url TEXT := 'https://pkuukuonzjooezsbkmtm.supabase.co/storage/v1/object/public/scooter-images/';
BEGIN

-- ============================================
-- HERO IMAGES (7 images for carousel)
-- ============================================
INSERT INTO model_images (model_slug, color, image_type, image_url, display_order) VALUES
  ('sl-pro', 'any', 'hero', base_url || 'heroes/sl-pro-hero.png', 1),
  ('dl-pro', 'any', 'hero', base_url || 'heroes/dl-pro-hero.png', 2),
  ('cs-pro', 'any', 'hero', base_url || 'heroes/cs-pro-hero.png', 3),
  ('cs-pro-plus', 'any', 'hero', base_url || 'heroes/cs-pro-plus-hero.png', 4),
  ('vespa-pro', 'any', 'hero', base_url || 'heroes/vespa-pro-hero.png', 5),
  ('vespa-pro-plus', 'any', 'hero', base_url || 'heroes/vespa-pro-plus-hero.png', 6),
  ('cs-3', 'any', 'hero', base_url || 'heroes/cs-3-hero.png', 7)
ON CONFLICT (model_slug, color, image_type) DO UPDATE 
  SET image_url = EXCLUDED.image_url;

-- ============================================
-- SHOWCASE IMAGES (3 images for color section)
-- ============================================
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('showcase', 'black', 'showcase', base_url || 'showcase/showcase-black.png'),
  ('showcase', 'white', 'showcase', base_url || 'showcase/showcase-white.png'),
  ('showcase', 'red', 'showcase', base_url || 'showcase/showcase-red.png')
ON CONFLICT (model_slug, color, image_type) DO UPDATE 
  SET image_url = EXCLUDED.image_url;

-- ============================================
-- VARIANT IMAGES (21 images = 7 models × 3 colors)
-- ============================================

-- S.L Pro variants (Red, White, Black)
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('sl-pro', 'red', 'variant', base_url || 'models/sl-pro-red.png'),
  ('sl-pro', 'white', 'variant', base_url || 'models/sl-pro-white.png'),
  ('sl-pro', 'black', 'variant', base_url || 'models/sl-pro-black.png')
ON CONFLICT (model_slug, color, image_type) DO UPDATE 
  SET image_url = EXCLUDED.image_url;

-- D.L Pro variants (Red, White, Black)
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('dl-pro', 'red', 'variant', base_url || 'models/dl-pro-red.png'),
  ('dl-pro', 'white', 'variant', base_url || 'models/dl-pro-white.png'),
  ('dl-pro', 'black', 'variant', base_url || 'models/dl-pro-black.png')
ON CONFLICT (model_slug, color, image_type) DO UPDATE 
  SET image_url = EXCLUDED.image_url;

-- CS Pro variants (Red, White, Black)
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('cs-pro', 'red', 'variant', base_url || 'models/cs-pro-red.png'),
  ('cs-pro', 'white', 'variant', base_url || 'models/cs-pro-white.png'),
  ('cs-pro', 'black', 'variant', base_url || 'models/cs-pro-black.png')
ON CONFLICT (model_slug, color, image_type) DO UPDATE 
  SET image_url = EXCLUDED.image_url;

-- CS Pro + variants (Red, White, Black)
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('cs-pro-plus', 'red', 'variant', base_url || 'models/cs-pro-plus-red.png'),
  ('cs-pro-plus', 'white', 'variant', base_url || 'models/cs-pro-plus-white.png'),
  ('cs-pro-plus', 'black', 'variant', base_url || 'models/cs-pro-plus-black.png')
ON CONFLICT (model_slug, color, image_type) DO UPDATE 
  SET image_url = EXCLUDED.image_url;

-- Vespa Pro variants (Red, White, Black)
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('vespa-pro', 'red', 'variant', base_url || 'models/vespa-pro-red.png'),
  ('vespa-pro', 'white', 'variant', base_url || 'models/vespa-pro-white.png'),
  ('vespa-pro', 'black', 'variant', base_url || 'models/vespa-pro-black.png')
ON CONFLICT (model_slug, color, image_type) DO UPDATE 
  SET image_url = EXCLUDED.image_url;

-- Vespa Pro + variants (Red, White, Black)
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('vespa-pro-plus', 'red', 'variant', base_url || 'models/vespa-pro-plus-red.png'),
  ('vespa-pro-plus', 'white', 'variant', base_url || 'models/vespa-pro-plus-white.png'),
  ('vespa-pro-plus', 'black', 'variant', base_url || 'models/vespa-pro-plus-black.png')
ON CONFLICT (model_slug, color, image_type) DO UPDATE 
  SET image_url = EXCLUDED.image_url;

-- CS 3 variants (Red, White, Black)
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('cs-3', 'red', 'variant', base_url || 'models/cs-3-red.png'),
  ('cs-3', 'white', 'variant', base_url || 'models/cs-3-white.png'),
  ('cs-3', 'black', 'variant', base_url || 'models/cs-3-black.png')
ON CONFLICT (model_slug, color, image_type) DO UPDATE 
  SET image_url = EXCLUDED.image_url;

END $$;

-- ============================================
-- Step 7: Verify Installation
-- ============================================

-- Check total images (should be 31)
SELECT COUNT(*) as total_images FROM model_images;

-- Check breakdown by type
SELECT image_type, COUNT(*) as count 
FROM model_images 
GROUP BY image_type 
ORDER BY image_type;

-- View all images organized
SELECT 
  model_slug, 
  color, 
  image_type,
  display_order,
  SUBSTRING(image_url, LENGTH(image_url) - 30, 31) as filename
FROM model_images 
ORDER BY 
  CASE image_type 
    WHEN 'hero' THEN 1 
    WHEN 'showcase' THEN 2 
    WHEN 'variant' THEN 3 
  END,
  display_order,
  model_slug, 
  color;

-- ============================================
-- SUCCESS!
-- ============================================
-- If you see 31 total images above, you're done!
-- Now upload your images to Supabase Storage following the guide.
-- ============================================
