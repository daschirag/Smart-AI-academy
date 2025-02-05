import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Send, ArrowLeft } from 'lucide-react';

export default function ChatMentor() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your AI mentor. How can I help you with your studies today?"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChat(prev => [...prev, { role: 'user', content: message }]);
    
    // TODO: Integrate with backend AI service
    // [Backend Integration Point]: Connect to AI service for mentoring responses
    // The backend should:
    // 1. Process the student's question
    // 2. Generate personalized guidance and support
    // 3. Return structured mentoring advice
    setTimeout(() => {
      setChat(prev => [...prev, {
        role: 'assistant',
        content: "I understand your concern. Here's my guidance... [Backend AI integration required]"
      }]);
    }, 1000);

    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-white hover:text-blue-400 flex items-center"
          >
            <ArrowLeft className="h-6 w-6 mr-2" />
            Back to Dashboard
          </button>
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">AI Chat Mentor</h1>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl h-[calc(100vh-12rem)]">
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      msg.role === 'assistant'
                        ? 'bg-blue-600/20 text-white'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-blue-500/30">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask your mentor anything..."
                  className="flex-1 bg-white/5 border border-blue-500/30 rounded-lg px-4 py-2 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}