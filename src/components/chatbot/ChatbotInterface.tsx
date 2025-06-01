
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Define message type
interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

// Sample responses based on education-related topics
const getBotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('college') || lowerMessage.includes('university')) {
    return "Choosing the right college is an important decision. Consider factors like location, program offerings, cost, and campus culture. Is there a specific field of study you're interested in?";
  } else if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
    return "Your career path should align with your interests, skills, and values. Have you considered taking a career assessment test? These can help identify fields where you might excel.";
  } else if (lowerMessage.includes('major') || lowerMessage.includes('course')) {
    return "Selecting a major should be based on what you're passionate about, but also consider job prospects. It's okay to change your mind later too! What subjects do you enjoy the most?";
  } else if (lowerMessage.includes('exam') || lowerMessage.includes('test')) {
    return "Effective exam preparation involves consistent study habits, good note-taking, and practice tests. Start preparing well in advance rather than cramming the night before.";
  } else if (lowerMessage.includes('scholarship') || lowerMessage.includes('financial aid')) {
    return "There are many scholarship opportunities based on academic merit, sports, arts, or specific backgrounds. Have you checked with your school's financial aid office? They often have resources to help you find appropriate scholarships.";
  } else if (lowerMessage.includes('study') || lowerMessage.includes('learn')) {
    return "Everyone has different learning styles. Some learn better visually, others by listening, and some through hands-on experience. Have you identified what works best for you?";
  } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! I'm your education assistant. How can I help you with your educational journey today?";
  } else {
    return "That's an interesting question about education. Could you provide more details so I can give you a more specific answer?";
  }
};

const ChatbotInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your education assistant. How can I help you today?",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot thinking
    setTimeout(() => {
      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(input),
        role: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  
  return (
    <Card className="w-full h-full flex flex-col overflow-hidden border shadow-md">
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={cn(
              "flex items-start gap-3 max-w-[80%]",
              msg.role === 'user' ? "ml-auto" : ""
            )}
          >
            {msg.role === 'assistant' && (
              <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
                <AvatarFallback>
                  <Bot size={18} />
                </AvatarFallback>
              </Avatar>
            )}
            
            <div 
              className={cn(
                "rounded-lg px-4 py-2 text-sm",
                msg.role === 'user' 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted"
              )}
            >
              <p>{msg.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            
            {msg.role === 'user' && (
              <Avatar className="h-8 w-8 bg-secondary">
                <AvatarFallback>
                  <User size={18} />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
              <AvatarFallback>
                <Bot size={18} />
              </AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg px-4 py-2">
              <div className="flex gap-1">
                <span className="animate-bounce">•</span>
                <span className="animate-bounce delay-100">•</span>
                <span className="animate-bounce delay-200">•</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </CardContent>
      
      <CardFooter className="border-t p-3">
        <div className="flex w-full gap-2">
          <Input
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button 
            onClick={handleSend} 
            disabled={!input.trim() || isTyping}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatbotInterface;
