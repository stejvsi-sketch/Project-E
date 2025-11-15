-- ============================================
-- VERIFY EVERYTHING IS SET UP CORRECTLY
-- ============================================
-- Run this to check your setup
-- ============================================

-- 1. Check if bucket exists
SELECT 
  '✅ Bucket Check' as test,
  id, 
  name, 
  public,
  CASE 
    WHEN public = true THEN '✅ PUBLIC'
    ELSE '❌ NOT PUBLIC - Make it public!'
  END as status
FROM storage.buckets 
WHERE id = 'scooter-images';

-- If nothing shows up, bucket doesn't exist!
-- Create it: Storage → New bucket → scooter-images (Public ON)

-- ============================================

-- 2. Check database policies
SELECT 
  '✅ Database Policies' as test,
  policyname,
  cmd as permission_type
FROM pg_policies 
WHERE tablename = 'model_images'
ORDER BY cmd;

-- Should see: DELETE, INSERT, SELECT, UPDATE (4 total)

-- ============================================

-- 3. Check storage policies
SELECT 
  '✅ Storage Policies' as test,
  policyname,
  cmd as permission_type
FROM pg_policies 
WHERE tablename = 'objects' 
  AND policyname LIKE '%scooter%'
ORDER BY cmd;

-- Should see: DELETE, INSERT, SELECT, UPDATE (4 total)

-- ============================================

-- 4. Check table exists
SELECT 
  '✅ Table Check' as test,
  COUNT(*) as image_count
FROM model_images;

-- Should run without error (count can be 0)

-- ============================================
-- SUMMARY
-- ============================================
-- You should see:
-- ✅ 1 bucket (public = true)
-- ✅ 4 database policies
-- ✅ 4 storage policies
-- ✅ Table exists (no error)
-- 
-- If anything is missing, run FIX_ALL_PERMISSIONS.sql
-- ============================================
