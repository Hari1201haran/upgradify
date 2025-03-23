
import React, { createContext, useContext, ReactNode } from 'react';

// Types
export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  stream?: string;
  interests?: string[];
  avatar?: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  duration: string;
  streams: string[];
  requirements?: string[];
  eligibility?: string[];
};

export type College = {
  id: string;
  name: string;
  location: string;
  description: string;
  ranking: number;
  courses: string[];
  fees?: string;
  admissionProcess?: string;
  facilities?: string[];
};

export type Career = {
  id: string;
  title: string;
  description: string;
  streams: string[];
  qualifications: string[];
  skills: string[];
  salaryRange: string;
  growthProspects: string;
};

export type GovernmentExam = {
  id: string;
  title: string;
  description: string;
  streams: string[];
  eligibility: string[];
  preparationTime: string;
  examPattern?: string;
  syllabus?: string[];
};

export type Notification = {
  id: string;
  title: string;
  description: string;
  date: string;
  isRead: boolean;
  type: 'deadline' | 'update' | 'reminder';
};

// Context Type
type DataContextType = {
  courses: Course[];
  colleges: College[];
  careers: Career[];
  governmentExams: GovernmentExam[];
  notifications: Notification[];
};

// Create Context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Context Provider
export const DataProvider = ({ children }: { children: ReactNode }) => {
  // Sample Courses Data
  const courses: Course[] = [
    // Computer Science Courses
    {
      id: 'cs-01',
      title: 'Computer Science and Engineering (CSE)',
      description: 'Covers algorithms, programming, and system design, preparing students for software development roles.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-02',
      title: 'Information Technology (IT)',
      description: 'Focuses on software development, data management, and IT infrastructure.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-03',
      title: 'Artificial Intelligence and Data Science',
      description: 'Deals with AI technologies, machine learning, and data analysis for modern tech solutions.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-04',
      title: 'B.Sc. Computer Science',
      description: 'Covers programming, data structures, and computer fundamentals for IT careers.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-05',
      title: 'BCA (Bachelor of Computer Applications)',
      description: 'Covers software development and computer applications with practical focus.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-06',
      title: 'Cyber Security',
      description: 'Studies information security and protection against cyber threats.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-07',
      title: 'Software Engineering',
      description: 'Focuses on software development methodologies and project management.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-08',
      title: 'Data Analytics Engineering',
      description: 'Deals with big data, analytics, and data visualization techniques.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-09',
      title: 'Cloud Computing',
      description: 'Deals with cloud infrastructure, services, and data storage solutions.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-10',
      title: 'Internet of Things (IoT) Engineering',
      description: 'Focuses on connecting devices and smart systems development.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-11',
      title: 'Blockchain Technology',
      description: 'Studies secure distributed ledgers and cryptocurrency technologies.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-12',
      title: 'B.Tech in Quantum Computing',
      description: 'Covers quantum mechanics and computational models for next-gen computing.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    
    // Biology Courses
    {
      id: 'bio-01',
      title: 'MBBS (Bachelor of Medicine and Surgery)',
      description: 'Professional degree for aspiring doctors and medical professionals.',
      duration: '5.5 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-02',
      title: 'BDS (Bachelor of Dental Surgery)',
      description: 'Professional degree for those interested in becoming dental surgeons.',
      duration: '5 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-03',
      title: 'B.Pharm (Bachelor of Pharmacy)',
      description: 'Prepares students for careers in pharmaceutical industries and research.',
      duration: '4 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-04',
      title: 'B.Sc. Nursing',
      description: 'Professional degree for nursing and healthcare professionals.',
      duration: '4 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-05',
      title: 'BPT (Bachelor of Physiotherapy)',
      description: 'Professional degree for careers in physical therapy and rehabilitation.',
      duration: '4.5 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-06',
      title: 'B.Sc. Biotechnology',
      description: 'Focuses on biotechnology research, genetic engineering, and applications.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-07',
      title: 'B.Sc. Microbiology',
      description: 'Studies microorganisms and their applications in medicine and industry.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-08',
      title: 'B.Sc. Biochemistry',
      description: 'Covers molecular biology and biochemical processes for research careers.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-09',
      title: 'B.Tech Biomedical Engineering',
      description: 'Combines engineering with medical science for designing healthcare technologies.',
      duration: '4 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-10',
      title: 'B.Sc. Nutrition and Dietetics',
      description: 'For careers in dietetics, nutrition consultancy, and healthcare.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-11',
      title: 'B.Sc. Forensic Science',
      description: 'For careers in forensic investigation, criminology, and legal medicine.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-12',
      title: 'B.Sc. Public Health',
      description: 'For careers in public health management, epidemiology, and healthcare policy.',
      duration: '3 years',
      streams: ['Biology'],
    },
    
    // Commerce Courses
    {
      id: 'com-01',
      title: 'B.Com (Bachelor of Commerce)',
      description: 'For careers in accounting, finance, and general business management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-02',
      title: 'B.Com Accounting and Finance',
      description: 'Specializes in financial accounting, taxation, and corporate finance.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-03',
      title: 'B.Com Banking and Insurance',
      description: 'For careers in banking, finance, and insurance sectors.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-04',
      title: 'BBA (Bachelor of Business Administration)',
      description: 'For business management, administration, and entrepreneurship roles.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-05',
      title: 'BBA Finance',
      description: 'Specializes in finance, investment management, and financial analysis.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-06',
      title: 'BBA Marketing',
      description: 'For marketing, sales, brand management, and advertising roles.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-07',
      title: 'CA (Chartered Accountancy)',
      description: 'Professional course for becoming a certified chartered accountant.',
      duration: '3-5 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-08',
      title: 'CMA (Cost and Management Accountancy)',
      description: 'For careers in cost management, financial analysis, and auditing.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-09',
      title: 'B.Com E-Commerce',
      description: 'For careers in online business, e-commerce platforms, and digital trade.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-10',
      title: 'B.Com Business Analytics',
      description: 'For data-driven decision-making, business intelligence, and analysis.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-11',
      title: 'B.Com International Business',
      description: 'For careers in international trade, global business, and export-import.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-12',
      title: 'B.Com Investment Analysis',
      description: 'For careers in stock market, investment banking, and portfolio management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    
    // Arts Courses
    {
      id: 'art-01',
      title: 'BA English Literature',
      description: 'Explores classic and contemporary literary works and critical analysis.',
      duration: '3 years',
      streams: ['Arts'],
    },
    {
      id: 'art-02',
      title: 'BA Journalism & Mass Communication',
      description: 'Deals with media practices, journalism, and communication techniques.',
      duration: '3 years',
      streams: ['Arts'],
    },
    {
      id: 'art-03',
      title: 'BA Economics',
      description: 'Covers economic theories, policy analysis, and financial systems.',
      duration: '3 years',
      streams: ['Arts'],
    },
    {
      id: 'art-04',
      title: 'BA Psychology',
      description: 'Studies human behavior, mental processes, and psychological theories.',
      duration: '3 years',
      streams: ['Arts'],
    },
    {
      id: 'art-05',
      title: 'BA Sociology',
      description: 'Focuses on human societies, social structures, and community dynamics.',
      duration: '3 years',
      streams: ['Arts'],
    },
    {
      id: 'art-06',
      title: 'BA Political Science',
      description: 'Studies government systems, political ideologies, and public policy.',
      duration: '3 years',
      streams: ['Arts'],
    },
    
    // Science Stream (General)
    {
      id: 'sci-01',
      title: 'B.Sc. Mathematics',
      description: 'Covers algebra, calculus, statistics for analytical and research roles.',
      duration: '3 years',
      streams: ['Science'],
    },
    {
      id: 'sci-02',
      title: 'B.Sc. Physics',
      description: 'Focuses on classical and modern physics principles and applications.',
      duration: '3 years',
      streams: ['Science'],
    },
    {
      id: 'sci-03',
      title: 'B.Sc. Chemistry',
      description: 'Studies chemical processes, reactions, and laboratory techniques.',
      duration: '3 years',
      streams: ['Science'],
    },
    {
      id: 'sci-04',
      title: 'B.Sc. Electronics',
      description: 'Covers electronic devices, circuits, and communication systems.',
      duration: '3 years',
      streams: ['Science'],
    },
    {
      id: 'sci-05',
      title: 'B.Sc. Statistics',
      description: 'Deals with data analysis, statistical modeling, and probability theory.',
      duration: '3 years',
      streams: ['Science'],
    },
  ];

  // Sample Colleges Data
  const colleges: College[] = [
    {
      id: '1',
      name: 'Anna University',
      location: 'Chennai, Tamil Nadu',
      description: 'One of the premier technical universities in India known for engineering and technology education.',
      ranking: 1,
      courses: ['Computer Science Engineering', 'Electronics Engineering', 'Mechanical Engineering'],
      facilities: ['Modern Labs', 'Large Library', 'Sports Complex']
    },
    {
      id: '2',
      name: 'Loyola College',
      location: 'Chennai, Tamil Nadu',
      description: 'A prestigious autonomous college known for arts, science, and commerce programs.',
      ranking: 2,
      courses: ['B.Sc. Computer Science', 'B.Com', 'B.A. English'],
      facilities: ['Research Centers', 'Auditorium', 'Placement Cell']
    },
    {
      id: '3',
      name: 'Madras Christian College',
      location: 'Chennai, Tamil Nadu',
      description: 'Historic institution offering quality education in arts, science, and commerce.',
      ranking: 3,
      courses: ['B.Sc. Physics', 'B.A. History', 'B.Com Corporate Secretaryship'],
      facilities: ['130-acre campus', 'Heritage Buildings', 'Research Facilities']
    },
    {
      id: '4',
      name: 'SRM Institute of Science and Technology',
      location: 'Chennai, Tamil Nadu',
      description: 'Prominent private university known for technical and medical education.',
      ranking: 4,
      courses: ['Computer Science Engineering', 'Biotechnology', 'MBBS'],
      facilities: ['Modern Infrastructure', 'International Collaborations', 'Incubation Center']
    },
    {
      id: '5',
      name: 'Madras Medical College',
      location: 'Chennai, Tamil Nadu',
      description: 'One of the oldest medical colleges in India with excellent clinical training.',
      ranking: 5,
      courses: ['MBBS', 'BDS', 'B.Pharm'],
      facilities: ['Advanced Labs', 'Hospital Attached', 'Research Programs']
    },
    {
      id: '6',
      name: 'Presidency College',
      location: 'Chennai, Tamil Nadu',
      description: 'Historic institution offering programs in arts, science, and commerce.',
      ranking: 6,
      courses: ['B.Sc. Mathematics', 'B.A. Economics', 'B.Sc. Chemistry'],
      facilities: ['Historical Campus', 'Research Labs', 'Library']
    },
    {
      id: '7',
      name: 'Stella Maris College',
      location: 'Chennai, Tamil Nadu',
      description: 'Premier women\'s college offering various undergraduate and postgraduate programs.',
      ranking: 7,
      courses: ['B.Com', 'B.A. Sociology', 'B.Sc. Zoology'],
      facilities: ['Modern Classrooms', 'Auditorium', 'Sports Facilities']
    },
    {
      id: '8',
      name: 'Vellore Institute of Technology (VIT) Chennai',
      location: 'Chennai, Tamil Nadu',
      description: 'Campus of the renowned VIT, known for technical and management education.',
      ranking: 8,
      courses: ['Computer Science Engineering', 'Electronics Engineering', 'Business Administration'],
      facilities: ['Modern Labs', 'International Collaborations', 'Industry Connections']
    },
  ];

  // Sample Careers Data
  const careers: Career[] = [
    {
      id: '1',
      title: 'Software Developer',
      description: 'Develop and maintain software applications using various programming languages and frameworks.',
      streams: ['Computer Science'],
      qualifications: ['B.Tech/B.E in CSE/IT', 'BCA', 'B.Sc. Computer Science'],
      skills: ['Coding', 'Problem Solving', 'Algorithms'],
      salaryRange: '₹4-40 LPA',
      growthProspects: 'Excellent growth with opportunities for technical and managerial roles'
    },
    {
      id: '2',
      title: 'Data Scientist',
      description: 'Analyze and interpret complex data to help companies make better decisions.',
      streams: ['Computer Science', 'Science', 'Commerce'],
      qualifications: ['B.Tech in CSE/AI', 'B.Sc. Statistics/Mathematics'],
      skills: ['Statistics', 'Programming', 'Machine Learning'],
      salaryRange: '₹5-25 LPA',
      growthProspects: 'High demand with opportunities in various industries'
    },
    {
      id: '3',
      title: 'Doctor/Physician',
      description: 'Diagnose and treat illnesses and injuries in various medical settings.',
      streams: ['Biology'],
      qualifications: ['MBBS', 'MD/MS'],
      skills: ['Clinical Knowledge', 'Empathy', 'Communication'],
      salaryRange: '₹6-60 LPA',
      growthProspects: 'Specialization opportunities with high social impact'
    },
    {
      id: '4',
      title: 'Chartered Accountant',
      description: 'Provide financial advice, auditing, and accounting services to businesses and individuals.',
      streams: ['Commerce'],
      qualifications: ['B.Com', 'CA'],
      skills: ['Financial Analysis', 'Taxation', 'Auditing'],
      salaryRange: '₹7-30 LPA',
      growthProspects: 'Established career path with opportunities in corporate and private practice'
    },
    {
      id: '5',
      title: 'AI Engineer',
      description: 'Develop and implement AI models and solutions for various applications.',
      streams: ['Computer Science'],
      qualifications: ['B.Tech/B.E in CSE/AI', 'B.Sc. Computer Science'],
      skills: ['Machine Learning', 'Programming', 'Algorithm Design'],
      salaryRange: '₹6-40 LPA',
      growthProspects: 'Rapidly growing field with excellent future prospects'
    },
    {
      id: '6',
      title: 'Pharmacist',
      description: 'Dispense medications and provide advice on their safe use.',
      streams: ['Biology'],
      qualifications: ['B.Pharm', 'Pharm.D'],
      skills: ['Pharmaceutical Knowledge', 'Patient Counseling', 'Attention to Detail'],
      salaryRange: '₹3-10 LPA',
      growthProspects: 'Opportunities in hospitals, retail, and pharmaceutical industry'
    },
    {
      id: '7',
      title: 'Financial Analyst',
      description: 'Analyze financial data and provide investment advice and recommendations.',
      streams: ['Commerce'],
      qualifications: ['B.Com', 'BBA Finance', 'MBA Finance'],
      skills: ['Financial Modeling', 'Analysis', 'Market Knowledge'],
      salaryRange: '₹4-20 LPA',
      growthProspects: 'Growth opportunities in banking, investment firms, and corporations'
    },
    {
      id: '8',
      title: 'Clinical Psychologist',
      description: 'Assess and treat mental, emotional, and behavioral disorders.',
      streams: ['Arts', 'Biology'],
      qualifications: ['BA Psychology', 'M.Phil/Ph.D. Clinical Psychology'],
      skills: ['Empathy', 'Assessment', 'Therapy Techniques'],
      salaryRange: '₹3-15 LPA',
      growthProspects: 'Growing field with increasing awareness of mental health'
    },
    {
      id: '9',
      title: 'Civil Services Officer',
      description: 'Work in various administrative positions in government departments.',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      qualifications: ['Any Bachelor\'s Degree', 'UPSC Civil Services Examination'],
      skills: ['Administration', 'Decision Making', 'Public Service'],
      salaryRange: '₹6-15 LPA',
      growthProspects: 'Prestigious career with significant social impact'
    },
    {
      id: '10',
      title: 'Teacher/Professor',
      description: 'Educate students at various levels from school to university.',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      qualifications: ['Bachelor\'s Degree in relevant subject', 'B.Ed/M.Ed/Ph.D.'],
      skills: ['Communication', 'Subject Knowledge', 'Patience'],
      salaryRange: '₹3-15 LPA',
      growthProspects: 'Stable career with opportunities in various educational institutions'
    },
  ];

  // Sample Government Exams Data
  const governmentExams: GovernmentExam[] = [
    {
      id: 'exam-01',
      title: 'UPSC Civil Services Exam',
      description: 'For IAS, IPS, IFS, and other prestigious civil services positions in the government.',
      streams: ['Computer Science', 'Science', 'Commerce', 'Arts', 'Biology'],
      eligibility: [
        'Bachelor\'s degree in any discipline',
        'Age between 21-32 years (with relaxations)'
      ],
      preparationTime: '1-2 years',
      examPattern: 'Preliminary, Mains, and Interview stages'
    },
    {
      id: 'exam-02',
      title: 'SSC CGL (Combined Graduate Level)',
      description: 'For various government positions in central ministries and departments.',
      streams: ['Computer Science', 'Science', 'Commerce', 'Arts', 'Biology'],
      eligibility: [
        'Bachelor\'s degree in any discipline',
        'Age between 18-32 years (with relaxations)'
      ],
      preparationTime: '6-12 months',
      examPattern: 'Tier I, II, III, and Document Verification'
    },
    {
      id: 'exam-03',
      title: 'IBPS PO (Probationary Officer)',
      description: 'For officer positions in various public sector banks in India.',
      streams: ['Commerce', 'Computer Science', 'Science', 'Arts', 'Biology'],
      eligibility: [
        'Bachelor\'s degree in any discipline',
        'Age between 20-30 years (with relaxations)'
      ],
      preparationTime: '4-8 months',
      examPattern: 'Preliminary, Mains, and Interview stages'
    },
    {
      id: 'exam-04',
      title: 'SBI PO (State Bank of India PO)',
      description: 'For probationary officer positions in State Bank of India.',
      streams: ['Commerce', 'Computer Science', 'Science', 'Arts', 'Biology'],
      eligibility: [
        'Bachelor\'s degree in any discipline',
        'Age between 21-30 years (with relaxations)'
      ],
      preparationTime: '6-10 months',
      examPattern: 'Preliminary, Mains, Group Exercise, and Interview'
    },
    {
      id: 'exam-05',
      title: 'RRB NTPC (Railway Recruitment Board)',
      description: 'For non-technical positions in Indian Railways.',
      streams: ['Computer Science', 'Science', 'Commerce', 'Arts', 'Biology'],
      eligibility: [
        'Bachelor\'s degree in any discipline',
        'Age between 18-30 years (with relaxations)'
      ],
      preparationTime: '3-6 months',
      examPattern: 'Computer-Based Test (CBT), Skill Test, and Document Verification'
    },
    {
      id: 'exam-06',
      title: 'NEET (National Eligibility cum Entrance Test)',
      description: 'For admission into medical and dental colleges in India.',
      streams: ['Biology'],
      eligibility: [
        '12th with Physics, Chemistry, and Biology',
        'Minimum 50% aggregate in PCB'
      ],
      preparationTime: '1-2 years',
      examPattern: 'Single stage national-level examination'
    },
    {
      id: 'exam-07',
      title: 'JEE Main & Advanced',
      description: 'For admission into IITs, NITs, and other engineering colleges in India.',
      streams: ['Computer Science', 'Science'],
      eligibility: [
        '12th with Physics, Chemistry, and Mathematics',
        'Age restrictions apply'
      ],
      preparationTime: '1-2 years',
      examPattern: 'JEE Main followed by JEE Advanced for IITs'
    },
    {
      id: 'exam-08',
      title: 'NDA (National Defence Academy)',
      description: 'For joining the Indian Army, Navy, and Air Force after 12th.',
      streams: ['Computer Science', 'Science', 'Commerce', 'Arts', 'Biology'],
      eligibility: [
        '12th pass (Science stream for technical branches)',
        'Age between 16.5-19.5 years'
      ],
      preparationTime: '6-12 months',
      examPattern: 'Written exam followed by SSB Interview'
    },
    {
      id: 'exam-09',
      title: 'CLAT (Common Law Admission Test)',
      description: 'For admission into National Law Universities for law programs.',
      streams: ['Computer Science', 'Science', 'Commerce', 'Arts', 'Biology'],
      eligibility: [
        '12th with minimum 45-50% marks',
        'Age restrictions may apply'
      ],
      preparationTime: '6-12 months',
      examPattern: 'Single stage national-level examination'
    },
    {
      id: 'exam-10',
      title: 'CAT (Common Admission Test)',
      description: 'For admission into IIMs and other top MBA colleges in India.',
      streams: ['Computer Science', 'Science', 'Commerce', 'Arts', 'Biology'],
      eligibility: [
        'Bachelor\'s degree with minimum 50% marks',
        'Final year students can also apply'
      ],
      preparationTime: '6-12 months',
      examPattern: 'Computer-Based Test with multiple sections'
    },
    {
      id: 'exam-11',
      title: 'TNPSC Group 1, 2, 4',
      description: 'For various administrative roles in Tamil Nadu government.',
      streams: ['Computer Science', 'Science', 'Commerce', 'Arts', 'Biology'],
      eligibility: [
        'Bachelor\'s degree for higher groups',
        '10th/12th for Group 4',
        'Age restrictions apply'
      ],
      preparationTime: '6-12 months',
      examPattern: 'Preliminary and Main examination'
    },
    {
      id: 'exam-12',
      title: 'UPSC Engineering Services Exam',
      description: 'For engineering posts in various government departments.',
      streams: ['Computer Science', 'Science'],
      eligibility: [
        'Engineering degree in relevant discipline',
        'Age between 21-30 years (with relaxations)'
      ],
      preparationTime: '8-12 months',
      examPattern: 'Preliminary, Mains, and Interview stages'
    }
  ];

  // Sample Notifications Data
  const notifications: Notification[] = [
    {
      id: '1',
      title: 'NEET Registration Open',
      description: 'The registration for NEET 2023 is now open. Last date is March 30, 2023.',
      date: '2023-03-01',
      isRead: false,
      type: 'deadline'
    },
    {
      id: '2',
      title: 'New Course Added',
      description: 'B.Tech in Artificial Intelligence and Robotics now available at Anna University.',
      date: '2023-02-25',
      isRead: true,
      type: 'update'
    },
    {
      id: '3',
      title: 'Career Seminar',
      description: 'Join our career guidance seminar on "Future of Technology" this weekend.',
      date: '2023-03-10',
      isRead: false,
      type: 'reminder'
    },
    {
      id: '4',
      title: 'JEE Main Registration',
      description: 'Registration for JEE Main April session closes next week.',
      date: '2023-03-05',
      isRead: false,
      type: 'deadline'
    },
    {
      id: '5',
      title: 'Updated College Rankings',
      description: 'The new NIRF rankings for colleges in Tamil Nadu are now available.',
      date: '2023-02-28',
      isRead: true,
      type: 'update'
    }
  ];

  const value = {
    courses,
    colleges,
    careers,
    governmentExams,
    notifications
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Custom Hook
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
