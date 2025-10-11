# AI Chatbot Setup Guide

## Overview
Your FreightSync TMS website now includes an AI-powered chatbot that provides instant support to visitors! The chatbot:

- **Answers questions** about FreightSync TMS features, pricing, and integrations
- **Provides transportation & logistics expertise** (LTL vs FTL, 3PL, industry best practices)
- **Educates visitors** on industry challenges and solutions
- **Offers guidance on current trends** and where to find real-time data
- **Provides smart suggestions** for follow-up questions
- **Works on all pages** with a 💬 icon in the bottom-right corner
- **Uses GPT-4o-mini** for fast, accurate responses
- **Professional formatting** - Clean display without markdown symbols (**, ##, etc.)

## How It Works

### On Replit (Development)
✅ **Already working!** Uses Replit's AI Integrations - no setup needed.

### On Vercel (Production)
To make the chatbot work on your live website (freightsynctms.com):

1. **Add OpenAI API Key to Vercel:**
   - Go to your Vercel project dashboard
   - Navigate to **Settings** → **Environment Variables**
   - Add a new variable:
     - **Name**: `OPENAI_API_KEY`
     - **Value**: Your OpenAI API key (starts with `sk-`)
   
2. **Get your OpenAI API Key:**
   - Visit https://platform.openai.com/api-keys
   - Sign up or log in
   - Click "Create new secret key"
   - Copy the key

3. **Redeploy:**
   - Push your code to Git
   - Vercel will automatically redeploy with the new environment variable

## Cost Estimate
- **GPT-4o-mini** costs approximately **$0.002 per conversation**
- With 1000 monthly visitors having 2 chats each = ~$4/month
- Very affordable for powerful AI support!

## Testing
Click the 💬 icon on your website and try:

**FreightSync Questions:**
- "What is FreightSync TMS?"
- "How much does the Professional plan cost?"
- "What integrations do you support?"

**Industry Knowledge:**
- "What's the difference between LTL and FTL?"
- "What are the biggest challenges in last-mile delivery?"
- "What is a 3PL?"

**Financial Data (NEW!):**
- "What is average revenue per month in Charlotte, NC?"
- "How much do delivery drivers get paid?"
- "What are typical profit margins for last-mile delivery?"
- "How much does insurance cost for a delivery truck?"
- "What are operating expenses for a delivery business?"

## Real-Time Data
The chatbot provides intelligent guidance on current trends and directs users to authoritative sources for live data. See `REALTIME_DATA_OPTIONS.md` for information about adding live API integrations.

## Customization
To update chatbot knowledge, edit: `app/api/chatbot/route.ts` (SYSTEM_PROMPT section)
