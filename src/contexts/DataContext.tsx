
import React, { createContext, useContext, useState, useEffect } from 'react';
import { computerScienceCourses } from './data/computerScienceCourses';
import { biologyCourses } from './data/biologyCourses';
import { commerceCourses } from './data/commerceCourses';
import { artsCourses } from './data/artsCourses';
import { scienceCourses } from './data/scienceCourses';
import { colleges } from './data/colleges';
import { careers } from './data/careers';
import { governmentExams } from './data/governmentExams';
import { nirfRankings } from './data/nirfRankings';
import { getRecommendations } from './data/recommendations';
import { DataContextType, Course, College, Career, GovernmentExam, NIRFRanking } from './data/types';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Combine all courses
  const allCourses: Course[] = [
    ...computerScienceCourses,
    ...biologyCourses,
    ...commerceCourses,
    ...artsCourses,
    ...scienceCourses,
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const value: DataContextType = {
    courses: allCourses,
    colleges,
    careers,
    governmentExams,
    nirfRankings,
    getRecommendations: (stream: string) => getRecommendations(stream, allCourses, careers, governmentExams),
    isLoading,
    error,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Re-export types for convenience
export type { Course, College, Career, GovernmentExam, NIRFRanking, DataContextType };
