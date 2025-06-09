
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
      console.log(`Total local courses: ${allLocalCourses.length}`);
      console.log(`Total local careers: ${careers.length}`);
      console.log(`Total local government exams: ${governmentExams.length}`);
      console.log(`Total local colleges: ${colleges.length}`);
      console.log(`Total local NIRF rankings: ${nirfRankings.length}`);
      
      // Check if data already exists
      const { data: existingCourses } = await supabase.from('courses').select('id').limit(1);
      if (existingCourses && existingCourses.length > 0) {
        console.log('Data already exists in database, skipping initialization');
        return;
      }

      // Insert courses
      if (allLocalCourses.length > 0) {
        console.log('Inserting courses...');
        const { error: coursesError } = await supabase
          .from('courses')
          .insert(allLocalCourses);
        
        if (coursesError) {
          console.error('Error inserting courses:', coursesError);
        } else {
          console.log(`Successfully inserted ${allLocalCourses.length} courses`);
        }
      }

      // Insert careers
      if (careers.length > 0) {
        console.log('Inserting careers...');
        const careersForDb = careers.map(career => ({
          id: career.id,
          title: career.title,
          description: career.description,
          skills: career.skills,
          education: career.education,
          job_outlook: career.jobOutlook,
          salary: career.salary,
          streams: career.streams,
          interests: career.interests
        }));
        
        const { error: careersError } = await supabase
          .from('careers')
          .insert(careersForDb);
        
        if (careersError) {
          console.error('Error inserting careers:', careersError);
        } else {
          console.log(`Successfully inserted ${careers.length} careers`);
        }
      }

      // Insert government exams
      if (governmentExams.length > 0) {
        console.log('Inserting government exams...');
        const examsForDb = governmentExams.map(exam => ({
          id: exam.id,
          title: exam.title,
          description: exam.description,
          eligibility: Array.isArray(exam.eligibility) ? exam.eligibility : [exam.eligibility],
          streams: exam.streams,
          preparation_time: exam.preparationTime
        }));
        
        const { error: examsError } = await supabase
          .from('government_exams')
          .insert(examsForDb);
        
        if (examsError) {
          console.error('Error inserting government exams:', examsError);
        } else {
          console.log(`Successfully inserted ${governmentExams.length} government exams`);
        }
      }

      // Insert colleges
      if (colleges.length > 0) {
        console.log('Inserting colleges...');
        const { error: collegesError } = await supabase
          .from('colleges')
          .insert(colleges);
        
        if (collegesError) {
          console.error('Error inserting colleges:', collegesError);
        } else {
          console.log(`Successfully inserted ${colleges.length} colleges`);
        }
      }

      // Insert NIRF rankings
      if (nirfRankings.length > 0) {
        console.log('Inserting NIRF rankings...');
        const { error: rankingsError } = await supabase
          .from('nirf_rankings')
          .insert(nirfRankings);
        
        if (rankingsError) {
          console.error('Error inserting NIRF rankings:', rankingsError);
        } else {
          console.log(`Successfully inserted ${nirfRankings.length} NIRF rankings`);
        }
      }

      // Final count verification
      const { data: finalCourses } = await supabase.from('courses').select('id');
      const { data: finalCareers } = await supabase.from('careers').select('id');
      const { data: finalExams } = await supabase.from('government_exams').select('id');
      const { data: finalColleges } = await supabase.from('colleges').select('id');
      const { data: finalRankings } = await supabase.from('nirf_rankings').select('id');
      
      console.log(`Final database counts:`);
      console.log(`Courses: ${finalCourses?.length || 0} (expected: ${allLocalCourses.length})`);
      console.log(`Careers: ${finalCareers?.length || 0} (expected: ${careers.length})`);
      console.log(`Government Exams: ${finalExams?.length || 0} (expected: ${governmentExams.length})`);
      console.log(`Colleges: ${finalColleges?.length || 0} (expected: ${colleges.length})`);
      console.log(`NIRF Rankings: ${finalRankings?.length || 0} (expected: ${nirfRankings.length})`);

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
