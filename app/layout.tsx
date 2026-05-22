import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FreightSync TMS | Logistics Services & Transportation Management Software',
    template: '%s | FreightSync TMS'
  },
  description: 'FreightSync TMS provides logistics services and transportation management software for dispatch, fleet operations, load tracking, driver settlements, reporting, and growing logistics companies.',
  keywords: [
    'transportation management system',
    'logistics services',
    'fleet management',
    'dispatch software',
    'load tracking',
    'driver settlements',
    'freight operations',
    'Charlotte logistics company',
    'TMS portal',
  ],
  authors: [{ name: 'FreightSync TMS' }],
  metadataBase: new URL('https://www.freightsynctms.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-square.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.freightsynctms.com',
    siteName: 'FreightSync TMS',
    title: 'FreightSync TMS | Logistics Services & Transportation Management Software',
    description: 'Logistics services and TMS software for dispatch, fleet operations, load tracking, driver settlements, and reporting.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FreightSync TMS — Logistics Services + Transportation Management Software',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FreightSyncTMS',
    title: 'FreightSync TMS | Logistics Services & TMS Software',
    description: 'Logistics services and TMS software for dispatch, fleet operations, load tracking, and driver settlements.',
    images: ['/og-image.png'],
  },
  other: {
    'theme-color': '#0a1f44',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script dangerouslySetInnerHTML={{ __html: `
(function() {
  const CHATBOT_API_URL = 'https://freight-sync-tms-bot.replit.app';
  const widgetHTML = '<div id="freightsync-chatbot" style="position:fixed;bottom:20px;right:20px;z-index:9999;font-family:Inter,system-ui,sans-serif;"><button id="chat-toggle-btn" style="width:60px;height:60px;border-radius:50%;background:#0066FF;border:none;box-shadow:0 4px 12px rgba(0,102,255,0.3);cursor:pointer;display:flex;align-items:center;justify-content:center;color:white;font-size:24px;">&#128172;</button><div id="chat-window" style="position:absolute;bottom:80px;right:0;width:380px;height:600px;background:white;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.12);display:none;flex-direction:column;overflow:hidden;"><div style="background:#0066FF;color:white;padding:16px;display:flex;justify-content:space-between;align-items:center;"><div><div style="font-weight:600;font-size:16px;">FreightSync Support</div><div style="font-size:12px;opacity:0.9;">AI-powered assistance</div></div><button id="chat-close-btn" style="background:transparent;border:none;color:white;cursor:pointer;font-size:24px;">&#215;</button></div><div id="chat-messages" style="flex:1;overflow-y:auto;padding:16px;background:#f8f9fa;"></div><div style="padding:16px;border-top:1px solid #e5e7eb;background:white;display:flex;gap:8px;"><input id="chat-input" type="text" placeholder="Type your message..." style="flex:1;padding:10px 14px;border:1px solid #d1d5db;border-radius:8px;font-size:14px;outline:none;"/><button id="chat-send-btn" style="padding:10px 20px;background:#0066FF;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:500;">Send</button></div></div></div>';
  document.body.insertAdjacentHTML('beforeend', widgetHTML);
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const closeBtn = document.getElementById('chat-close-btn');
  const chatWindow = document.getElementById('chat-window');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');
  let conversationId = null, isOpen = false;
  function toggleChat() { isOpen = !isOpen; chatWindow.style.display = isOpen ? 'flex' : 'none'; if (isOpen && chatMessages.children.length === 0) addMessage('bot', 'Hello! How can I help you with your logistics needs today?'); }
  function addMessage(sender, text, suggestions) {
    const d = document.createElement('div'); d.style.cssText = 'margin-bottom:12px;display:flex;flex-direction:column;align-items:' + (sender==='user'?'flex-end':'flex-start');
    const b = document.createElement('div'); b.textContent = text; b.style.cssText = 'max-width:80%;padding:10px 14px;border-radius:12px;font-size:14px;line-height:1.4;' + (sender==='user'?'background:#0066FF;color:white;':'background:white;color:#1f2937;border:1px solid #e5e7eb;');
    d.appendChild(b);
    if (suggestions && suggestions.length) { const s = document.createElement('div'); s.style.cssText='display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;'; suggestions.forEach(function(t){ const btn=document.createElement('button'); btn.textContent=t; btn.style.cssText='padding:6px 12px;background:white;border:1px solid #d1d5db;border-radius:6px;font-size:12px;cursor:pointer;color:#374151;'; btn.onclick=function(){ chatInput.value=t; sendMessage(); }; s.appendChild(btn); }); d.appendChild(s); }
    chatMessages.appendChild(d); chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  async function sendMessage() {
    const msg = chatInput.value.trim(); if (!msg) return;
    addMessage('user', msg); chatInput.value = '';
    const t = document.createElement('div'); t.style.cssText='color:#6b7280;font-size:14px;font-style:italic;margin-bottom:12px;'; t.textContent='AI is typing...'; chatMessages.appendChild(t);
    try {
      const r = await fetch(CHATBOT_API_URL+'/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:msg,userToken:'anonymous',conversationId:conversationId})});
      const data = await r.json(); t.remove();
      if (r.ok) { if (data.conversationId) conversationId=data.conversationId; addMessage('bot',data.response,data.suggestions||[]); }
      else addMessage('bot','Sorry, I encountered an error. Please try again.');
    } catch(e) { t.remove(); addMessage('bot','Sorry, I encountered an error. Please try again.'); }
  }
  toggleBtn.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);
  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', function(e){ if(e.key==='Enter') sendMessage(); });
})();
` }} />
      </body>
    </html>
  )
}
