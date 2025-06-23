import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Volume2, VolumeX } from 'lucide-react';
import type { Recipe } from '../data/recipes';

interface MommaChatProps {
  isOpen: boolean;
  onToggle: () => void;
  recipes: Recipe[];
  onViewRecipe: (recipe: Recipe) => void;
}

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'momma';
  timestamp: Date;
}

const quickPrompts = [
  "What should I cook today?",
  "Give me a cooking tip",
  "I don't have an ingredient",
  "Help me with this step"
];

const mommaResponses: Record<string, string[]> = {
  "what should i cook today": [
    "Well honey, how about trying that Double-Decker Burger Sauce? It's a crowd-pleaser and easy as pie!",
    "Sugar, I'm thinking some 11-Spice Crispy Chicken would hit the spot today. What do you say?",
    "Darlin', why don't you give that Sweet Tangy Dipping Sauce a whirl? Perfect for snackin'!"
  ],
  "give me a cooking tip": [
    "Remember sugar, taste as you go! Your tongue is your best friend in the kitchen.",
    "Honey, always let your sauces rest for 10 minutes before serving - it lets all them flavors get acquainted!",
    "Pro tip from Momma: Room temperature ingredients mix better than cold ones straight from the fridge!"
  ],
  "i don't have": [
    "No worries, sugar! For buttermilk, just add 1 tbsp of vinegar to regular milk. Works like a charm!",
    "Out of an ingredient? Honey, cooking is all about improvising! Tell me what you're missing and I'll help you find a swap.",
    "Don't you fret, darlin'! Most ingredients have perfect substitutes. What are you looking to replace?"
  ],
  "help me": [
    "Of course, honey! Momma's here to help. What step are you stuck on?",
    "Sugar, don't worry - we've all been there! What's giving you trouble?",
    "That's what I'm here for, darlin'! Walk me through what's happening in your kitchen."
  ],
  "default": [
    "Well bless your heart! I'm here to help with all your cooking questions, sugar.",
    "Hmm darlin', try asking me about a recipe or a cooking tip! I'm full of kitchen wisdom.",
    "Honey, I'm your culinary confidante! Ask me about ingredients, recipes, or cooking techniques."
  ]
};

export function MommaChat({ isOpen, onToggle, recipes, onViewRecipe }: MommaChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hey there, sugar! I'm Momma Marinade, your culinary confidante. Ready to whip up something delicious?",
      sender: 'momma',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getMommaResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();
    
    // Check for recipe-related queries
    if (input.includes('recipe') || input.includes('cook')) {
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      return `How about trying the ${randomRecipe.title}? It's one of my favorites! Want me to show you the recipe?`;
    }
    
    // Match against predefined responses
    for (const [key, responses] of Object.entries(mommaResponses)) {
      if (input.includes(key) || (key === "i don't have" && (input.includes("don't have") || input.includes("missing")))) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    // Default response
    return mommaResponses.default[Math.floor(Math.random() * mommaResponses.default.length)];
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getMommaResponse(text);
      const mommaMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'momma',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, mommaMessage]);
      setIsTyping(false);

      // Play voice if enabled (mock for now)
      if (isVoiceEnabled) {
        // Mock voice playing - in real implementation would use ElevenLabs API
        console.log('Playing voice:', response);
      }
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickPrompt = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const playVoice = (text: string) => {
    // Mock implementation - would integrate with ElevenLabs API
    console.log('Playing voice:', text);
    // In real implementation:
    // const audio = await elevenlabsAPI.textToSpeech(text);
    // audio.play();
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 overflow-hidden"
      >
        <img 
          src="/src/assets/momma-cartoon.png" 
          alt="Chat with Momma Marinade"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to text if image fails to load
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden w-full h-full flex items-center justify-center">
          <span className="text-2xl font-bold">M</span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full animate-pulse"></div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-primary-100 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/src/assets/momma-cartoon.png" 
              alt="Momma Marinade"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full h-full bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Momma Marinade</h3>
            <p className="text-xs text-primary-100">Your Culinary Confidante</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            {isVoiceEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={onToggle}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-primary-600 text-white rounded-br-md'
                  : 'bg-amber-50/80 backdrop-blur-sm text-primary-900 rounded-bl-md border border-amber-200/50'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              {message.sender === 'momma' && isVoiceEnabled && (
                <button
                  onClick={() => playVoice(message.text)}
                  className="mt-2 p-1 hover:bg-amber-100 rounded-full transition-colors"
                >
                  <Volume2 className="w-3 h-3 text-primary-600" />
                </button>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-amber-50/80 backdrop-blur-sm text-primary-900 p-3 rounded-2xl rounded-bl-md border border-amber-200/50">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="p-4 border-t border-primary-100">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {quickPrompts.map(prompt => (
            <button
              key={prompt}
              onClick={() => handleQuickPrompt(prompt)}
              className="p-2 text-xs bg-primary-50/80 backdrop-blur-sm hover:bg-primary-100/80 text-primary-700 rounded-lg transition-colors text-left border border-primary-200/50"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
            placeholder="Ask Momma anything..."
            className="flex-1 p-3 border border-primary-200/50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm"
          />
          <button
            onClick={() => handleSendMessage(inputText)}
            disabled={!inputText.trim() || isTyping}
            className="p-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}