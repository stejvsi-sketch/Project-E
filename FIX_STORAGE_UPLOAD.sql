-- ============================================
-- Fix Storage Upload Permissions
-- ============================================
-- 
-- This allows public uploads to the scooter-images bucket
-- Run this in Supabase SQL Editor
-- ============================================

-- Allow public uploads to scooter-images bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('scooter-images', 'scooter-images', true)
ON CONFLICT (id) 
DO UPDATE SET public = true;

-- Drop existing storage policies if any
DROP POLICY IF EXISTS "Public read access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
DROP POLICY IF EXISTS "Public can upload to scooter-images" ON storage.objects;
DROP POLICY IF EXISTS "Public can update scooter-images" ON storage.objects;
DROP POLICY IF EXISTS "Public can delete from scooter-images" ON storage.objects;

-- Create new policies for public access
CREATE POLICY "Public read access to scooter-images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'scooter-images');

CREATE POLICY "Public can upload to scooter-images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'scooter-images');

CREATE POLICY "Public can update scooter-images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'scooter-images');

CREATE POLICY "Public can delete from scooter-images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'scooter-images');

-- ============================================
-- Verification
-- ============================================
SELECT * FROM storage.buckets WHERE id = 'scooter-images';
-- Should show public = true

SELECT policyname, cmd 
FROM pg_policies 
WHERE tablename = 'objects' 
  AND policyname LIKE '%scooter%'
ORDER BY cmd;
-- Should show 4 policies
-- ============================================
