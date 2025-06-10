
// Data type definitions for the application

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
  category?: string;
  // New detailed fields
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

export interface DataContextType {
  courses: Course[];
  colleges: College[];
  careers: Career[];
  governmentExams: GovernmentExam[];
  nirfRankings: NIRFRanking[];
  getRecommendations: (stream: string) => {
    recommendedCourses: Course[];
    recommendedCareers: Career[];
    recommendedExams: GovernmentExam[];
  };
  isLoading: boolean;
  error: string | null;
}
