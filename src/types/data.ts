
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
  // Adding new detailed fields with proper types
  established_year?: number;
  type?: string;
  accreditation?: string[];
  facilities?: string[];
  notable_alumni?: string[];
  admission_process?: string;
  fee_structure?: string;
  campus_size?: string;
  student_strength?: number;
  faculty_count?: number;
  website_url?: string;
  contact_info?: any; // Updated to accept any JSON value from Supabase
  unique_features?: string[];
  placement_stats?: any; // Updated to accept any JSON value from Supabase
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

// Sample law courses that will be added to the database
export const lawCourses: Course[] = [
  {
    id: 'law-1',
    title: 'Bachelor of Laws (LLB)',
    description: 'A foundational degree program for those pursuing a career in law, covering constitutional law, criminal law, civil law, and more.',
    duration: '3 Years',
    streams: ['Law'],
  },
  {
    id: 'law-2',
    title: 'BA LLB (Integrated)',
    description: 'A 5-year integrated program combining arts subjects with law courses for a comprehensive legal education.',
    duration: '5 Years',
    streams: ['Law', 'Arts'],
  },
  {
    id: 'law-3',
    title: 'Master of Laws (LLM)',
    description: 'An advanced law degree for legal professionals looking to specialize in specific areas of law.',
    duration: '1-2 Years',
    streams: ['Law'],
  },
  {
    id: 'law-4',
    title: 'PhD in Law',
    description: 'A research-based doctoral program for advanced legal research and academic positions.',
    duration: '3-5 Years',
    streams: ['Law'],
  },
  {
    id: 'law-5',
    title: 'Diploma in Corporate Law',
    description: 'Specialized program focusing on legal aspects of corporate governance, mergers, acquisitions, and business law.',
    duration: '1 Year',
    streams: ['Law', 'Commerce'],
  },
  {
    id: 'law-6',
    title: 'Diploma in Cyber Law',
    description: 'Focused program on legal issues related to internet, cybercrimes, data protection, and digital evidence.',
    duration: '1 Year',
    streams: ['Law', 'Computer Science'],
  },
  {
    id: 'law-7',
    title: 'Diploma in Intellectual Property Law',
    description: 'Specialized course covering patents, copyrights, trademarks and related legal frameworks.',
    duration: '1 Year',
    streams: ['Law'],
  },
  {
    id: 'law-8',
    title: 'Certificate in Human Rights Law',
    description: 'Short-term program focusing on national and international human rights legal frameworks.',
    duration: '6 Months',
    streams: ['Law'],
  },
  {
    id: 'law-9',
    title: 'Certificate in Environmental Law',
    description: 'Focused program on legal frameworks for environmental protection, conservation and sustainability.',
    duration: '6 Months',
    streams: ['Law', 'Science'],
  },
  {
    id: 'law-10',
    title: 'Diploma in Taxation Law',
    description: 'Specialized program covering direct and indirect taxation, tax planning and compliance.',
    duration: '1 Year',
    streams: ['Law', 'Commerce'],
  },
];

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
    category: college.category || 'General', // Apply null coalescing to provide a default value
    // Add the new fields
    established_year: college.established_year,
    type: college.type,
    accreditation: college.accreditation,
    facilities: college.facilities,
    notable_alumni: college.notable_alumni,
    admission_process: college.admission_process,
    fee_structure: college.fee_structure,
    campus_size: college.campus_size,
    student_strength: college.student_strength,
    faculty_count: college.faculty_count,
    website_url: college.website_url,
    contact_info: college.contact_info,
    unique_features: college.unique_features,
    placement_stats: college.placement_stats
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
