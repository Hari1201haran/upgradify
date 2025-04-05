
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Course } from '@/contexts/DataContext';
import CourseCard from './CourseCard';
import CoursesTable from './CoursesTable';

interface CoursesContentProps {
  isLoading: boolean;
  filteredCourses: Course[];
  viewMode: 'cards' | 'table';
  selectedStream: string | null;
}

const CoursesContent: React.FC<CoursesContentProps> = ({ 
  isLoading, 
  filteredCourses, 
  viewMode,
  selectedStream
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (filteredCourses.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
        <h3 className="mt-4 text-lg font-medium">No courses found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }
  
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">
          Found {filteredCourses.length} courses
          {selectedStream ? ` in ${selectedStream}` : ''}
        </h3>
      </div>
      
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <CoursesTable courses={filteredCourses} />
      )}
    </>
  );
};

export default CoursesContent;
