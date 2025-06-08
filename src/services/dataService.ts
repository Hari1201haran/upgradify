
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
      
      // Check existing data counts
      const { data: existingCourses } = await supabase.from('courses').select('id');
      const { data: existingCareers } = await supabase.from('careers').select('id');
      const { data: existingExams } = await supabase.from('government_exams').select('id');
      const { data: existingColleges } = await supabase.from('colleges').select('id');
      const { data: existingRankings } = await supabase.from('nirf_rankings').select('id');

      console.log(`Existing courses in DB: ${existingCourses?.length || 0}`);
      console.log(`Existing careers in DB: ${existingCareers?.length || 0}`);
      console.log(`Existing exams in DB: ${existingExams?.length || 0}`);
      console.log(`Existing colleges in DB: ${existingColleges?.length || 0}`);
      console.log(`Existing rankings in DB: ${existingRankings?.length || 0}`);

      // Get existing IDs to avoid duplicates
      const existingCourseIds = new Set(existingCourses?.map(c => c.id) || []);
      const existingCareerIds = new Set(existingCareers?.map(c => c.id) || []);
      const existingExamIds = new Set(existingExams?.map(e => e.id) || []);
      const existingCollegeIds = new Set(existingColleges?.map(c => c.id) || []);
      const existingRankingIds = new Set(existingRankings?.map(r => r.id) || []);

      // Filter out existing data to insert only new records
      const newCourses = allLocalCourses.filter(course => !existingCourseIds.has(course.id));
      const newCareers = careers.filter(career => !existingCareerIds.has(career.id));
      const newExams = governmentExams.filter(exam => !existingExamIds.has(exam.id));
      const newColleges = colleges.filter(college => !existingCollegeIds.has(college.id));
      const newRankings = nirfRankings.filter(ranking => !existingRankingIds.has(ranking.id));

      console.log(`New courses to insert: ${newCourses.length}`);
      console.log(`New careers to insert: ${newCareers.length}`);
      console.log(`New exams to insert: ${newExams.length}`);
      console.log(`New colleges to insert: ${newColleges.length}`);
      console.log(`New rankings to insert: ${newRankings.length}`);

      // Insert new courses if any
      if (newCourses.length > 0) {
        console.log('Inserting new courses...');
        const { error: coursesError } = await supabase
          .from('courses')
          .insert(newCourses);
        
        if (coursesError) {
          console.error('Error inserting courses:', coursesError);
        } else {
          console.log(`Successfully inserted ${newCourses.length} new courses`);
        }
      }

      // Insert new careers if any
      if (newCareers.length > 0) {
        console.log('Inserting new careers...');
        const careersForDb = newCareers.map(career => ({
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
          console.log(`Successfully inserted ${newCareers.length} new careers`);
        }
      }

      // Insert new government exams if any
      if (newExams.length > 0) {
        console.log('Inserting new government exams...');
        const examsForDb = newExams.map(exam => ({
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
          console.log(`Successfully inserted ${newExams.length} new government exams`);
        }
      }

      // Insert new colleges if any
      if (newColleges.length > 0) {
        console.log('Inserting new colleges...');
        const { error: collegesError } = await supabase
          .from('colleges')
          .insert(newColleges);
        
        if (collegesError) {
          console.error('Error inserting colleges:', collegesError);
        } else {
          console.log(`Successfully inserted ${newColleges.length} new colleges`);
        }
      }

      // Insert new NIRF rankings if any
      if (newRankings.length > 0) {
        console.log('Inserting new NIRF rankings...');
        const { error: rankingsError } = await supabase
          .from('nirf_rankings')
          .insert(newRankings);
        
        if (rankingsError) {
          console.error('Error inserting NIRF rankings:', rankingsError);
        } else {
          console.log(`Successfully inserted ${newRankings.length} new NIRF rankings`);
        }
      }

      // Final count verification
      const { data: finalCourses } = await supabase.from('courses').select('id');
      const { data: finalCareers } = await supabase.from('careers').select('id');
      const { data: finalExams } = await supabase.from('government_exams').select('id');
      
      console.log(`Final database counts:`);
      console.log(`Courses: ${finalCourses?.length || 0} (expected: ${allLocalCourses.length})`);
      console.log(`Careers: ${finalCareers?.length || 0} (expected: ${careers.length})`);
      console.log(`Government Exams: ${finalExams?.length || 0} (expected: ${governmentExams.length})`);

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
