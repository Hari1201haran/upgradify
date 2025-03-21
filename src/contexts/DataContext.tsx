
import React, { createContext, useContext, useState } from 'react';

// Define types
export interface Career {
  id: string;
  title: string;
  description: string;
  qualifications: string[];
  streams: string[];
  interests: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  streams: string[];
  interests: string[];
}

export interface College {
  id: string;
  name: string;
  location: string;
  description: string;
  ranking: number;
  courses: string[];
  website: string;
  image?: string;
}

interface DataContextType {
  careers: Career[];
  courses: Course[];
  colleges: College[];
  getCareersByStream: (stream: string) => Career[];
  getCareersByInterest: (interests: string[]) => Career[];
  getCoursesByStream: (stream: string) => Course[];
  getCoursesByInterest: (interests: string[]) => Course[];
  getTopColleges: (limit?: number) => College[];
  getCollegesByCourse: (courseId: string) => College[];
  getRecommendations: (stream: string, interests: string[]) => {
    careers: Career[];
    courses: Course[];
    colleges: College[];
  };
}

// Mock data
const mockCareers: Career[] = [
  {
    id: "career-1",
    title: "Software Engineer",
    description: "Design, develop, and maintain software systems and applications.",
    qualifications: ["B.Tech/B.E in Computer Science", "BCA", "B.Sc Computer Science"],
    streams: ["Science"],
    interests: ["Technology", "Coding", "Mathematics", "Problem Solving"]
  },
  {
    id: "career-2",
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help organizations make better decisions.",
    qualifications: ["B.Sc Statistics", "B.Tech with specialization in Data Science", "B.Sc Mathematics"],
    streams: ["Science"],
    interests: ["Mathematics", "Statistics", "Analysis", "Research"]
  },
  {
    id: "career-3",
    title: "Chartered Accountant",
    description: "Financial advisor specializing in accounting, auditing, and taxation.",
    qualifications: ["B.Com", "BBA with Finance", "Integrated CA course"],
    streams: ["Commerce"],
    interests: ["Finance", "Economics", "Analysis", "Mathematics"]
  },
  {
    id: "career-4",
    title: "Investment Banker",
    description: "Help organizations raise capital and provide financial advisory services.",
    qualifications: ["B.Com", "BBA Finance", "BMS", "Economic Honours"],
    streams: ["Commerce"],
    interests: ["Finance", "Economics", "Business", "Mathematics"]
  },
  {
    id: "career-5",
    title: "Psychologist",
    description: "Study human behavior and mental processes to help individuals overcome challenges.",
    qualifications: ["B.A Psychology", "B.Sc Psychology"],
    streams: ["Arts", "Science"],
    interests: ["Psychology", "Helping Others", "Research", "Social Sciences"]
  },
  {
    id: "career-6",
    title: "Journalist",
    description: "Research, write, and report news stories for various media outlets.",
    qualifications: ["B.A Journalism", "B.A Mass Communication", "B.A English"],
    streams: ["Arts"],
    interests: ["Writing", "Current Affairs", "Communication", "Media"]
  },
  {
    id: "career-7",
    title: "Biotechnologist",
    description: "Apply scientific knowledge to develop products and processes with biological organisms.",
    qualifications: ["B.Tech/B.E Biotechnology", "B.Sc Biotechnology", "B.Sc Microbiology"],
    streams: ["Science"],
    interests: ["Biology", "Research", "Laboratory Work", "Innovation"]
  },
  {
    id: "career-8",
    title: "Doctor",
    description: "Diagnose and treat patients for various medical conditions.",
    qualifications: ["MBBS", "BDS", "BHMS", "BAMS"],
    streams: ["Science"],
    interests: ["Biology", "Helping Others", "Healthcare", "Research"]
  },
  {
    id: "career-9",
    title: "Marketing Manager",
    description: "Develop and implement marketing strategies to promote products or services.",
    qualifications: ["BBA Marketing", "B.Com", "BMM", "BMS"],
    streams: ["Commerce", "Arts"],
    interests: ["Marketing", "Business", "Creativity", "Communication"]
  },
  {
    id: "career-10",
    title: "Architect",
    description: "Design buildings and structures, considering aesthetics, function, and safety.",
    qualifications: ["B.Arch"],
    streams: ["Science"],
    interests: ["Design", "Art", "Mathematics", "Innovation"]
  },
];

