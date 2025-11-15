-- ============================================
-- COMPLETE FIX - Run This One Script
-- ============================================
-- 
-- This fixes both database and storage permissions
-- Copy and paste ALL of this into Supabase SQL Editor
-- Click RUN
-- 
-- ============================================

-- ============================================
-- Part 1: Fix Database Permissions
-- ============================================

-- Drop old restrictive policies
DROP POLICY IF EXISTS "Allow authenticated full access to model_images" ON model_images;
DROP POLICY IF EXISTS "Allow public read access to model_images" ON model_images;

-- Create new public policies for model_images table
CREATE POLICY "Public can read model_images"
  ON model_images FOR SELECT
  USING (true);

CREATE POLICY "Public can insert model_images"
  ON model_images FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can update model_images"
  ON model_images FOR UPDATE
  USING (true);

CREATE POLICY "Public can delete model_images"
  ON model_images FOR DELETE
  USING (true);

-- ============================================
-- Part 2: Fix Storage Permissions
-- ============================================

-- Make bucket public
INSERT INTO storage.buckets (id, name, public)
VALUES ('scooter-images', 'scooter-images', true)
ON CONFLICT (id) 
DO UPDATE SET public = true;

-- Drop old storage policies
DROP POLICY IF EXISTS "Public read access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
DROP POLICY IF EXISTS "Public read access to scooter-images" ON storage.objects;
DROP POLICY IF EXISTS "Public can upload to scooter-images" ON storage.objects;
DROP POLICY IF EXISTS "Public can update scooter-images" ON storage.objects;
DROP POLICY IF EXISTS "Public can delete from scooter-images" ON storage.objects;

-- Create new storage policies
CREATE POLICY "scooter-images: public read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'scooter-images');

CREATE POLICY "scooter-images: public insert"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'scooter-images');

CREATE POLICY "scooter-images: public update"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'scooter-images');

CREATE POLICY "scooter-images: public delete"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'scooter-images');

-- ============================================
-- Verification - Check Results
-- ============================================

-- Check database policies (should see 4)
SELECT 
  'Database Policies' as type,
  policyname,
  cmd
FROM pg_policies 
WHERE tablename = 'model_images'
ORDER BY cmd;

-- Check storage policies (should see 4)
SELECT 
  'Storage Policies' as type,
  policyname,
  cmd
FROM pg_policies 
WHERE tablename = 'objects' 
  AND policyname LIKE '%scooter%'
ORDER BY cmd;

-- Check bucket is public
SELECT 
  'Bucket Status' as type,
  id,
  name,
  public
FROM storage.buckets 
WHERE id = 'scooter-images';

-- ============================================
-- SUCCESS!
-- ============================================
-- If you see:
-- - 4 database policies (INSERT, SELECT, UPDATE, DELETE)
-- - 4 storage policies (INSERT, SELECT, UPDATE, DELETE)
-- - Bucket public = true
-- 
-- Then you're all set! Go back to admin panel and upload!
-- ============================================
