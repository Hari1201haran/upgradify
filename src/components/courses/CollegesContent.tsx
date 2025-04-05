
import React from 'react';
import { School } from 'lucide-react';
import { College } from '@/contexts/DataContext';
import CollegeCard from './CollegeCard';
import CollegesTable from './CollegesTable';

interface CollegesContentProps {
  isLoading: boolean;
  filteredColleges: College[];
  viewMode: 'cards' | 'table';
}

const CollegesContent: React.FC<CollegesContentProps> = ({ 
  isLoading, 
  filteredColleges, 
  viewMode 
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (filteredColleges.length === 0) {
    return (
      <div className="text-center py-12">
        <School className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
        <h3 className="mt-4 text-lg font-medium">No colleges found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search
        </p>
      </div>
    );
  }
  
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">
          Found {filteredColleges.length} colleges
        </h3>
      </div>
      
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      ) : (
        <CollegesTable colleges={filteredColleges} />
      )}
    </>
  );
};

export default CollegesContent;
