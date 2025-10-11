'use client';

import { useEffect } from 'react';

export function ChatWidget() {
  useEffect(() => {
    const CHATBOT_API_URL = 'https://freight-sync-tms-bot.replit.app';
    
    const widgetHTML = `
      <div id="freightsync-chatbot" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: Inter, system-ui, -apple-system, sans-serif;">
        <button id="chat-toggle-btn" style="width: 60px; height: 60px; border-radius: 50%; background: #0066FF; border: none; box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3); cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">
          💬
        </button>
        <div id="chat-window" style="position: absolute; bottom: 80px; right: 0; width: 380px; height: 600px; background: white; border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12); display: none; flex-direction: column; overflow: hidden;">
          <div style="background: #0066FF; color: white; padding: 16px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-weight: 600; font-size: 16px;">FreightSync Support</div>
              <div style="font-size: 12px; opacity: 0.9;">AI-powered assistance</div>
            </div>
            <button id="chat-close-btn" style="background: transparent; border: none; color: white; cursor: pointer; font-size: 24px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">×</button>
          </div>
          <div id="chat-messages" style="flex: 1; overflow-y: auto; padding: 16px; background: #f8f9fa;"></div>
          <div style="padding: 16px; border-top: 1px solid #e5e7eb; background: white; display: flex; gap: 8px;">
            <input id="chat-input" type="text" placeholder="Type your message..." style="flex: 1; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none;" />
            <button id="chat-send-btn" style="padding: 10px 20px; background: #0066FF; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">Send</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    const toggleBtn = document.getElementById('chat-toggle-btn');
    const closeBtn = document.getElementById('chat-close-btn');
    const chatWindow = document.getElementById('chat-window');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input') as HTMLInputElement;
    const sendBtn = document.getElementById('chat-send-btn');

    let conversationId: string | null = null;
    let isOpen = false;

    function toggleChat() {
      isOpen = !isOpen;
      if (chatWindow) chatWindow.style.display = isOpen ? 'flex' : 'none';
      if (isOpen && chatMessages && chatMessages.children.length === 0) {
        addMessage('bot', 'Hello! How can I help you with your logistics needs today?', ['Track shipment', 'Get rate quote', 'View documents']);
      }
    }

    toggleBtn?.addEventListener('click', toggleChat);
    closeBtn?.addEventListener('click', toggleChat);

    function addMessage(sender: string, text: string, suggestions: string[] = []) {
      if (!chatMessages) return;
      
      const messageDiv = document.createElement('div');
      messageDiv.style.cssText = `margin-bottom: 12px; display: flex; flex-direction: column; align-items: ${sender === 'user' ? 'flex-end' : 'flex-start'};`;

      const bubble = document.createElement('div');
      bubble.textContent = text;
      bubble.style.cssText = `max-width: 80%; padding: 10px 14px; border-radius: 12px; font-size: 14px; line-height: 1.4; ${sender === 'user' ? 'background: #0066FF; color: white;' : 'background: white; color: #1f2937; border: 1px solid #e5e7eb;'}`;
      
      messageDiv.appendChild(bubble);

      if (suggestions && suggestions.length > 0) {
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.style.cssText = 'display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap;';
        
        suggestions.forEach(suggestion => {
          const btn = document.createElement('button');
          btn.textContent = suggestion;
          btn.style.cssText = 'padding: 6px 12px; background: white; border: 1px solid #d1d5db; border-radius: 6px; font-size: 12px; cursor: pointer; color: #374151;';
          btn.addEventListener('click', () => {
            if (chatInput) chatInput.value = suggestion;
            sendMessage();
          });
          suggestionsDiv.appendChild(btn);
        });
        
        messageDiv.appendChild(suggestionsDiv);
      }

      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function sendMessage() {
      const message = chatInput?.value.trim();
      if (!message) return;

      addMessage('user', message);
      if (chatInput) chatInput.value = '';

      const typingDiv = document.createElement('div');
      typingDiv.id = 'typing-indicator';
      typingDiv.style.cssText = 'color: #6b7280; font-size: 14px; font-style: italic; margin-bottom: 12px;';
      typingDiv.textContent = 'AI is typing...';
      chatMessages?.appendChild(typingDiv);
      if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;

      try {
        const response = await fetch(`${CHATBOT_API_URL}/api/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: message,
            userToken: 'anonymous',
            conversationId: conversationId
          })
        });

        const data = await response.json();
        typingDiv.remove();

        if (response.ok) {
          if (data.conversationId) {
            conversationId = data.conversationId;
          }
          addMessage('bot', data.response, data.suggestions || []);
        } else {
          addMessage('bot', 'Sorry, I encountered an error. Please try again.');
        }
      } catch (error) {
        console.error('Chat error:', error);
        typingDiv.remove();
        addMessage('bot', 'Unable to connect to chatbot. Please check your connection.');
      }
    }

    sendBtn?.addEventListener('click', sendMessage);
    chatInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    return () => {
      document.getElementById('freightsync-chatbot')?.remove();
    };
  }, []);

  return null;
}
