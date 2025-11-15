# 🚀 Quick Image Setup Guide

## 📦 What You Need
- **31 scooter images** (PNG with transparent background, 1200×1200px)
- **Supabase account** (already set up)

---

## ✅ Step-by-Step Checklist

### 1️⃣ Prepare Images (30 minutes)

**Remove backgrounds:**
- Go to https://www.remove.bg
- Upload each scooter photo
- Download PNG files

**Resize to 1200×1200px:**
- Go to https://www.iloveimg.com/resize-image
- Upload PNG → Set to 1200×1200 → Download

**Rename files exactly as shown:**

**Hero images (7 files):**
```
sl-pro-hero.png
dl-pro-hero.png
cs-pro-hero.png
cs-pro-plus-hero.png
vespa-pro-hero.png
vespa-pro-plus-hero.png
cs-3-hero.png
```

**Showcase images (3 files):**
```
showcase-black.png
showcase-white.png
showcase-red.png
```

**Model variant images (21 files):**
```
sl-pro-red.png, sl-pro-white.png, sl-pro-black.png
dl-pro-red.png, dl-pro-white.png, dl-pro-black.png
cs-pro-red.png, cs-pro-white.png, cs-pro-black.png
cs-pro-plus-red.png, cs-pro-plus-white.png, cs-pro-plus-black.png
vespa-pro-red.png, vespa-pro-white.png, vespa-pro-black.png
vespa-pro-plus-red.png, vespa-pro-plus-white.png, vespa-pro-plus-black.png
cs-3-red.png, cs-3-white.png, cs-3-black.png
```

---

### 2️⃣ Upload to Supabase (10 minutes)

1. Go to **Supabase Dashboard** → **Storage**
2. Click **New bucket** → Name: `scooter-images` → ✅ Public → Create

3. **Create 3 folders inside the bucket:**
   - Click **Create folder** → Name: `heroes`
   - Click **Create folder** → Name: `showcase`
   - Click **Create folder** → Name: `models`

4. **Upload images:**
   - Go into `heroes` folder → Upload 7 hero images
   - Go into `showcase` folder → Upload 3 showcase images
   - Go into `models` folder → Upload 21 variant images

---

### 3️⃣ Run SQL Setup (2 minutes)

1. Open `IMAGES_SQL_SETUP.sql` file in this folder
2. Find line 52: `base_url TEXT := 'https://YOUR_PROJECT_ID.supabase.co/...`
3. Replace `YOUR_PROJECT_ID` with your actual project ID
   - Find it: Supabase → Settings → API → Project URL
   - Example: `https://abcdefghijk.supabase.co` → use `abcdefghijk`
4. Copy entire SQL file
5. Go to Supabase → **SQL Editor** → Paste → Click **RUN**
6. Check output shows **31 total images** ✅

---

### 4️⃣ Test Your Website (1 minute)

```powershell
npm run dev
```

**Check these pages:**
- ✅ Home page carousel shows 7 real scooter images
- ✅ Home page color section shows 3 scooters (black/white/red)
- ✅ Models page shows scooters in their colors
- ✅ Individual model pages show color variants

---

## 🆘 Troubleshooting

**Images not showing?**
```sql
-- Run this in Supabase SQL Editor to check:
SELECT model_slug, color, image_type, image_url 
FROM model_images 
ORDER BY image_type, model_slug;
```

**Bucket not public?**
1. Storage → `scooter-images` → Settings
2. Make sure "Public bucket" is ON

**Wrong project ID?**
1. Check: Supabase → Settings → API → Project URL
2. Update SQL line 52 and re-run

---

## 📸 Image Naming Reference

| Location | Purpose | Files Needed | Folder |
|----------|---------|--------------|--------|
| Home carousel | Show all 7 models | 7 hero images | `heroes/` |
| Color showcase | Show 3 colors | 3 showcase images | `showcase/` |
| Models page | All color variants | 21 variant images | `models/` |
| Model detail | Color selection | Same 21 variants | `models/` |

---

## 🎯 Quick Commands

**Start dev server:**
```bash
npm run dev
```

**Check images in database:**
```sql
SELECT COUNT(*) FROM model_images;  -- Should be 31
```

**Re-run SQL if you need to update:**
- Just edit `IMAGES_SQL_SETUP.sql` and run again
- Uses `ON CONFLICT DO UPDATE` so it's safe to re-run

---

## ✨ You're Done!

Once you complete these 4 steps, your website will display real scooter images everywhere! 🎉

Need detailed help? See `IMAGE_UPLOAD_GUIDE.md` for the complete guide.
