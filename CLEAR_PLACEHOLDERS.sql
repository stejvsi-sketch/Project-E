-- ============================================
-- Clear Placeholder Image Data
-- ============================================
-- 
-- This removes the placeholder records from IMAGES_SQL_SETUP.sql
-- so you can upload fresh images via the admin panel
-- 
-- Run this ONCE before using the admin panel
-- ============================================

-- Delete all existing image records
DELETE FROM model_images;

-- Verify deletion
SELECT COUNT(*) as remaining_images FROM model_images;
-- Should show 0

-- ============================================
-- Now you can use the admin panel to upload!
-- ============================================
-- Go to: http://localhost:3000/admin/images
-- Upload your actual images
-- ============================================
