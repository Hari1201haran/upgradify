
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getRecommendations } from './data/recommendations';
import { DataContextType, Course, College, Career, GovernmentExam, NIRFRanking } from './data/types';
import { dataService } from '@/services/dataService';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [careers, setCareers] = useState<Career[]>([]);
  const [governmentExams, setGovernmentExams] = useState<GovernmentExam[]>([]);
  const [colleges, setColleges] = useState<College[]>([]);
  const [nirfRankings, setNirfRankings] = useState<NIRFRanking[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        console.log('Loading data from database...');
        
        // Initialize database with local data if needed
        await dataService.initializeDatabase();
        
        // Fetch all data from database
        const [
          coursesData,
          careersData,
          examsData,
          collegesData,
          rankingsData
        ] = await Promise.all([
          dataService.getCourses(),
          dataService.getCareers(),
          dataService.getGovernmentExams(),
          dataService.getColleges(),
          dataService.getNIRFRankings()
        ]);

        setCourses(coursesData);
        setCareers(careersData);
        setGovernmentExams(examsData);
        setColleges(collegesData);
        setNirfRankings(rankingsData);
        
        console.log('Data loaded successfully from database');
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load data');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const value: DataContextType = {
    courses,
    colleges,
    careers,
    governmentExams,
    nirfRankings,
    getRecommendations: (stream: string) => getRecommendations(stream, courses, careers, governmentExams),
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
