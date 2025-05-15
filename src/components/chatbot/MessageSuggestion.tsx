
import React from 'react';
import { Button } from "@/components/ui/button";

interface MessageSuggestionProps {
  text: string;
  onClick: (text: string) => void;
}

const MessageSuggestion: React.FC<MessageSuggestionProps> = ({ text, onClick }) => {
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={() => onClick(text)}
      className="text-sm py-1 px-3 h-auto whitespace-normal text-left justify-start"
    >
      {text}
    </Button>
  );
};

export default MessageSuggestion;
