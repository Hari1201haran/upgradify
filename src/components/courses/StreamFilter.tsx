
import React from 'react';
import { Button } from '@/components/ui/button';

interface StreamFilterProps {
  streamOptions: string[];
  selectedStream: string | null;
  setSelectedStream: (stream: string | null) => void;
  courseCounts: Record<string, number>;
}

const StreamFilter: React.FC<StreamFilterProps> = ({ 
  streamOptions, 
  selectedStream, 
  setSelectedStream,
  courseCounts
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button 
        variant={selectedStream === null ? "default" : "outline"}
        onClick={() => setSelectedStream(null)}
      >
        All ({courseCounts['All']})
      </Button>
      {streamOptions.map(stream => (
        <Button 
          key={stream}
          variant={selectedStream === stream ? "default" : "outline"}
          onClick={() => setSelectedStream(stream)}
        >
          {stream} ({courseCounts[stream]})
        </Button>
      ))}
    </div>
  );
};

export default StreamFilter;