const mockCourses: Course[] = [
  {
    id: "course-1",
    title: "B.Tech Computer Science",
    description: "Bachelor of Technology in Computer Science and Engineering is an undergraduate program focusing on computing, programming, and application development.",
    duration: "4 years",
    streams: ["Science"],
    interests: ["Technology", "Coding", "Mathematics", "Problem Solving"]
  },
  {
    id: "course-2",
    title: "B.Sc Mathematics",
    description: "Bachelor of Science in Mathematics covers pure and applied mathematics, statistics, and computational methods.",
    duration: "3 years",
    streams: ["Science"],
    interests: ["Mathematics", "Analysis", "Problem Solving", "Research"]
  },
  {
    id: "course-3",
    title: "B.Com",
    description: "Bachelor of Commerce provides knowledge in accounting, economics, business law, taxation, and finance.",
    duration: "3 years",
    streams: ["Commerce"],
    interests: ["Finance", "Economics", "Business", "Mathematics"]
  },
  {
    id: "course-4",
    title: "BBA",
    description: "Bachelor of Business Administration focuses on management principles, business strategy, and organizational behavior.",
    duration: "3 years",
    streams: ["Commerce"],
    interests: ["Business", "Management", "Leadership", "Marketing"]
  },
  {
    id: "course-5",
    title: "B.A Psychology",
    description: "Bachelor of Arts in Psychology explores human behavior, mental processes, and psychological theories.",
    duration: "3 years",
    streams: ["Arts", "Science"],
    interests: ["Psychology", "Helping Others", "Research", "Social Sciences"]
  },
  {
    id: "course-6",
    title: "B.A Mass Communication",
    description: "Bachelor of Arts in Mass Communication covers journalism, public relations, advertising, and digital media.",
    duration: "3 years",
    streams: ["Arts"],
    interests: ["Media", "Communication", "Writing", "Current Affairs"]
  },
  {
    id: "course-7",
    title: "B.Sc Biotechnology",
    description: "Bachelor of Science in Biotechnology combines biology, chemistry, and technology to develop biological products and processes.",
    duration: "3 years",
    streams: ["Science"],
    interests: ["Biology", "Research", "Laboratory Work", "Innovation"]
  },
  {
    id: "course-8",
    title: "MBBS",
    description: "Bachelor of Medicine and Bachelor of Surgery prepares students to become medical doctors.",
    duration: "5.5 years (including internship)",
    streams: ["Science"],
    interests: ["Biology", "Helping Others", "Healthcare", "Research"]
  },
  {
    id: "course-9",
    title: "BBA Marketing",
    description: "Bachelor of Business Administration with a specialization in Marketing focuses on marketing principles, consumer behavior, and brand management.",
    duration: "3 years",
    streams: ["Commerce"],
    interests: ["Marketing", "Business", "Creativity", "Communication"]
  },
  {
    id: "course-10",
    title: "B.Arch",
    description: "Bachelor of Architecture trains students in architectural design, building technology, and urban planning.",
    duration: "5 years",
    streams: ["Science"],
    interests: ["Design", "Art", "Mathematics", "Innovation"]
  },
];

