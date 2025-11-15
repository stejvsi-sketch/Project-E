-- ============================================
-- Fix Admin Panel Upload - Allow Public Access
-- ============================================
-- 
-- This fixes the "row-level security policy" error
-- by allowing public inserts, updates, and deletes
-- 
-- Run this in Supabase SQL Editor
-- ============================================

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Allow authenticated full access to model_images" ON model_images;

-- Create new policies that allow public access
CREATE POLICY "Allow public insert to model_images"
  ON model_images FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public update to model_images"
  ON model_images FOR UPDATE
  USING (true);

CREATE POLICY "Allow public delete from model_images"
  ON model_images FOR DELETE
  USING (true);

-- Public read already exists, but let's make sure
DROP POLICY IF EXISTS "Allow public read access to model_images" ON model_images;
CREATE POLICY "Allow public read access to model_images"
  ON model_images FOR SELECT
  USING (true);

-- ============================================
-- Verification
-- ============================================
-- Check all policies are created
SELECT 
  schemaname,
  tablename,
  policyname,
  cmd
FROM pg_policies 
WHERE tablename = 'model_images'
ORDER BY cmd;

-- You should see 4 policies: INSERT, SELECT, UPDATE, DELETE
-- ============================================
