'use client'

import { useEffect } from 'react'

export function ChatbotWidget() {
  useEffect(() => {
    // ⚙️ CONFIGURATION - Chatbot API URL (without /api/chat - will be added in fetch)
    const CHATBOT_API_URL = 'https://freight-sync-tms-bot.replit.app';
    
    // Create widget container
    const widgetHTML = `
      <div id="freightsync-chatbot" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: Inter, system-ui, -apple-system, sans-serif;">
        <!-- Chat Widget Button -->
        <button id="chat-toggle-btn" style="
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #0066FF;
          border: none;
          box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
        ">
          💬
        </button>

        <!-- Chat Window -->
        <div id="chat-window" style="
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 380px;
          height: 600px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          display: none;
          flex-direction: column;
          overflow: hidden;
        ">
          <!-- Header -->
          <div style="
            background: #0066FF;
            color: white;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          ">
            <div>
              <div style="font-weight: 600; font-size: 16px;">FreightSync Support</div>
              <div style="font-size: 12px; opacity: 0.9;">AI-powered assistance</div>
            </div>
            <button id="chat-close-btn" style="
              background: transparent;
              border: none;
              color: white;
              cursor: pointer;
              font-size: 24px;
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
            ">×</button>
          </div>

          <!-- Messages -->
          <div id="chat-messages" style="
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            background: #f8f9fa;
          "></div>

          <!-- Input -->
          <div style="
            padding: 16px;
            border-top: 1px solid #e5e7eb;
            background: white;
            display: flex;
            gap: 8px;
          ">
            <input 
              id="chat-input" 
              type="text" 
              placeholder="Type your message..."
              style="
                flex: 1;
                padding: 10px 14px;
                border: 1px solid #d1d5db;
                border-radius: 8px;
                font-size: 14px;
                outline: none;
              "
            />
            <button id="chat-send-btn" style="
              padding: 10px 20px;
              background: #0066FF;
              color: white;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              font-weight: 500;
            ">Send</button>
          </div>
        </div>
      </div>
    `;

    // Insert widget into page
    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    // Get elements
    const toggleBtn = document.getElementById('chat-toggle-btn');
    const closeBtn = document.getElementById('chat-close-btn');
    const chatWindow = document.getElementById('chat-window');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input') as HTMLInputElement;
    const sendBtn = document.getElementById('chat-send-btn');

    // State
    let conversationId: string | null = null;
    let isOpen = false;

    // Toggle chat window
    function toggleChat() {
      isOpen = !isOpen;
      if (chatWindow) {
        chatWindow.style.display = isOpen ? 'flex' : 'none';
      }
      if (isOpen && chatMessages && chatMessages.children.length === 0) {
        addMessage('bot', 'Hello! How can I help you with your logistics needs today?');
      }
    }

    if (toggleBtn) toggleBtn.addEventListener('click', toggleChat);
    if (closeBtn) closeBtn.addEventListener('click', toggleChat);

    // Add message to chat
    function addMessage(sender: string, text: string, suggestions: string[] = []) {
      if (!chatMessages) return;

      const messageDiv = document.createElement('div');
      messageDiv.style.cssText = `
        margin-bottom: 12px;
        display: flex;
        flex-direction: column;
        align-items: ${sender === 'user' ? 'flex-end' : 'flex-start'};
      `;

      const bubble = document.createElement('div');
      bubble.textContent = text;
      bubble.style.cssText = `
        max-width: 80%;
        padding: 10px 14px;
        border-radius: 12px;
        font-size: 14px;
        line-height: 1.4;
        ${sender === 'user' 
          ? 'background: #0066FF; color: white;' 
          : 'background: white; color: #1f2937; border: 1px solid #e5e7eb;'
        }
      `;
      
      messageDiv.appendChild(bubble);

      // Add suggestions
      if (suggestions && suggestions.length > 0) {
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.style.cssText = 'display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap;';
        
        suggestions.forEach(suggestion => {
          const btn = document.createElement('button');
          btn.textContent = suggestion;
          btn.style.cssText = `
            padding: 6px 12px;
            background: white;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 12px;
            cursor: pointer;
            color: #374151;
          `;
          btn.addEventListener('click', () => {
            if (chatInput) {
              chatInput.value = suggestion;
              sendMessage();
            }
          });
          suggestionsDiv.appendChild(btn);
        });
        
        messageDiv.appendChild(suggestionsDiv);
      }

      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Send message
    async function sendMessage() {
      if (!chatInput || !chatMessages) return;

      const message = chatInput.value.trim();
      if (!message) return;

      // Add user message
      addMessage('user', message);
      chatInput.value = '';

      // Show typing indicator
      const typingDiv = document.createElement('div');
      typingDiv.id = 'typing-indicator';
      typingDiv.style.cssText = 'color: #6b7280; font-size: 14px; font-style: italic; margin-bottom: 12px;';
      typingDiv.textContent = 'AI is typing...';
      chatMessages.appendChild(typingDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      try {
        // Call chatbot API
        const response = await fetch(`${CHATBOT_API_URL}/api/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: message,
            userToken: null,
            conversationId: conversationId
          })
        });

        const data = await response.json();
        
        // Remove typing indicator
        typingDiv.remove();

        if (response.ok) {
          // Save conversation ID
          if (data.conversationId) {
            conversationId = data.conversationId;
          }

          // Add bot response
          addMessage('bot', data.response, data.suggestions || []);
        } else {
          addMessage('bot', 'Sorry, I encountered an error. Please try again.');
        }
      } catch (error) {
        console.error('Chat error:', error);
        typingDiv.remove();
        addMessage('bot', 'Sorry, I encountered an error. Please try again.');
      }
    }

    // Event listeners
    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
    if (chatInput) {
      chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
      });
    }

    // Cleanup
    return () => {
      const widget = document.getElementById('freightsync-chatbot');
      if (widget) widget.remove();
    };
  }, []);

  return null;
}
