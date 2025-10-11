# 🔧 Vercel Chatbot Troubleshooting

## Issue: Chatbot shows "Sorry, I encountered an error"

This means the `OPENAI_API_KEY` environment variable is either:
1. ❌ Not set on Vercel
2. ❌ Set but invalid
3. ❌ Set but has no credits

## ✅ Solution: Add OpenAI API Key to Vercel

### Step 1: Get Your OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click **"Create new secret key"**
4. **IMPORTANT**: Copy the key immediately (starts with `sk-`)
5. You won't be able to see it again!

### Step 2: Add Key to Vercel
1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your **freightsync-tms-website** project
3. Go to **Settings** (top nav)
4. Click **Environment Variables** (left sidebar)
5. Click **Add New**
6. Fill in:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Paste your OpenAI key (sk-...)
   - **Environment**: Select all (Production, Preview, Development)
7. Click **Save**

### Step 3: Redeploy
After adding the environment variable, you MUST redeploy:

**Option A: Trigger Redeploy from Vercel**
1. Go to **Deployments** tab
2. Click the **⋯** menu on the latest deployment
3. Click **Redeploy**

**Option B: Push to Git**
```bash
git add .
git commit -m "Update chatbot config"
git push origin main
```

Vercel will automatically redeploy with the new environment variable.

### Step 4: Verify It Works
1. Wait 2-3 minutes for deployment to complete
2. Visit your live site (freightsynctms.com)
3. Click the 💬 chatbot icon
4. Send a test message: "What is FreightSync TMS?"
5. ✅ Should get a proper AI response!

## 💰 OpenAI Billing

**Make sure your OpenAI account has credits:**
1. Go to https://platform.openai.com/settings/organization/billing
2. Add a payment method
3. Add at least $5 in credits
4. Cost: ~$0.002 per conversation (~$4/month for typical usage)

## 🐛 Still Not Working?

### Check Vercel Logs
1. Go to your project in Vercel
2. Click **Deployments**
3. Click on the latest deployment
4. Click **Functions** tab
5. Look for `/api/chatbot` errors

### Check Browser Console
1. Open your website
2. Right-click → **Inspect** → **Console** tab
3. Click the chatbot and send a message
4. Look for error messages in red

### Common Errors

**"401 Unauthorized"**
- Your API key is invalid
- Generate a new key from OpenAI

**"429 Too Many Requests"**
- You've exceeded OpenAI rate limits
- Wait a few minutes or upgrade your OpenAI plan

**"Insufficient credits"**
- Add billing/credits to your OpenAI account

## 📞 Need Help?

If you're still having issues:
1. Check Vercel deployment logs (Deployments → latest → Functions)
2. Verify the environment variable is set correctly
3. Make sure you redeployed after adding the variable
4. Confirm your OpenAI key is valid and has credits
