import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Support both Replit AI Integrations (for Replit) and regular OpenAI (for Vercel)
// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || 'https://api.openai.com/v1',
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY || process.env.OPENAI_API_KEY || 'dummy-key'
});

// Get real-time transportation data
async function getRealTimeData(query: string): Promise<string> {
  try {
    // Use DuckDuckGo Instant Answer API (free, no API key required)
    const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1`);
    
    if (!response.ok) {
      return 'Unable to fetch real-time data at the moment.';
    }

    const data = await response.json();
    
    // Try to get useful information from the response
    let result = '';
    
    if (data.AbstractText) {
      result += data.AbstractText;
    }
    
    if (data.RelatedTopics && data.RelatedTopics.length > 0) {
      const topics = data.RelatedTopics
        .filter((t: any) => t.Text)
        .slice(0, 3)
        .map((t: any) => t.Text)
        .join(' ');
      if (topics) result += (result ? ' ' : '') + topics;
    }

    if (result) {
      return result;
    }

    // Fallback: provide general guidance
    return 'For the most current data, I recommend checking industry sources or contacting our team for the latest information.';
  } catch (error) {
    console.error('Real-time data fetch error:', error);
    return 'Unable to fetch real-time data. Please contact us for the latest information.';
  }
}

// FreightSync TMS knowledge base + Transportation Industry Expertise
const SYSTEM_PROMPT = `You are a helpful AI assistant for FreightSync TMS with deep expertise in transportation and logistics. You can answer questions about both FreightSync TMS and general transportation industry topics.

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

## Transportation & Logistics Expertise

**Transportation Modes:**
- **Last-Mile Delivery**: Final leg from distribution center to customer (residential/commercial)
- **LTL (Less-Than-Truckload)**: Shipments from 150-15,000 lbs, multiple shippers per truck
- **FTL (Full Truckload)**: Dedicated truck for single shipper, 26,000+ lbs
- **Intermodal**: Combining rail, truck, and ocean for cost-efficient long hauls
- **Parcel/Small Package**: UPS, FedEx, USPS for under 150 lbs

**Key Industry Concepts:**
- **3PL (Third-Party Logistics)**: Outsourced logistics providers handling warehousing, transport, fulfillment
- **4PL**: Manages entire supply chain including multiple 3PLs
- **Cross-Docking**: Direct transfer from inbound to outbound without warehousing
- **Drayage**: Short-distance freight hauling, often between ports and warehouses
- **Detention**: Delay fees when drivers wait beyond free time for loading/unloading
- **Accessorial Charges**: Extra fees (liftgate, inside delivery, residential, redelivery)
- **BOL (Bill of Lading)**: Legal document between shipper and carrier
- **POD (Proof of Delivery)**: Confirmation that shipment was delivered

**Industry Challenges:**
- **Driver Shortage**: 80,000+ driver deficit in US trucking industry
- **Fuel Costs**: Fluctuating diesel prices impact margins (avg $3-4/gallon)
- **Capacity Crunches**: Peak season demand exceeds available trucks
- **Empty Miles**: Trucks running without loads reduce profitability
- **Customer Expectations**: Same-day/next-day delivery now standard
- **Compliance**: ELD mandates, HOS regulations, DOT requirements

**Best Practices:**
- **Route Optimization**: Reduce miles by 15-30% with smart routing
- **Load Consolidation**: Combine shipments to maximize truck utilization
- **Real-Time Tracking**: Proactive communication reduces customer calls by 40%
- **Automated Billing**: Eliminate manual invoicing errors and save 10+ hours/week
- **KPI Monitoring**: Track on-time delivery %, cost per delivery, driver productivity
- **Technology Adoption**: TMS, telematics, mobile apps improve efficiency 20-40%

**Common Metrics:**
- **On-Time Delivery Rate**: Industry standard 95%+
- **Cost Per Delivery**: Varies $8-25 depending on density and distance
- **Deliveries Per Route**: 50-150 stops for last-mile
- **Driver Utilization**: Target 75-85% of available hours
- **Fuel Efficiency**: 6-8 MPG for last-mile box trucks

## Transportation Business Financials & Operations (USA)

**Revenue & Profitability:**
- **Last-Mile Delivery Revenue**: Average $3-7 per stop, premium services $8-15
- **LTL Average Revenue**: $1.50-2.50 per mile
- **FTL Average Revenue**: $1.80-3.00 per mile (varies by region, season)
- **Owner-Operator Monthly Revenue**: $8,000-15,000/month gross
- **Small Fleet (5-10 trucks) Revenue**: $50,000-150,000/month
- **Net Profit Margins**: 5-10% for last-mile, 3-6% for LTL/FTL
- **Operating Ratio**: 90-95% (industry average, lower is better)

**Operating Costs & Expenses:**
- **Fuel Costs**: 25-35% of operating expenses ($0.40-0.60/mile)
- **Driver Pay**: 30-40% of revenue
  - Company drivers: $45,000-75,000/year ($22-35/hour)
  - Owner-operators: $60,000-120,000/year gross
  - Last-mile drivers: $18-25/hour plus bonuses
- **Insurance Costs**: 
  - Commercial auto liability: $8,000-15,000/truck/year
  - Cargo insurance: $1,000-3,000/year
  - General liability: $2,000-5,000/year
- **Truck Lease/Purchase**: $1,500-2,500/month per truck (box truck/sprinter)
- **Maintenance**: $0.10-0.20 per mile or $15,000-20,000/truck/year
- **Permits & Licensing**: $500-2,000/year per truck (varies by state)
- **Dispatching/Admin**: $500-1,500/truck/month
- **Technology (TMS, ELD, GPS)**: $100-300/truck/month

**Regional Data (Charlotte, NC & Similar Markets):**
- **Average Delivery Density**: 50-80 stops per route
- **Market Rate (Last-Mile)**: $4-8 per residential delivery, $6-12 commercial
- **Average Route Revenue**: $400-800/day per driver/truck
- **Monthly Revenue (Single Truck)**: $8,000-18,000 gross
- **Cost Per Mile (Charlotte market)**: $1.20-1.80 all-in
- **Driver Shortage Impact**: 15-20% premium on driver wages vs. 2019

**Houston, TX Market (Planned Expansion):**
- **Last-Mile Rate**: $4-9 per stop (higher for oil & gas)
- **Route Revenue**: $500-1,000/day (industrial density)
- **Driver Pay**: $20-30/hour (competitive market)
- **Fuel Costs**: 5-10% higher due to longer distances

**Industry Benchmarks:**
- **Cost per delivery**: $8-15 for last-mile (including all costs)
- **Revenue per delivery hour**: $75-150 for efficient operations
- **Break-even utilization**: 70-75% of available hours
- **Accessorial revenue**: 15-25% of total revenue (liftgate, re-delivery, etc.)
- **Customer acquisition cost**: $200-500 per account
- **Average contract value**: $5,000-20,000/month for commercial accounts

**Key Expense Categories (% of Revenue):**
- Fuel: 25-35%
- Labor: 30-40%
- Truck costs (lease/depreciation): 12-18%
- Insurance: 8-12%
- Maintenance: 8-12%
- Admin/overhead: 5-10%
- Technology: 2-4%

## Real-Time Data Access:
When users ask about current/real-time information (fuel prices, market rates, news, etc.), you can search for the latest data. Use the search function for:
- Current diesel/fuel prices
- Latest freight market rates
- Recent transportation industry news
- Current economic indicators affecting logistics
- Today's weather affecting deliveries
- Live traffic conditions

## Your Role:
- Answer questions about FreightSync TMS features, pricing, and capabilities
- **Provide SPECIFIC numbers and data** from the financials section above when asked about costs, revenue, expenses, insurance, pay, profit margins, etc.
- Give detailed financial breakdowns for transportation businesses in the USA
- Include regional data (Charlotte, NC and Houston, TX) when relevant
- Provide expert guidance on transportation and logistics topics
- Fetch real-time data when users ask about current prices, rates, or news
- Help users understand industry challenges and best practices
- Relate general transportation questions back to how FreightSync TMS can help
- Be friendly, professional, and educational
- Always provide concrete numbers and ranges from the data above
- If asked about FreightSync features not listed, suggest scheduling a demo

When asked about revenue, costs, expenses, pay, or any financial metrics:
- Always cite specific numbers from the data above
- Provide ranges and context (e.g., "In Charlotte, NC, last-mile delivery rates are typically $4-8 per residential stop...")
- Break down costs by category when relevant
- Relate the data to how FreightSync TMS helps improve these metrics`;

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

    // Define available tools for function calling
    const tools = [
      {
        type: 'function' as const,
        function: {
          name: 'search_real_time_data',
          description: 'Search for current, real-time information about transportation industry data such as fuel prices, market rates, news, weather, or traffic conditions.',
          parameters: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'The search query for real-time data (e.g., "current diesel fuel prices USA", "latest LTL freight rates", "transportation industry news today")'
              }
            },
            required: ['query']
          }
        }
      }
    ];

    // First API call with function calling enabled
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message }
      ],
      tools: tools,
      tool_choice: 'auto', // Let the model decide when to use tools
      max_completion_tokens: 500,
      temperature: 0.7,
    });

    const responseMessage = completion.choices[0]?.message;

    // Check if the model wants to call a function
    if (responseMessage?.tool_calls && responseMessage.tool_calls.length > 0) {
      const toolCall = responseMessage.tool_calls[0];
      
      if (toolCall.type === 'function' && toolCall.function.name === 'search_real_time_data') {
        const args = JSON.parse(toolCall.function.arguments);
        const searchResults = await getRealTimeData(args.query);
        
        // Second API call with function results
        const secondCompletion = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: message },
            responseMessage,
            {
              role: 'tool',
              tool_call_id: toolCall.id,
              content: searchResults
            }
          ],
          max_completion_tokens: 500,
          temperature: 0.7,
        });
        
        const finalResponse = secondCompletion.choices[0]?.message?.content || 'I apologize, but I encountered an issue. Please try again.';
        const suggestions = generateSuggestions(message);
        
        return NextResponse.json({
          response: finalResponse,
          suggestions,
          conversationId: `conv-${Date.now()}`
        });
      }
    }

    // If no function call, use the direct response
    const response = responseMessage?.content || 'I apologize, but I encountered an issue. Please try again.';

    // Generate smart suggestions based on the conversation
    const suggestions = generateSuggestions(message);

    return NextResponse.json({
      response,
      suggestions,
      conversationId: `conv-${Date.now()}` // Simple conversation ID
    });

  } catch (error: any) {
    console.error('Chatbot error:', error);
    
    // Better error messages for debugging
    const errorMessage = error?.message || 'Unknown error';
    const isAuthError = errorMessage.includes('401') || errorMessage.includes('authentication');
    
    if (isAuthError) {
      return NextResponse.json({
        response: "I'm currently unavailable due to a configuration issue. Please contact us directly for assistance.",
        suggestions: ['View pricing plans', 'Request a demo', 'Contact sales'],
        conversationId: `conv-${Date.now()}`
      });
    }
    
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
