# 🖼️ Complete Image Upload Guide for M'LiteEv

## 📋 What You Need

### Images Required:
1. **Home Page Carousel**: 7 images (one per model - any color)
2. **Home Page Color Showcase**: 3 images (Black, White, Red - any model)
3. **Models Page**: 21 images (7 models × 3 colors = Red, White, Black for each)

**Total**: 31 images

---

## 🎨 Step 1: Prepare Your Images

### A. Remove Background

**Option 1: Online Tool (Easiest)**
1. Go to https://www.remove.bg
2. Upload your scooter image
3. Click "Download" (free for normal resolution)
4. Save as PNG (transparent background)

**Option 2: Photoshop/GIMP**
1. Open image
2. Use Magic Wand or Pen Tool to select scooter
3. Delete background
4. Save as PNG with transparency

### B. Resize Images

**Recommended Sizes:**
- **Desktop Hero**: 1200px × 1200px (square, for carousel & models page)
- **Mobile**: Next.js will auto-generate smaller versions

**How to Resize:**

**Option 1: Online (Free)**
1. Go to https://www.iloveimg.com/resize-image
2. Upload your PNG
3. Select "By pixels"
4. Enter: Width = 1200, Height = 1200
5. Select "Maintain aspect ratio" ✓
6. Download

**Option 2: Photoshop**
1. Image → Image Size
2. Width: 1200px, Height: 1200px
3. Resample: Bicubic Sharper
4. Save as PNG

**Option 3: Bulk Resize (Windows)**
```powershell
# Install ImageMagick first from: https://imagemagick.org/script/download.php
# Then run this in PowerShell in your images folder:

Get-ChildItem *.png | ForEach-Object {
    magick convert $_.Name -resize 1200x1200 -background none -gravity center -extent 1200x1200 "resized_$($_.Name)"
}
```

### C. Naming Convention

Use this exact naming pattern:

**For Models Page (21 images):**
```
sl-pro-red.png
sl-pro-white.png
sl-pro-black.png
dl-pro-red.png
dl-pro-white.png
dl-pro-black.png
cs-pro-red.png
cs-pro-white.png
cs-pro-black.png
cs-pro-plus-red.png
cs-pro-plus-white.png
cs-pro-plus-black.png
vespa-pro-red.png
vespa-pro-white.png
vespa-pro-black.png
vespa-pro-plus-red.png
vespa-pro-plus-white.png
vespa-pro-plus-black.png
cs-3-red.png
cs-3-white.png
cs-3-black.png
```

**For Home Page Carousel (7 images - any color):**
```
sl-pro-hero.png
dl-pro-hero.png
cs-pro-hero.png
cs-pro-plus-hero.png
vespa-pro-hero.png
vespa-pro-plus-hero.png
cs-3-hero.png
```

**For Color Showcase (3 images - any model):**
```
showcase-black.png
showcase-white.png
showcase-red.png
```

---

## ☁️ Step 2: Upload to Supabase Storage

### A. Create Storage Bucket

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Click **Storage** in left sidebar
4. Click **New bucket**
5. Name: `scooter-images`
6. Set **Public bucket**: ✓ YES
7. Click **Create bucket**

### B. Create Folders

1. Click on `scooter-images` bucket
2. Click **Create folder**
3. Create these 3 folders:
   - `models` (for the 21 color variant images)
   - `heroes` (for the 7 hero carousel images)
   - `showcase` (for the 3 color showcase images)

### C. Upload Images

1. Click on `models` folder
2. Click **Upload files**
3. Select all 21 model images (sl-pro-red.png, etc.)
4. Click **Upload**
5. Repeat for `heroes` folder (7 images)
6. Repeat for `showcase` folder (3 images)

### D. Get Image URLs

After upload, click any image and copy its URL. It will look like:
```
https://[your-project-id].supabase.co/storage/v1/object/public/scooter-images/models/sl-pro-red.png
```

Save the base URL:
```
https://[your-project-id].supabase.co/storage/v1/object/public/scooter-images/
```

---

## 🗄️ Step 3: Update Database Schema

### A. Create New Table for Model Images

Open Supabase **SQL Editor** and run:

```sql
-- Table to store model images
CREATE TABLE IF NOT EXISTS model_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  model_slug VARCHAR(100) NOT NULL,
  color VARCHAR(50) NOT NULL,
  image_type VARCHAR(50) NOT NULL, -- 'hero' or 'variant'
  image_url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(model_slug, color, image_type)
);

-- Enable RLS
ALTER TABLE model_images ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Allow public read access to model_images"
  ON model_images FOR SELECT
  USING (true);

-- Authenticated users can manage
CREATE POLICY "Allow authenticated full access to model_images"
  ON model_images FOR ALL
  TO authenticated
  USING (true);

-- Create index
CREATE INDEX idx_model_images_slug ON model_images(model_slug);
CREATE INDEX idx_model_images_color ON model_images(color);
```

### B. Insert Image Data

**IMPORTANT**: Replace `YOUR_PROJECT_ID` with your actual Supabase project ID!

