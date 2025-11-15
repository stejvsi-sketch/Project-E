# 📋 Image Upload Checklist

Print this or keep it open while you work!

---

## Phase 1: Image Preparation

### Background Removal
- [ ] Remove background from all 31 images using remove.bg
- [ ] Verify all images are PNG format
- [ ] Check images have transparent backgrounds

### Resizing
- [ ] Resize all 31 images to 1200×1200 pixels
- [ ] Use iloveimg.com or Photoshop
- [ ] Verify aspect ratio is maintained

### Naming - Hero Images (7 files)
- [ ] `sl-pro-hero.png`
- [ ] `dl-pro-hero.png`
- [ ] `cs-pro-hero.png`
- [ ] `cs-pro-plus-hero.png`
- [ ] `vespa-pro-hero.png`
- [ ] `vespa-pro-plus-hero.png`
- [ ] `cs-3-hero.png`

### Naming - Showcase Images (3 files)
- [ ] `showcase-black.png`
- [ ] `showcase-white.png`
- [ ] `showcase-red.png`

### Naming - S.L Pro Variants (3 files)
- [ ] `sl-pro-red.png`
- [ ] `sl-pro-white.png`
- [ ] `sl-pro-black.png`

### Naming - D.L Pro Variants (3 files)
- [ ] `dl-pro-red.png`
- [ ] `dl-pro-white.png`
- [ ] `dl-pro-black.png`

### Naming - CS Pro Variants (3 files)
- [ ] `cs-pro-red.png`
- [ ] `cs-pro-white.png`
- [ ] `cs-pro-black.png`

### Naming - CS Pro + Variants (3 files)
- [ ] `cs-pro-plus-red.png`
- [ ] `cs-pro-plus-white.png`
- [ ] `cs-pro-plus-black.png`

### Naming - Vespa Pro Variants (3 files)
- [ ] `vespa-pro-red.png`
- [ ] `vespa-pro-white.png`
- [ ] `vespa-pro-black.png`

### Naming - Vespa Pro + Variants (3 files)
- [ ] `vespa-pro-plus-red.png`
- [ ] `vespa-pro-plus-white.png`
- [ ] `vespa-pro-plus-black.png`

### Naming - CS 3 Variants (3 files)
- [ ] `cs-3-red.png`
- [ ] `cs-3-white.png`
- [ ] `cs-3-black.png`

---

## Phase 2: Supabase Storage Setup

### Create Bucket
- [ ] Go to Supabase Dashboard
- [ ] Click Storage in sidebar
- [ ] Click "New bucket"
- [ ] Name: `scooter-images`
- [ ] Check "Public bucket" ✅
- [ ] Click "Create bucket"

### Create Folders
- [ ] Open `scooter-images` bucket
- [ ] Create folder: `heroes`
- [ ] Create folder: `showcase`
- [ ] Create folder: `models`

### Upload Hero Images
- [ ] Go into `heroes` folder
- [ ] Click "Upload files"
- [ ] Select all 7 hero images
- [ ] Verify upload complete (7 files)

### Upload Showcase Images
- [ ] Go into `showcase` folder
- [ ] Click "Upload files"
- [ ] Select all 3 showcase images
- [ ] Verify upload complete (3 files)

### Upload Variant Images
- [ ] Go into `models` folder
- [ ] Click "Upload files"
- [ ] Select all 21 variant images
- [ ] Verify upload complete (21 files)

### Verify Uploads
- [ ] Total files in bucket: 31
- [ ] All files are PNG format
- [ ] No upload errors
- [ ] Files accessible (click one to view)

---

## Phase 3: Database Setup

### Get Project ID
- [ ] Go to Supabase → Settings → API
- [ ] Copy Project URL
- [ ] Extract project ID from URL
- [ ] Write it here: `_______________________`

### Update SQL File
- [ ] Open `IMAGES_SQL_SETUP.sql`
- [ ] Find line 52 (`base_url TEXT := ...`)
- [ ] Replace `YOUR_PROJECT_ID` with actual ID
- [ ] Save file

### Run SQL
- [ ] Go to Supabase → SQL Editor
- [ ] Click "New query"
- [ ] Paste entire SQL file content
- [ ] Click "RUN"
- [ ] Wait for completion

### Verify Database
- [ ] Check output shows "31" total images
- [ ] No error messages in SQL output
- [ ] Table `model_images` exists
- [ ] Run verification query:
  ```sql
  SELECT image_type, COUNT(*) 
  FROM model_images 
  GROUP BY image_type;
  ```
- [ ] Results show: 7 hero, 3 showcase, 21 variant

---

## Phase 4: Testing

### Start Development Server
- [ ] Open terminal in project folder
- [ ] Run: `npm run dev`
- [ ] Server starts without errors
- [ ] Open browser to `http://localhost:3000`

### Test Home Page
- [ ] Carousel shows 7 scooter images (not emojis)
- [ ] Images rotate automatically
- [ ] Can click left/right arrows
- [ ] Color showcase section shows 3 scooters
- [ ] Can click color circles to change scooter
- [ ] Images load properly on mobile (resize browser)

### Test Models Page
- [ ] Navigate to `/models`
- [ ] All 7 models show scooter images
- [ ] Scroll through all models
- [ ] Images appear for each model
- [ ] No emoji placeholders

### Test Model Detail Pages
- [ ] Click "Explore Details" on S.L Pro
- [ ] Scooter image appears (not emoji)
- [ ] Click color buttons (Red, White, Black)
- [ ] Image changes with color selection
- [ ] Test at least 3 different models
- [ ] All color variants load correctly

### Mobile Testing
- [ ] Open on actual phone OR resize browser to mobile size
- [ ] Images load on home page
- [ ] Images load on models page
- [ ] Images load on detail pages
- [ ] No horizontal scroll
- [ ] Images fit screen properly

### Performance Check
- [ ] Images load in under 2 seconds
- [ ] No console errors (press F12 → Console)
- [ ] Lazy loading works (images load as you scroll)
- [ ] Browser caches images (reload page, images load faster)

---

## Phase 5: Final Verification

### Image Quality
- [ ] All images are clear (not pixelated)
- [ ] Background removal looks professional
- [ ] Colors match actual scooter colors
- [ ] All images same size and orientation
- [ ] Lighting is consistent across models

### Database Check
- [ ] Run final count query:
  ```sql
  SELECT COUNT(*) FROM model_images;
  ```
- [ ] Result = 31 ✅

### Code Check
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] Website works in Chrome
- [ ] Website works in Firefox
- [ ] Website works in Safari (if available)

### Production Ready
- [ ] All 31 images uploaded ✅
- [ ] Database configured ✅
- [ ] Code working locally ✅
- [ ] No errors or warnings ✅
- [ ] Ready to deploy!

---

## 🎉 Completion

**Date Completed:** _______________

**Total Time Spent:** _______________

**Notes:**
```
_________________________________________________
_________________________________________________
_________________________________________________
```

---

## 📞 Quick Reference

**Supabase Dashboard:** https://app.supabase.com
**Project URL:** https://________.supabase.co
**Storage Bucket:** scooter-images
**Total Images:** 31 (7 + 3 + 21)

**Need Help?**
- See `QUICK_IMAGE_SETUP.md` for quick guide
- See `IMAGE_UPLOAD_GUIDE.md` for detailed help
- See `IMAGES_IMPLEMENTATION_SUMMARY.md` for overview

---

✅ **All Done!** Your website now shows real scooter images! 🚀
