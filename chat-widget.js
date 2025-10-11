class ChatWidget {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.isOpen = false;
    this.init();
  }

  init() {
    this.createWidget();
    this.attachEventListeners();
  }

  createWidget() {
    const widgetHTML = `
      <div id="chat-widget" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div id="chat-toggle" style="width: 60px; height: 60px; background: #007bff; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: white; box-shadow: 0 4px 12px rgba(0,123,255,0.3); transition: all 0.3s ease;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <div id="chat-container" style="position: absolute; bottom: 80px; right: 0; width: 350px; height: 500px; background: white; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); display: none; flex-direction: column; overflow: hidden;">
          <div style="background: #007bff; color: white; padding: 16px; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0; font-size: 16px; font-weight: 600;">FreightSync Support</h3>
            <button id="chat-close" style="background: none; border: none; color: white; font-size: 24px; cursor: pointer; padding: 0; width: 24px; height: 24px;">&times;</button>
          </div>
          <div id="chat-messages" style="flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px;"></div>
          <div style="padding: 16px; border-top: 1px solid #e9ecef; display: flex; gap: 8px;">
            <input type="text" id="chat-input" placeholder="Type your message..." style="flex: 1; padding: 12px; border: 1px solid #dee2e6; border-radius: 20px; outline: none; font-size: 14px;">
            <button id="chat-send" style="background: #007bff; color: white; border: none; padding: 12px 20px; border-radius: 20px; cursor: pointer; font-size: 14px; font-weight: 500;">Send</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', widgetHTML);
  }

  attachEventListeners() {
    document.getElementById('chat-toggle').addEventListener('click', () => this.toggleChat());
    document.getElementById('chat-close').addEventListener('click', () => this.closeChat());
    document.getElementById('chat-send').addEventListener('click', () => this.sendMessage());
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    const container = document.getElementById('chat-container');
    container.style.display = this.isOpen ? 'flex' : 'none';
  }

  closeChat() {
    this.isOpen = false;
    document.getElementById('chat-container').style.display = 'none';
  }

  async sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    this.addMessage(message, 'user');
    input.value = '';

    try {
      const response = await fetch(`${this.apiUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: message, 
          user_token: 'demo_user' 
        })
      });
      
      const data = await response.json();
      this.addMessage(data.response || data.message || 'Sorry, I encountered an error.', 'bot');
    } catch (error) {
      console.error('Chat error:', error);
      this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
    }
  }

  addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.style.cssText = `
      max-width: 80%; 
      padding: 12px 16px; 
      border-radius: 18px; 
      word-wrap: break-word;
      ${sender === 'user' 
        ? 'background: #007bff; color: white; align-self: flex-end; border-bottom-right-radius: 4px;' 
        : 'background: #f1f3f5; color: #333; align-self: flex-start; border-bottom-left-radius: 4px;'
      }
    `;
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  new ChatWidget('https://freight-sync-tms-bot.replit.app');
});
