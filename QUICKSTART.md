# Quick Start Guide - M'LiteEv

Get your M'LiteEv website up and running in 15 minutes!

## ✅ Step 1: Verify Installation

Check that dependencies are installed:

```bash
npm install
```

## ✅ Step 2: Create Environment File

Create a file named `.env.local` in the project root:

```env
# Copy this template and fill in your credentials

# Supabase (Get from https://supabase.com/dashboard)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Email Configuration (Gmail example for testing)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM=your-email@gmail.com

# Contact Details
OWNER_EMAIL=info@mliteev.com
WHATSAPP_NUMBER=919876543210
```

**Important:** 
- For Gmail, enable 2-Step Verification and create an App Password
- See `ENV_SETUP.md` for detailed instructions

## ✅ Step 3: Setup Supabase Database

1. **Create a Supabase Project:**
   - Go to https://supabase.com
   - Create a new project
   - Wait for setup to complete

2. **Run the SQL Setup:**
   - Open your Supabase dashboard
   - Go to SQL Editor
   - Copy ALL SQL from `SUPABASE_SETUP.md`
   - Paste and run it

3. **Get Your Credentials:**
   - Go to Settings → API
   - Copy `Project URL` → Use as `NEXT_PUBLIC_SUPABASE_URL`
   - Copy `anon public` key → Use as `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Add these to your `.env.local` file

## ✅ Step 4: Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## ✅ Step 5: Test the Website

### Test Navigation
- ✅ Click through all menu items (Home, Models, About, Support, Contact)
- ✅ Check mobile menu works (resize browser)

### Test WhatsApp Button
- ✅ Click the floating WhatsApp button (bottom right)
- ✅ Should open WhatsApp with pre-filled message

### Test Lead Form (Contact Page)
- ✅ Go to `/contact` page
- ✅ Fill in email, select model, select color
- ✅ Submit the form
- ✅ Check you receive email (both owner and customer)

## 🚨 Common Issues & Fixes

### Issue: "Cannot find module '@/components/...'"

**Fix:** TypeScript path aliases issue. Restart dev server:
```bash
# Stop server (Ctrl+C)
npm run dev
```

### Issue: Tailwind styles not working

**Fix:** Check that `tailwind.config.ts` and `postcss.config.mjs` exist:
```bash
# List config files
dir tailwind.config.ts
dir postcss.config.mjs
```

### Issue: Supabase connection error

**Fix:** Verify environment variables:
```bash
# Check .env.local exists
dir .env.local

# Make sure URLs are correct (no quotes needed)
# NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
```

### Issue: Email not sending

**Fix:** 
1. Check SMTP credentials in `.env.local`
2. For Gmail: Use App Password, not regular password
3. Check spam folder
4. Review terminal for error messages

### Issue: Form shows "Failed to submit"

**Fix:**
1. Check browser console (F12) for errors
2. Verify Supabase tables are created
3. Check API route: http://localhost:3000/api/leads

## 📱 Next Steps

### Add Your Content

1. **Upload Scooter Images:**
   - Go to Supabase → Storage
   - Create bucket `scooter-images`
   - Upload your images

2. **Add Scooter Models:**
   - Go to Supabase → Table Editor → scooters
   - Click "Insert Row"
   - Fill in model details

3. **Add Color Variants:**
   - Go to variants table
   - Link to scooter using `scooter_id`
   - Add image URLs

### Customize Design

- Edit colors in `tailwind.config.ts`
- Update logo at `public/images/logo.png`
- Modify content in page files

### Deploy to Production

See `README.md` for Vercel deployment instructions.

## 🆘 Still Having Issues?

1. Check all files are created:
   ```bash
   dir src\app\page.tsx
   dir src\components\Navigation.tsx
   dir tailwind.config.ts
   ```

2. Check Node version:
   ```bash
   node --version
   # Should be 18.x or higher
   ```

3. Clear cache and reinstall:
   ```bash
   Remove-Item -Recurse -Force .next, node_modules
   npm install
   npm run dev
   ```

## 📚 Documentation

- **Full Setup:** `README.md`
- **Environment Variables:** `ENV_SETUP.md`
- **Database Setup:** `SUPABASE_SETUP.md`
- **Project Roadmap:** See README.md → Roadmap section

---

**Need Help?** Contact: info@mliteev.com

**Happy Building! 🚀**