```sql
-- Base URL for all images
-- Replace YOUR_PROJECT_ID with your actual project ID
DO $$
DECLARE
  base_url TEXT := 'https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/scooter-images/';
BEGIN

-- Insert hero images (carousel on home page)
INSERT INTO model_images (model_slug, color, image_type, image_url, display_order) VALUES
  ('sl-pro', 'any', 'hero', base_url || 'heroes/sl-pro-hero.png', 1),
  ('dl-pro', 'any', 'hero', base_url || 'heroes/dl-pro-hero.png', 2),
  ('cs-pro', 'any', 'hero', base_url || 'heroes/cs-pro-hero.png', 3),
  ('cs-pro-plus', 'any', 'hero', base_url || 'heroes/cs-pro-plus-hero.png', 4),
  ('vespa-pro', 'any', 'hero', base_url || 'heroes/vespa-pro-hero.png', 5),
  ('vespa-pro-plus', 'any', 'hero', base_url || 'heroes/vespa-pro-plus-hero.png', 6),
  ('cs-3', 'any', 'hero', base_url || 'heroes/cs-3-hero.png', 7);

-- Insert showcase images (color section on home page)
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('showcase', 'black', 'showcase', base_url || 'showcase/showcase-black.png'),
  ('showcase', 'white', 'showcase', base_url || 'showcase/showcase-white.png'),
  ('showcase', 'red', 'showcase', base_url || 'showcase/showcase-red.png');

-- Insert S.L Pro variant images
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('sl-pro', 'red', 'variant', base_url || 'models/sl-pro-red.png'),
  ('sl-pro', 'white', 'variant', base_url || 'models/sl-pro-white.png'),
  ('sl-pro', 'black', 'variant', base_url || 'models/sl-pro-black.png');

-- Insert D.L Pro variant images
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('dl-pro', 'red', 'variant', base_url || 'models/dl-pro-red.png'),
  ('dl-pro', 'white', 'variant', base_url || 'models/dl-pro-white.png'),
  ('dl-pro', 'black', 'variant', base_url || 'models/dl-pro-black.png');

-- Insert CS Pro variant images
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('cs-pro', 'red', 'variant', base_url || 'models/cs-pro-red.png'),
  ('cs-pro', 'white', 'variant', base_url || 'models/cs-pro-white.png'),
  ('cs-pro', 'black', 'variant', base_url || 'models/cs-pro-black.png');

-- Insert CS Pro + variant images
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('cs-pro-plus', 'red', 'variant', base_url || 'models/cs-pro-plus-red.png'),
  ('cs-pro-plus', 'white', 'variant', base_url || 'models/cs-pro-plus-white.png'),
  ('cs-pro-plus', 'black', 'variant', base_url || 'models/cs-pro-plus-black.png');

-- Insert Vespa Pro variant images
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('vespa-pro', 'red', 'variant', base_url || 'models/vespa-pro-red.png'),
  ('vespa-pro', 'white', 'variant', base_url || 'models/vespa-pro-white.png'),
  ('vespa-pro', 'black', 'variant', base_url || 'models/vespa-pro-black.png');

-- Insert Vespa Pro + variant images
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('vespa-pro-plus', 'red', 'variant', base_url || 'models/vespa-pro-plus-red.png'),
  ('vespa-pro-plus', 'white', 'variant', base_url || 'models/vespa-pro-plus-white.png'),
  ('vespa-pro-plus', 'black', 'variant', base_url || 'models/vespa-pro-plus-black.png');

-- Insert CS 3 variant images
INSERT INTO model_images (model_slug, color, image_type, image_url) VALUES
  ('cs-3', 'red', 'variant', base_url || 'models/cs-3-red.png'),
  ('cs-3', 'white', 'variant', base_url || 'models/cs-3-white.png'),
  ('cs-3', 'black', 'variant', base_url || 'models/cs-3-black.png');

END $$;
```

### C. Verify Data

```sql
-- Check if all images are inserted
SELECT model_slug, color, image_type, image_url 
FROM model_images 
ORDER BY display_order, model_slug, color;

-- Should return 31 rows (7 heroes + 3 showcase + 21 variants)
SELECT COUNT(*) as total_images FROM model_images;
```

---

## 💻 Step 4: Update Code to Use Real Images

I'll now update your code files to fetch and display these images instead of emojis.

---

## 🎯 Quick Checklist

- [ ] Remove background from 31 images
- [ ] Resize all images to 1200×1200px
- [ ] Rename images correctly
- [ ] Create Supabase bucket `scooter-images`
- [ ] Create 3 folders: `models`, `heroes`, `showcase`
- [ ] Upload 21 images to `models/`
- [ ] Upload 7 images to `heroes/`
- [ ] Upload 3 images to `showcase/`
- [ ] Run SQL to create `model_images` table
- [ ] Update base URL in SQL insert script
- [ ] Run SQL to insert all image records
- [ ] Verify 31 images in database
- [ ] Test website

---

## 📱 Responsive Image Handling

Next.js Image component automatically:
- ✅ Generates multiple sizes
- ✅ Lazy loads images
- ✅ Optimizes for mobile
- ✅ Serves WebP format when supported

You don't need separate mobile images!

---

## ❓ Troubleshooting

**Images not showing?**
1. Check bucket is **public**
2. Verify image URLs are correct
3. Check browser console for errors
4. Ensure images are PNG with transparent background

**Images too large?**
1. Compress PNG: https://tinypng.com
2. Keep under 500KB per image

**Wrong colors?**
- Ensure image names match exactly (lowercase)
- Check color in database matches filename

---

## 🎉 Done!

Once you complete these steps, tell me and I'll update the code to use your images!
