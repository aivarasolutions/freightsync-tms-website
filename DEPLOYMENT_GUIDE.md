# FreightSync TMS - Deployment Guide

## ✅ What's Ready

Your FreightSync TMS website is **production-ready** with:
- ✨ AI-powered chatbot for customer support
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Clean, modern UI inspired by Sylectus
- 📄 17 pages including features, pricing, blog, and case studies
- 🔍 SEO optimized with metadata and sitemap

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Push Code to Git
```bash
git add .
git commit -m "Add AI chatbot feature"
git push origin main
```

### Step 2: Configure Vercel
1. Go to [vercel.com](https://vercel.com/dashboard)
2. Import your Git repository
3. **Framework Preset**: Next.js (auto-detected)
4. **Build Command**: `npm run build`
5. **Output Directory**: Leave blank (uses default `.next`)

### Step 3: Add Environment Variables
In Vercel **Settings → Environment Variables**, add:

| Variable | Value |
|----------|-------|
| `OPENAI_API_KEY` | Your OpenAI API key (starts with `sk-`) |

**Where to get OpenAI API key:**
- Visit https://platform.openai.com/api-keys
- Create new secret key
- Copy the key

### Step 4: Deploy
Click **Deploy** and wait 2-3 minutes. Your site will be live!

## 💰 Cost Estimate

**Vercel Hosting**: Free tier or $20/month for Pro
**OpenAI API (Chatbot)**: ~$0.002 per conversation
- 1,000 visitors × 2 chats = $4/month

**Total**: ~$4-24/month depending on plan

## 🧪 Testing Checklist

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Chatbot appears (💬 icon in bottom-right)
- [ ] Chatbot responds to questions
- [ ] Contact form submits
- [ ] Mobile view works properly

## 📝 Updating Content

### Update Chatbot Knowledge
Edit `app/api/chatbot/route.ts` → `SYSTEM_PROMPT` section

### Update Website Content
- Features: `data/features.json`
- Stats: `data/stats.json`  
- Testimonials: `data/testimonials.json`
- Integrations: `data/integrations.json`

## 🔧 Troubleshooting

**Chatbot not responding?**
1. Verify `OPENAI_API_KEY` is set in Vercel
2. Check Vercel deployment logs for errors
3. Ensure API key is valid and has credits

**404 errors on Vercel?**
1. Clear Vercel build cache
2. Verify Framework Preset is "Next.js"
3. Redeploy

## 📊 Analytics (Optional)

To add Google Analytics:
1. Get GA4 tracking ID
2. Add to Vercel env: `NEXT_PUBLIC_GA_ID`
3. Code already includes analytics helpers in `lib/analytics.ts`

## 🎉 You're Done!

Your modern TMS website is live with AI support. Visitors can now:
- Learn about your platform
- Get instant AI-powered answers
- Request demos through the contact form
- Read case studies and blog posts

**Next Steps:**
- Monitor chatbot conversations
- Optimize based on user feedback
- Add more blog content for SEO
