
import React, { createContext, useContext } from 'react';
import { DataContextType } from './data/types';
import { computerScienceCourses } from './data/computerScienceCourses';
import { biologyCourses } from './data/biologyCourses';
import { commerceCourses } from './data/commerceCourses';
import { colleges } from './data/colleges';
import { careers } from './data/careers';
import { governmentExams } from './data/governmentExams';
import { nirfRankings } from './data/nirfRankings';
import { getRecommendations as getRecommendationsUtil } from './data/recommendations';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Combine all courses
  const courses = [...computerScienceCourses, ...biologyCourses, ...commerceCourses];
  
  // Create getRecommendations function that uses the utility
  const getRecommendations = (stream: string) => {
    return getRecommendationsUtil(stream, courses, careers, governmentExams);
  };

  return (
    <DataContext.Provider value={{ 
      courses,
      colleges,
      careers,
      governmentExams,
      nirfRankings,
      getRecommendations
    }}>
      {children}
    </DataContext.Provider>
  );
};

// Re-export types for ease of use elsewhere in the application
export type {
  Course,
  College,
  Career,
  GovernmentExam,
  NIRFRanking
} from './data/types';