const mockColleges: College[] = [
  {
    id: "college-1",
    name: "Indian Institute of Technology Madras",
    location: "Chennai",
    description: "IIT Madras is one of India's most prestigious engineering institutes known for its academic excellence and research.",
    ranking: 1,
    courses: ["B.Tech Computer Science", "B.Tech Electrical Engineering", "B.Tech Mechanical Engineering"],
    website: "https://www.iitm.ac.in"
  },
  {
    id: "college-2",
    name: "Loyola College",
    location: "Chennai",
    description: "Loyola College is a renowned arts and science college affiliated with the University of Madras.",
    ranking: 2,
    courses: ["B.Sc Mathematics", "B.Sc Computer Science", "B.Com", "B.A Economics"],
    website: "https://www.loyolacollege.edu"
  },
  {
    id: "college-3",
    name: "Madras Christian College",
    location: "Chennai",
    description: "MCC is one of the oldest colleges in India known for its liberal arts and science education.",
    ranking: 3,
    courses: ["B.Sc Physics", "B.A English", "B.Sc Chemistry", "B.A Sociology"],
    website: "https://www.mcc.edu.in"
  },
  {
    id: "college-4",
    name: "Stella Maris College",
    location: "Chennai",
    description: "Stella Maris is a women's college known for its excellence in arts, science, and commerce education.",
    ranking: 4,
    courses: ["B.Com", "B.A Psychology", "B.Sc Mathematics", "BBA"],
    website: "https://stellamariscollege.edu.in"
  },
  {
    id: "college-5",
    name: "Madras Medical College",
    location: "Chennai",
    description: "MMC is one of the oldest medical colleges in India with a rich heritage in medical education.",
    ranking: 5,
    courses: ["MBBS", "BDS", "B.Pharm"],
    website: "https://www.mmc.edu.in"
  },
  {
    id: "college-6",
    name: "Anna University",
    location: "Chennai",
    description: "Anna University is a public state university known for its engineering and technology programs.",
    ranking: 6,
    courses: ["B.Tech Computer Science", "B.Tech Civil Engineering", "B.Tech Electronics and Communication"],
    website: "https://www.annauniv.edu"
  },
  {
    id: "college-7",
    name: "Women's Christian College",
    location: "Chennai",
    description: "WCC is a women's college affiliated with the University of Madras, offering various undergraduate and postgraduate programs.",
    ranking: 7,
    courses: ["B.Com", "B.Sc Computer Science", "B.A English", "BBA"],
    website: "https://www.wcc.edu.in"
  },
  {
    id: "college-8",
    name: "Presidency College",
    location: "Chennai",
    description: "Presidency College is one of the oldest colleges in India, known for its academic excellence in arts and sciences.",
    ranking: 8,
    courses: ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Mathematics", "B.A History"],
    website: "https://www.presidencychennai.edu.in"
  },
  {
    id: "college-9",
    name: "MOP Vaishnav College for Women",
    location: "Chennai",
    description: "MOP Vaishnav College is known for its commerce, management, and media studies programs.",
    ranking: 9,
    courses: ["B.Com", "BBA", "B.A Communication", "B.Sc Computer Science"],
    website: "https://www.mopvc.edu.in"
  },
  {
    id: "college-10",
    name: "SRM Institute of Science and Technology",
    location: "Chennai",
    description: "SRM is a private university known for its engineering, management, and health sciences programs.",
    ranking: 10,
    courses: ["B.Tech Computer Science", "BBA", "B.Arch", "B.Sc Biotechnology"],
    website: "https://www.srmist.edu.in"
  }
];

// Create the context
const DataContext = createContext<DataContextType | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [careers] = useState<Career[]>(mockCareers);
  const [courses] = useState<Course[]>(mockCourses);
  const [colleges] = useState<College[]>(mockColleges);

  const getCareersByStream = (stream: string) => {
    return careers.filter(career => 
      career.streams.includes(stream)
    );
  };

  const getCareersByInterest = (interests: string[]) => {
    if (!interests || interests.length === 0) return [];
    
    return careers.filter(career => 
      career.interests.some(interest => 
        interests.includes(interest)
      )
    );
  };

  const getCoursesByStream = (stream: string) => {
    return courses.filter(course => 
      course.streams.includes(stream)
    );
  };

  const getCoursesByInterest = (interests: string[]) => {
    if (!interests || interests.length === 0) return [];
    
    return courses.filter(course => 
      course.interests.some(interest => 
        interests.includes(interest)
      )
    );
  };

  const getTopColleges = (limit = 10) => {
    return [...colleges]
      .sort((a, b) => a.ranking - b.ranking)
      .slice(0, limit);
  };

  const getCollegesByCourse = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return [];
    
    return colleges.filter(college => 
      college.courses.includes(course.title)
    );
  };

  const getRecommendations = (stream: string, interests: string[]) => {
    const streamCareers = getCareersByStream(stream);
    const interestCareers = getCareersByInterest(interests);
    
    const recommendedCareers = [...new Set([...streamCareers, ...interestCareers])].slice(0, 5);
    
    const streamCourses = getCoursesByStream(stream);
    const interestCourses = getCoursesByInterest(interests);
    
    const recommendedCourses = [...new Set([...streamCourses, ...interestCourses])].slice(0, 5);
    
    const recommendedColleges = getTopColleges(5);
    
    return {
      careers: recommendedCareers,
      courses: recommendedCourses,
      colleges: recommendedColleges,
    };
  };

  return (
    <DataContext.Provider
      value={{
        careers,
        courses,
        colleges,
        getCareersByStream,
        getCareersByInterest,
        getCoursesByStream,
        getCoursesByInterest,
        getTopColleges,
        getCollegesByCourse,
        getRecommendations
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
