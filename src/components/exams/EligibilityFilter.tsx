
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen } from 'lucide-react';

interface EligibilityFilterProps {
  eligibilityOptions: string[];
  selectedEligibility: string;
  setSelectedEligibility: (eligibility: string) => void;
}

const EligibilityFilter: React.FC<EligibilityFilterProps> = ({
  eligibilityOptions,
  selectedEligibility,
  setSelectedEligibility,
}) => {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-muted-foreground">Eligibility Filter</h3>
      <div className="flex flex-wrap gap-2">
        {eligibilityOptions.map(option => (
          <Button 
            key={option}
            variant={selectedEligibility === option ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedEligibility(option)}
            className="flex items-center gap-1"
          >
            {option === '12th Pass' ? (
              <GraduationCap className="h-4 w-4" />
            ) : option === 'Graduate' ? (
              <BookOpen className="h-4 w-4" />
            ) : null}
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default EligibilityFilter;
