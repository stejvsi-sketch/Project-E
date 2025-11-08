# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Email Configuration (SMTP)
# Option 1: Gmail (recommended for testing)
# 1. Enable 2-Step Verification in your Google Account
# 2. Generate an App Password: https://myaccount.google.com/apppasswords
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com

# Option 2: SendGrid (recommended for production)
# SMTP_HOST=smtp.sendgrid.net
# SMTP_PORT=587
# SMTP_SECURE=false
# SMTP_USER=apikey
# SMTP_PASS=your-sendgrid-api-key
# SMTP_FROM=noreply@mliteev.com

# Option 3: AWS SES
# SMTP_HOST=email-smtp.us-east-1.amazonaws.com
# SMTP_PORT=587
# SMTP_SECURE=false
# SMTP_USER=your-ses-smtp-username
# SMTP_PASS=your-ses-smtp-password
# SMTP_FROM=noreply@mliteev.com

# Owner Contact Information
OWNER_EMAIL=info@mliteev.com
WHATSAPP_NUMBER=919876543210

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Getting Credentials

### 1. Supabase

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy `Project URL` and `anon public` key

### 2. Email (Gmail Example)

1. Go to https://myaccount.google.com
2. Navigate to Security > 2-Step Verification (enable if not already)
3. Go to Security > App passwords
4. Select "Mail" and "Other (Custom name)"
5. Generate password and copy it to `SMTP_PASS`

### 3. Email (SendGrid - Production)

1. Sign up at https://sendgrid.com
2. Create an API key under Settings > API Keys
3. Verify your sender identity
4. Use the API key as `SMTP_PASS`

### 4. WhatsApp Number Format

- Remove all spaces, dashes, and special characters
- Include country code (e.g., 91 for India)
- Example: 919876543210 (not +91 98765 43210)

## Security Notes

⚠️ **IMPORTANT**:
- Never commit `.env.local` to Git
- The `.gitignore` file already excludes it
- Use different credentials for development and production
- Rotate API keys periodically
- Use SendGrid or AWS SES for production (not Gmail)

## Testing Email Configuration

Run this command to test your email setup:

```bash
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password',
  },
});
transporter.verify((error, success) => {
  if (error) console.error('Error:', error);
  else console.log('Email configuration is working!');
});
"
```

## Vercel Deployment

When deploying to Vercel:

1. Go to your project settings
2. Navigate to Environment Variables
3. Add all variables from `.env.local`
4. Make sure to add them for Production, Preview, and Development environments as needed

## Next Steps

After setting up environment variables:

1. Run `npm run dev` to start the development server
2. Test the lead submission form on `/contact`
3. Check that emails are being sent successfully
4. Verify Supabase connection is working
