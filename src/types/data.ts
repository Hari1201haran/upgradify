import { Database } from "@/integrations/supabase/types";

// These types use the generated Supabase types but are defined separately
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  streams: string[];
}

export interface College {
  id: string;
  name: string;
  description: string;
  location: string;
  ranking: number;
  courses: string[];
  category?: string; // Add the category field
}

export interface Career {
  id: string;
  title: string;
  description: string;
  skills: string[];
  education: string[];
  jobOutlook: string;
  salary: string;
  streams: string[];
  interests: string[];
}

export interface GovernmentExam {
  id: string;
  title: string;
  description: string;
  eligibility: string[] | string;
  streams: string[];
  preparationTime: string;
}

export interface NIRFRanking {
  id: string;
  name: string;
  rank: number;
  location: string;
  category: string;
  score: number;
  description: string;
}

// Mapping functions to convert from Supabase row types to our application types
export function mapDbCourse(course: Database['public']['Tables']['courses']['Row']): Course {
  return {
    id: course.id,
    title: course.title,
    description: course.description,
    duration: course.duration,
    streams: course.streams,
  };
}

export function mapDbCollege(college: Database['public']['Tables']['colleges']['Row']): College {
  return {
    id: college.id,
    name: college.name,
    description: college.description,
    location: college.location,
    ranking: college.ranking,
    courses: college.courses,
    category: (college as any).category || 'General', // Add type assertion and provide default value
  };
}

export function mapDbCareer(career: Database['public']['Tables']['careers']['Row']): Career {
  return {
    id: career.id,
    title: career.title,
    description: career.description,
    skills: career.skills,
    education: career.education,
    jobOutlook: career.job_outlook,
    salary: career.salary,
    streams: career.streams,
    interests: career.interests,
  };
}

export function mapDbGovernmentExam(exam: Database['public']['Tables']['government_exams']['Row']): GovernmentExam {
  return {
    id: exam.id,
    title: exam.title,
    description: exam.description,
    eligibility: exam.eligibility,
    streams: exam.streams,
    preparationTime: exam.preparation_time,
  };
}

export function mapDbNIRFRanking(ranking: Database['public']['Tables']['nirf_rankings']['Row']): NIRFRanking {
  return {
    id: ranking.id,
    name: ranking.name,
    rank: ranking.rank,
    location: ranking.location,
    category: ranking.category,
    score: ranking.score,
    description: ranking.description,
  };
}
