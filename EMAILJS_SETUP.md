# EmailJS Setup Guide

Your contact form is now configured to send emails using EmailJS! Follow these steps to complete the setup:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. **Copy the Service ID** - you'll need this

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Body:**
```
Hello Owen,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** - you'll need this

## 4. Get Public Key

1. Go to **Account** in your dashboard
2. Find your **Public Key** in the API Keys section
3. **Copy the Public Key** - you'll need this

## 5. Set Environment Variables

Create a `.env` file in your project root with:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here  
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:** Add `.env` to your `.gitignore` file to keep your keys secure!

## 6. For GitHub Pages Deployment

Since GitHub Pages doesn't support server-side environment variables, you'll need to:

1. **Option A (Less Secure):** Replace the environment variables directly in the code
2. **Option B (Recommended):** Use GitHub Secrets and update your workflow to inject them during build

### Option B Setup:

1. In your GitHub repository, go to **Settings > Secrets and variables > Actions**
2. Add these secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID` 
   - `VITE_EMAILJS_PUBLIC_KEY`

3. Update your `.github/workflows/deploy.yml` to include the environment variables:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
    VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
    VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
```

## 7. Test Your Form

1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Check your email for the message!

## Troubleshooting

- **"EmailJS not configured" error:** Make sure your environment variables are set correctly
- **Form not sending:** Check the browser console for error messages
- **Not receiving emails:** Check your spam folder and verify your EmailJS service is active
- **Template variables not working:** Make sure your template uses the exact variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`

Your contact form is now ready to receive messages! 🎉
