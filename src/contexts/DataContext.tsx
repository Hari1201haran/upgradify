
import React, { createContext, useContext, useState } from 'react';

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
  interests: string[]; // Added interests field
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

interface DataContextType {
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
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Mock courses data
  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'B.Tech Computer Science and Engineering',
      description: 'A comprehensive course covering algorithms, programming, and system design.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: '2',
      title: 'B.Sc Artificial Intelligence & Data Science',
      description: 'Focuses on AI models, machine learning and data analytics.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: '3',
      title: 'B.Tech Artificial Intelligence & Machine Learning',
      description: 'Explores AI technologies, machine learning algorithms and neural networks.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: '4',
      title: 'B.Tech Information Technology',
      description: 'Focuses on software development, databases and network management.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: '5',
      title: 'BCA (Bachelor of Computer Applications)',
      description: 'Covers software development, database management and IT solutions.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: '6',
      title: 'B.Tech Cyber Security',
      description: 'Studies information security, ethical hacking and protection against cyber threats.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: '7',
      title: 'MBBS (Bachelor of Medicine and Surgery)',
      description: 'Comprehensive medical education to become a qualified doctor.',
      duration: '5.5 years',
      streams: ['Biology'],
    },
    {
      id: '8',
      title: 'BDS (Bachelor of Dental Surgery)',
      description: 'Training to become a qualified dental surgeon.',
      duration: '5 years',
      streams: ['Biology'],
    },
    {
      id: '9',
      title: 'B.Pharm (Bachelor of Pharmacy)',
      description: 'Studies pharmaceutical sciences and drug development.',
      duration: '4 years',
      streams: ['Biology'],
    },
    {
      id: '10',
      title: 'B.Sc Nursing',
      description: 'Training for nursing profession and healthcare services.',
      duration: '4 years',
      streams: ['Biology'],
    },
    {
      id: '11',
      title: 'B.Tech Biotechnology',
      description: 'Combines biology with engineering principles for biological applications.',
      duration: '4 years',
      streams: ['Biology'],
    },
    {
      id: '12',
      title: 'B.Sc Microbiology',
      description: 'Studies microorganisms and their applications in various fields.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: '13',
      title: 'B.Com (Bachelor of Commerce)',
      description: 'Studies accounting, finance, business management and economics.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: '14',
      title: 'BBA (Bachelor of Business Administration)',
      description: 'Focuses on business management, leadership and entrepreneurship.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: '15',
      title: 'B.Com Accounting and Finance',
      description: 'Specializes in financial accounting, taxation and corporate finance.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: '16',
      title: 'B.Com Banking and Insurance',
      description: 'Studies banking operations, financial markets and insurance principles.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: '17',
      title: 'BBA Finance',
      description: 'Specializes in financial management, investment analysis and banking.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: '18',
      title: 'Chartered Accountancy (CA)',
      description: 'Professional course for becoming a certified chartered accountant.',
      duration: '3-5 years',
      streams: ['Commerce'],
    },
    {
      id: '19',
      title: 'BA English Literature',
      description: 'Studies classic and contemporary literary works and critical analysis.',
      duration: '3 years',
      streams: ['Arts'],
    },
    {
      id: '20',
      title: 'BA History',
      description: 'Explores historical events, cultural evolution and archaeological studies.',
      duration: '3 years',
      streams: ['Arts'],
    },
    {
      id: '21',
      title: 'BA Economics',
      description: 'Studies economic theories, policy analysis and financial systems.',
      duration: '3 years',
      streams: ['Arts', 'Commerce'],
    },
    {
      id: '22',
      title: 'BA Psychology',
      description: 'Explores human behavior, mental processes and psychological theories.',
      duration: '3 years',
      streams: ['Arts', 'Science'],
    },
    {
      id: '23',
      title: 'B.Sc Mathematics',
      description: 'Studies pure and applied mathematics, algebra and calculus.',
      duration: '3 years',
      streams: ['Science'],
    },
    {
      id: '24',
      title: 'B.Sc Physics',
      description: 'Explores classical and modern physics principles and their applications.',
      duration: '3 years',
      streams: ['Science'],
    },
    {
      id: '25',
      title: 'B.Sc Chemistry',
      description: 'Studies chemical processes, reactions and material properties.',
      duration: '3 years',
      streams: ['Science'],
    },
    {
      id: '26',
      title: 'B.Sc Electronics',
      description: 'Focuses on electronic devices, circuits and communication systems.',
      duration: '3 years',
      streams: ['Science'],
    },
    // Additional courses for each stream
    // Computer Science
    {
      id: '27',
      title: 'B.Tech Electronics and Communication',
      description: 'Studies electronic devices, signals and communication networks.',
      duration: '4 years',
      streams: ['Computer Science', 'Science'],
    },
    {
      id: '28',
      title: 'B.Tech Software Engineering',
      description: 'Focuses on software development methodologies and project management.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: '29',
      title: 'B.Sc Computer Science',
      description: 'Studies programming, data structures and operating systems.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: '30',
      title: 'B.Tech IoT (Internet of Things)',
      description: 'Focuses on connected devices, sensors and data management.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    // Biology
    {
      id: '31',
      title: 'BPT (Bachelor of Physiotherapy)',
      description: 'Training for physical therapy and rehabilitation services.',
      duration: '4.5 years',
      streams: ['Biology'],
    },
    {
      id: '32',
      title: 'B.Sc Genetics',
      description: 'Studies inheritance, genetic disorders and DNA research.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: '33',
      title: 'B.Sc Biochemistry',
      description: 'Explores biochemical processes and molecular biology.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: '34',
      title: 'B.Sc Food Technology',
      description: 'Studies food processing, preservation and quality control.',
      duration: '3 years',
      streams: ['Biology'],
    },
    // Commerce
    {
      id: '35',
      title: 'Company Secretary (CS)',
      description: 'Professional course for corporate governance and compliance.',
      duration: '3-4 years',
      streams: ['Commerce'],
    },
    {
      id: '36',
      title: 'Cost and Management Accountancy (CMA)',
      description: 'Professional course for cost management and financial analysis.',
      duration: '3-4 years',
      streams: ['Commerce'],
    },
    {
      id: '37',
      title: 'B.Com Computer Applications',
      description: 'Combines commerce with computer technology and applications.',
      duration: '3 years',
      streams: ['Commerce', 'Computer Science'],
    },
    {
      id: '38',
      title: 'BBA Marketing',
      description: 'Specializes in marketing strategies, brand management and consumer behavior.',
      duration: '3 years',
      streams: ['Commerce'],
    },
  ]);

  // Mock colleges data
  const [colleges] = useState<College[]>([
    {
      id: 'college-1',
      name: 'Anna University',
      description: 'A premier technical university in Tamil Nadu, offering various engineering courses.',
      location: 'Chennai',
      ranking: 1,
      courses: ['B.Tech Computer Science', 'B.Tech Information Technology', 'B.Tech Electronics'],
    },
    {
      id: 'college-2',
      name: 'Loyola College',
      description: 'A renowned arts and science college known for its academic excellence.',
      location: 'Chennai',
      ranking: 2,
      courses: ['B.Sc Computer Science', 'B.Com', 'B.A Economics'],
    },
    {
      id: 'college-3',
      name: 'Madras Medical College',
      description: 'One of the oldest medical institutions in India with state-of-the-art facilities.',
      location: 'Chennai',
      ranking: 3,
      courses: ['MBBS', 'BDS', 'B.Pharm'],
    },
  ]);

  // Mock careers data
  const [careers] = useState<Career[]>([
    {
      id: '1',
      title: 'Software Developer',
      description: 'Designs, builds, and maintains software applications and systems.',
      skills: ['Programming', 'Problem Solving', 'Software Design'],
      education: ['B.Tech CSE', 'B.Sc Computer Science', 'BCA'],
      jobOutlook: 'Excellent',
      salary: '₹5-25 LPA',
      streams: ['Computer Science'],
      interests: ['Coding', 'Logic', 'Technology']
    },
    {
      id: '2',
      title: 'Data Scientist',
      description: 'Analyzes and interprets complex data to help organizations make better decisions.',
      skills: ['Statistics', 'Machine Learning', 'Programming', 'Data Visualization'],
      education: ['B.Tech CSE with AI/ML', 'B.Sc Statistics', 'B.Sc Mathematics'],
      jobOutlook: 'Excellent',
      salary: '₹8-30 LPA',
      streams: ['Computer Science', 'Science'],
      interests: ['Data Analysis', 'Mathematics', 'Research']
    },
    {
      id: '3',
      title: 'Physician',
      description: 'Diagnoses and treats injuries and illnesses in patients.',
      skills: ['Clinical Assessment', 'Decision Making', 'Communication'],
      education: ['MBBS', 'MD'],
      jobOutlook: 'Good',
      salary: '₹10-40 LPA',
      streams: ['Biology'],
      interests: ['Healthcare', 'Science', 'Helping Others']
    },
    {
      id: '4',
      title: 'Chartered Accountant',
      description: 'Provides financial advice, auditing services, and tax planning for clients.',
      skills: ['Financial Analysis', 'Accounting', 'Taxation Knowledge'],
      education: ['B.Com', 'CA'],
      jobOutlook: 'Good',
      salary: '₹7-30 LPA',
      streams: ['Commerce'],
      interests: ['Finance', 'Mathematics', 'Analysis']
    },
    {
      id: '5',
      title: 'Digital Marketing Specialist',
      description: 'Develops and implements marketing strategies across digital platforms.',
      skills: ['Content Creation', 'SEO', 'Social Media Management', 'Analytics'],
      education: ['BBA Marketing', 'B.Com', 'BA Mass Communication'],
      jobOutlook: 'Good',
      salary: '₹4-15 LPA',
      streams: ['Commerce', 'Arts'],
      interests: ['Marketing', 'Creativity', 'Social Media']
    },
    {
      id: '6',
      title: 'Biotechnologist',
      description: 'Researches and develops new products using biological systems and organisms.',
      skills: ['Lab Techniques', 'Research', 'Analytical Thinking'],
      education: ['B.Tech Biotechnology', 'B.Sc Microbiology', 'B.Sc Biochemistry'],
      jobOutlook: 'Moderate',
      salary: '₹4-15 LPA',
      streams: ['Biology'],
      interests: ['Laboratory Work', 'Research', 'Biology']
    },
  ]);

  // Mock government exams data
  const [governmentExams] = useState<GovernmentExam[]>([
    {
      id: 'exam-1',
      title: 'UPSC Civil Services Exam',
      description: 'Prestigious exam for IAS, IPS, IFS and other administrative services.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '1-2 years'
    },
    {
      id: 'exam-2',
      title: 'IBPS PO (Probationary Officer)',
      description: 'For officer positions in public sector banks.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '6-8 months'
    },
    {
      id: 'exam-3',
      title: 'SSC CGL (Combined Graduate Level)',
      description: 'For various government positions in central ministries and departments.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '6-8 months'
    },
    {
      id: 'exam-4',
      title: 'NEET (National Eligibility cum Entrance Test)',
      description: 'For admission to medical colleges across India.',
      eligibility: '12th with Physics, Chemistry, Biology',
      streams: ['Biology'],
      preparationTime: '1-2 years'
    },
    {
      id: 'exam-5',
      title: 'JEE Main & Advanced',
      description: 'For admission to IITs, NITs and other engineering colleges.',
      eligibility: '12th with Physics, Chemistry, Mathematics',
      streams: ['Computer Science', 'Science'],
      preparationTime: '1-2 years'
    },
    {
      id: 'exam-6',
      title: 'TNPSC Group 1',
      description: 'For administrative roles in Tamil Nadu government.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '8-12 months'
    },
    {
      id: 'exam-7',
      title: 'RBI Grade B Officer',
      description: 'For officer-level roles in the Reserve Bank of India.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Commerce', 'Economics'],
      preparationTime: '6-10 months'
    },
    {
      id: 'exam-8',
      title: 'GATE (Graduate Aptitude Test in Engineering)',
      description: 'For admission to M.Tech programs and PSU recruitment.',
      eligibility: 'Engineering degree or final year',
      streams: ['Computer Science', 'Science'],
      preparationTime: '6-12 months'
    },
    {
      id: 'exam-9',
      title: 'CA Foundation',
      description: 'First level exam for Chartered Accountancy course.',
      eligibility: '12th pass',
      streams: ['Commerce'],
      preparationTime: '4-6 months'
    },
    {
      id: 'exam-10',
      title: 'CLAT (Common Law Admission Test)',
      description: 'For admission to National Law Universities.',
      eligibility: '12th pass with minimum 45% marks',
      streams: ['Arts', 'Commerce', 'Science'],
      preparationTime: '6-8 months'
    },
  ]);

  // Mock NIRF rankings data
  const [nirfRankings] = useState<NIRFRanking[]>([
    {
      id: 'nirf-1',
      name: 'Indian Institute of Technology Madras',
      rank: 1,
      location: 'Chennai',
      category: 'Engineering',
      score: 89.93,
      description: 'Premier institute for engineering education and research, known for excellence in technical education.'
    },
    {
      id: 'nirf-2',
      name: 'Anna University',
      rank: 8,
      location: 'Chennai',
      category: 'Engineering',
      score: 77.8,
      description: 'Leading technical university in Tamil Nadu offering various engineering and technical programs.'
    },
    {
      id: 'nirf-3',
      name: 'Madras Medical College',
      rank: 5,
      location: 'Chennai',
      category: 'Medical',
      score: 82.1,
      description: 'One of the oldest medical institutions in India with excellent clinical training.'
    },
    {
      id: 'nirf-4',
      name: 'Loyola College',
      rank: 3,
      location: 'Chennai',
      category: 'Arts & Science',
      score: 85.2,
      description: 'Renowned for academic excellence in arts, science, and commerce streams.'
    },
    {
      id: 'nirf-5',
      name: 'Presidency College',
      rank: 9,
      location: 'Chennai',
      category: 'Arts & Science',
      score: 74.5,
      description: 'Historic institution known for quality education in arts and science disciplines.'
    },
    {
      id: 'nirf-6',
      name: 'SRM Institute of Science and Technology',
      rank: 12,
      location: 'Chennai',
      category: 'Engineering',
      score: 68.7,
      description: 'Private university offering diverse programs in engineering and technology.'
    },
    {
      id: 'nirf-7',
      name: 'Vellore Institute of Technology Chennai',
      rank: 15,
      location: 'Chennai',
      category: 'Engineering',
      score: 65.8,
      description: 'Modern campus with strong focus on engineering education and industry connections.'
    },
    {
      id: 'nirf-8',
      name: 'Madras School of Economics',
      rank: 6,
      location: 'Chennai',
      category: 'Management',
      score: 78.9,
      description: 'Specialized institution focusing on economics, finance, and management studies.'
    },
    {
      id: 'nirf-9',
      name: 'Stanley Medical College',
      rank: 18,
      location: 'Chennai',
      category: 'Medical',
      score: 62.4,
      description: 'Well-established medical college offering comprehensive clinical education.'
    },
    {
      id: 'nirf-10',
      name: 'Women\'s Christian College',
      rank: 24,
      location: 'Chennai',
      category: 'Arts & Science',
      score: 58.6,
      description: 'Women\'s college known for quality education in various disciplines.'
    },
    {
      id: 'nirf-11',
      name: 'Chennai Mathematical Institute',
      rank: 2,
      location: 'Chennai',
      category: 'Mathematics',
      score: 87.5,
      description: 'Research and educational institution focusing on mathematical sciences.'
    },
    {
      id: 'nirf-12',
      name: 'New College',
      rank: 29,
      location: 'Chennai',
      category: 'Arts & Science',
      score: 55.3,
      description: 'Historic institution offering diverse programs in arts and sciences.'
    },
  ]);

  // Function to get recommendations based on user's stream
  const getRecommendations = (stream: string) => {
    // Filter courses based on user's stream
    const recommendedCourses = courses.filter(course => 
      stream ? course.streams.includes(stream) : true
    ).slice(0, 4);
    
    // Filter careers based on user's stream
    const recommendedCareers = careers.filter(career => 
      stream ? career.streams.includes(stream) : true
    ).slice(0, 3);
    
    // Filter exams based on user's stream
    const recommendedExams = governmentExams.filter(exam => 
      stream ? exam.streams.includes(stream) : true
    ).slice(0, 3);
    
    return {
      recommendedCourses,
      recommendedCareers,
      recommendedExams
    };
  };

  return (
    <DataContext.Provider 
      value={{ 
        courses, 
        colleges, 
        careers, 
        governmentExams, 
        nirfRankings,
        getRecommendations
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
