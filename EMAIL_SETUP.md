# Email Setup Instructions

## Option 1: Resend (Recommended - Easy Setup)

### Environment Variables Required

Create a `.env.local` file in your project root with the following variables:

```env
RESEND_API_KEY=your_resend_api_key
EMAIL_USER=your-email@gmail.com
```

### Resend Setup Steps

1. **Sign up for Resend**: Go to [resend.com](https://resend.com) and create an account
2. **Get API Key**:
   - Go to your Resend dashboard
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key and add it to your `.env.local` file
3. **Verify Domain** (Optional but recommended):
   - Add your domain in Resend dashboard
   - Update the `from` field in the API route to use your domain

### Benefits of Resend

- ✅ Easy setup with just an API key
- ✅ No SMTP configuration needed
- ✅ Reliable delivery
- ✅ Built for modern applications
- ✅ Free tier available

## Option 2: Gmail SMTP (Alternative)

If you prefer to use Gmail directly:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Gmail Setup Steps

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password as `EMAIL_PASS`

## Testing

After setting up the environment variables:

1. Restart your development server
2. Test the contact form
3. Check your email for the message

## Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of your main email password
- Consider using a dedicated email address for your portfolio
- Resend API keys should be kept secure
