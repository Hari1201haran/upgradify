
import { supabase } from '@/integrations/supabase/client';
import { computerScienceCourses } from '@/contexts/data/computerScienceCourses';
import { biologyCourses } from '@/contexts/data/biologyCourses';
import { commerceCourses } from '@/contexts/data/commerceCourses';
import { artsCourses } from '@/contexts/data/artsCourses';
import { scienceCourses } from '@/contexts/data/scienceCourses';
import { lawCourses } from '@/contexts/data/lawCourses';
import { managementCourses } from '@/contexts/data/managementCourses';
import { colleges } from '@/contexts/data/colleges';
import { careers } from '@/contexts/data/careers';
import { governmentExams } from '@/contexts/data/governmentExams';
import { nirfRankings } from '@/contexts/data/nirfRankings';
import { Course, Career, GovernmentExam, College, NIRFRanking } from '@/contexts/data/types';

// Combine all courses from local data
const allLocalCourses: Course[] = [
  ...computerScienceCourses,
  ...biologyCourses,
  ...commerceCourses,
  ...artsCourses,
  ...scienceCourses,
  ...lawCourses,
  ...managementCourses,
];

export const dataService = {
  // Initialize database with local data (run once)
  async initializeDatabase() {
    try {
      console.log('Starting database initialization...');
      
      // Check if data already exists
      const { data: existingCourses } = await supabase.from('courses').select('id').limit(1);
      if (existingCourses && existingCourses.length > 0) {
        console.log('Database already initialized');
        return;
      }

      // Insert courses
      console.log('Inserting courses...');
      const { error: coursesError } = await supabase
        .from('courses')
        .insert(allLocalCourses);
      
      if (coursesError) {
        console.error('Error inserting courses:', coursesError);
      }

      // Transform careers data to match database schema
      console.log('Inserting careers...');
      const careersForDb = careers.map(career => ({
        ...career,
        job_outlook: career.jobOutlook
      }));
      
      const { error: careersError } = await supabase
        .from('careers')
        .insert(careersForDb);
      
      if (careersError) {
        console.error('Error inserting careers:', careersError);
      }

      // Transform government exams data to match database schema
      console.log('Inserting government exams...');
      const examsForDb = governmentExams.map(exam => ({
        ...exam,
        preparation_time: exam.preparationTime
      }));
      
      const { error: examsError } = await supabase
        .from('government_exams')
        .insert(examsForDb);
      
      if (examsError) {
        console.error('Error inserting government exams:', examsError);
      }

      // Insert colleges
      console.log('Inserting colleges...');
      const { error: collegesError } = await supabase
        .from('colleges')
        .insert(colleges);
      
      if (collegesError) {
        console.error('Error inserting colleges:', collegesError);
      }

      // Insert NIRF rankings
      console.log('Inserting NIRF rankings...');
      const { error: rankingsError } = await supabase
        .from('nirf_rankings')
        .insert(nirfRankings);
      
      if (rankingsError) {
        console.error('Error inserting NIRF rankings:', rankingsError);
      }

      console.log('Database initialization completed successfully');
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  },

  // Fetch all courses from database
  async getCourses(): Promise<Course[]> {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('title');
    
    if (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
    
    return data || [];
  },

  async getCareers(): Promise<Career[]> {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .order('title');
    
    if (error) {
      console.error('Error fetching careers:', error);
      return [];
    }
    
    return data?.map(career => ({
      ...career,
      jobOutlook: career.job_outlook
    })) || [];
  },

  async getGovernmentExams(): Promise<GovernmentExam[]> {
    const { data, error } = await supabase
      .from('government_exams')
      .select('*')
      .order('title');
    
    if (error) {
      console.error('Error fetching government exams:', error);
      return [];
    }
    
    return data?.map(exam => ({
      ...exam,
      preparationTime: exam.preparation_time
    })) || [];
  },

  async getColleges(): Promise<College[]> {
    const { data, error } = await supabase
      .from('colleges')
      .select('*')
      .order('ranking');
    
    if (error) {
      console.error('Error fetching colleges:', error);
      return [];
    }
    
    return data || [];
  },

  async getNIRFRankings(): Promise<NIRFRanking[]> {
    const { data, error } = await supabase
      .from('nirf_rankings')
      .select('*')
      .order('rank');
    
    if (error) {
      console.error('Error fetching NIRF rankings:', error);
      return [];
    }
    
    return data || [];
  }
};
