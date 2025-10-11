import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Support both Replit AI Integrations (for Replit) and regular OpenAI (for Vercel)
// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || 'https://api.openai.com/v1',
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY || process.env.OPENAI_API_KEY || 'dummy-key'
});

// FreightSync TMS knowledge base
const SYSTEM_PROMPT = `You are a helpful AI assistant for FreightSync TMS, a modern Transportation Management System built specifically for last-mile delivery operations.

## About FreightSync TMS

**Company Overview:**
- Modern TMS platform for last-mile delivery operations
- Located in Charlotte, NC with planned expansion to Houston, TX
- Built for 3PL providers, retail delivery, and last-mile carriers

**Key Features:**
1. **Route Optimization** - Multi-stop route planning with 50-200+ stops per route, time window constraints, real-time traffic integration
2. **Mobile Driver Apps** - iOS/Android apps with turn-by-turn navigation, digital proof of delivery (photos, signatures), offline mode
3. **Automated Billing** - Automated invoice generation, accessorial charge calculation, carrier settlement automation
4. **Live Tracking** - Real-time GPS tracking, ETA updates, customer notifications
5. **Dispatch Management** - Drag-and-drop route assignment, capacity planning, driver performance analytics

**Integrations:**
- ERP/WMS: SAP, Oracle, Manhattan
- E-commerce: Shopify, WooCommerce
- Telematics: Samsara, Geotab
- Carrier APIs and EDI

**Pricing Plans:**
- **Starter**: $199/month - Up to 500 deliveries/month, 5 drivers, core features
- **Professional**: $499/month - Up to 2,000 deliveries/month, 20 drivers, advanced analytics
- **Enterprise**: Custom pricing - Unlimited deliveries, unlimited drivers, dedicated support, custom integrations

**Implementation:**
- Typical timeline: 4 weeks (1-2 weeks setup, 1 week training, 1 week rollout)
- Full onboarding and training included
- 99.9% uptime SLA guarantee

**Contact:**
- Website: freightsynctms.com
- Demo requests available
- Based in Charlotte, NC

## Your Role:
- Answer questions about FreightSync TMS features, pricing, and capabilities
- Help users understand how the platform can solve their logistics challenges
- Provide accurate information based on the details above
- Be friendly, professional, and concise
- If asked about features not listed, suggest scheduling a demo to discuss custom solutions
- Always encourage users to request a demo for hands-on experience

Keep responses concise (2-3 sentences) unless the user asks for details.`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if API is properly configured
    const hasReplitAI = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
    const hasOpenAI = process.env.OPENAI_API_KEY;
    
    if (!hasReplitAI && !hasOpenAI) {
      return NextResponse.json({
        response: "I'm currently unavailable. Please contact us directly at freightsynctms.com for assistance.",
        suggestions: ['View pricing plans', 'Request a demo', 'Contact sales'],
        conversationId: `conv-${Date.now()}`
      });
    }

    // Call OpenAI API using Replit AI Integrations
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Fast and cost-effective
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message }
      ],
      max_completion_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'I apologize, but I encountered an issue. Please try again.';

    // Generate smart suggestions based on the conversation
    const suggestions = generateSuggestions(message);

    return NextResponse.json({
      response,
      suggestions,
      conversationId: `conv-${Date.now()}` // Simple conversation ID
    });

  } catch (error) {
    console.error('Chatbot error:', error);
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}

// Generate contextual suggestions
function generateSuggestions(message: string): string[] {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
    return ['What features are included?', 'Do you offer a free trial?', 'Request a demo'];
  }
  
  if (lowerMessage.includes('feature') || lowerMessage.includes('what can')) {
    return ['How does route optimization work?', 'Tell me about billing automation', 'What integrations do you support?'];
  }
  
  if (lowerMessage.includes('integration')) {
    return ['Do you integrate with Shopify?', 'What about ERP systems?', 'Can you connect to telematics?'];
  }
  
  if (lowerMessage.includes('demo') || lowerMessage.includes('try')) {
    return ['What happens during a demo?', 'How long is implementation?', 'Request a demo'];
  }

  // Default suggestions
  return ['View pricing plans', 'What features do you offer?', 'How does it work?'];
}
