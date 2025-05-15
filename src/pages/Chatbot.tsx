
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ChatbotInterface from "@/components/chatbot/ChatbotInterface";
import PageTransition from "@/components/layout/PageTransition";
import { DecorativeImage } from "@/components/ui/DecorativeImage";

const Chatbot = () => {
  return (
    <MainLayout>
      <PageTransition>
        <div className="relative">
          <div className="absolute top-0 right-0 z-0 opacity-15">
            <DecorativeImage 
              query="education chat assistant" 
              width={600} 
              height={600} 
              className="rounded-xl"
            />
          </div>
          
          <div className="relative z-10 mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">Education Assistant</h1>
            <p className="text-muted-foreground">
              Chat with our AI assistant to get personalized educational guidance and answers to your queries.
            </p>
          </div>

          <div className="relative z-10 h-[calc(100vh-320px)] min-h-[500px]">
            <ChatbotInterface />
          </div>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Chatbot;
