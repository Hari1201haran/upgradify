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

export interface GovernmentExam {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  streams: string[];
  preparationTime: string;
}

interface DataContextType {
  careers: Career[];
  courses: Course[];
  colleges: College[];
  governmentExams: GovernmentExam[];
  getCareersByStream: (stream: string) => Career[];
  getCareersByInterest: (interests: string[]) => Career[];
  getCoursesByStream: (stream: string) => Course[];
  getCoursesByInterest: (interests: string[]) => Course[];
  getExamsByStream: (stream: string) => GovernmentExam[];
  getTopColleges: (limit?: number) => College[];
  getCollegesByCourse: (courseId: string) => College[];
  getRecommendations: (stream: string, interests: string[]) => {
    careers: Career[];
    courses: Course[];
    colleges: College[];
    exams: GovernmentExam[];
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

// Extended course data with stream categorization
const mockCourses: Course[] = [
  {
    id: "course-cs-1",
    title: "B.Tech Computer Science",
    description: "Bachelor of Technology in Computer Science and Engineering is an undergraduate program focusing on computing, programming, and application development.",
    duration: "4 years",
    streams: ["Science", "Computer Science"],
    interests: ["Technology", "Coding", "Mathematics", "Problem Solving"]
  },
  {
    id: "course-cs-2",
    title: "B.Tech Information Technology",
    description: "Focuses on software development, database management, and IT infrastructure with emphasis on real-world applications.",
    duration: "4 years",
    streams: ["Science", "Computer Science"],
    interests: ["Technology", "Software", "Databases", "Problem Solving"]
  },
  {
    id: "course-cs-3",
    title: "B.Tech Artificial Intelligence & Data Science",
    description: "Combines AI technologies with data analysis techniques to develop intelligent systems and extract insights from complex data.",
    duration: "4 years",
    streams: ["Science", "Computer Science"],
    interests: ["Artificial Intelligence", "Data Analysis", "Mathematics", "Research"]
  },
  {
    id: "course-cs-4",
    title: "B.Tech Cyber Security",
    description: "Focuses on protecting computer systems, networks, and data from security breaches and cyber threats.",
    duration: "4 years",
    streams: ["Science", "Computer Science"],
    interests: ["Security", "Networks", "Ethical Hacking", "Cryptography"]
  },
  {
    id: "course-cs-5",
    title: "B.Sc Computer Science",
    description: "Three-year undergraduate program covering programming, algorithms, and computing fundamentals.",
    duration: "3 years",
    streams: ["Science", "Computer Science"],
    interests: ["Coding", "Technology", "Software Development"]
  },
  {
    id: "course-cs-6",
    title: "BCA",
    description: "Bachelor of Computer Applications focuses on computer applications and software development.",
    duration: "3 years",
    streams: ["Science", "Computer Science", "Commerce"],
    interests: ["Software Development", "Web Development", "Applications"]
  },
  {
    id: "course-cs-7",
    title: "B.Tech Software Engineering",
    description: "Concentrates on systematic approaches to software development, testing, and maintenance.",
    duration: "4 years",
    streams: ["Science", "Computer Science"],
    interests: ["Software Development", "Quality Assurance", "Project Management"]
  },
  {
    id: "course-cs-8",
    title: "B.Tech IoT Engineering",
    description: "Focuses on connected devices, sensors, and networks for intelligent systems.",
    duration: "4 years",
    streams: ["Science", "Computer Science"],
    interests: ["Internet of Things", "Embedded Systems", "Networking"]
  },
  {
    id: "course-cs-9",
    title: "B.Tech Blockchain Technology",
    description: "Studies decentralized systems, cryptography, and secure distributed ledger technologies.",
    duration: "4 years",
    streams: ["Science", "Computer Science"],
    interests: ["Blockchain", "Cryptography", "Distributed Systems"]
  },
  {
    id: "course-cs-10",
    title: "B.Tech Cloud Computing",
    description: "Focuses on cloud infrastructure, virtualization, and cloud-based service models.",
    duration: "4 years",
    streams: ["Science", "Computer Science"],
    interests: ["Cloud Services", "Virtualization", "Distributed Computing"]
  },
  
  {
    id: "course-bio-1",
    title: "MBBS",
    description: "Bachelor of Medicine and Bachelor of Surgery prepares students to become medical doctors.",
    duration: "5.5 years (including internship)",
    streams: ["Science", "Biology"],
    interests: ["Medicine", "Healthcare", "Biology", "Helping Others"]
  },
  {
    id: "course-bio-2",
    title: "BDS",
    description: "Bachelor of Dental Surgery for careers in dental medicine and oral healthcare.",
    duration: "5 years",
    streams: ["Science", "Biology"],
    interests: ["Dentistry", "Healthcare", "Biology"]
  },
  {
    id: "course-bio-3",
    title: "B.Pharm",
    description: "Bachelor of Pharmacy for careers in pharmaceutical sciences and drug development.",
    duration: "4 years",
    streams: ["Science", "Biology"],
    interests: ["Pharmacy", "Chemistry", "Healthcare"]
  },
  {
    id: "course-bio-4",
    title: "B.Sc Nursing",
    description: "Undergraduate degree in nursing science for professional nursing practice.",
    duration: "4 years",
    streams: ["Science", "Biology"],
    interests: ["Nursing", "Healthcare", "Patient Care"]
  },
  {
    id: "course-bio-5",
    title: "B.Sc Biotechnology",
    description: "Bachelor of Science in Biotechnology combines biology, chemistry, and technology to develop biological products and processes.",
    duration: "3 years",
    streams: ["Science", "Biology"],
    interests: ["Biology", "Research", "Laboratory Work", "Innovation"]
  },
  {
    id: "course-bio-6",
    title: "B.Tech Biomedical Engineering",
    description: "Combines engineering principles with medical and biological sciences for healthcare innovations.",
    duration: "4 years",
    streams: ["Science", "Biology"],
    interests: ["Biomedical Devices", "Healthcare Technology", "Engineering"]
  },
  {
    id: "course-bio-7",
    title: "B.Sc Microbiology",
    description: "Studies microorganisms, their interactions, and applications in medicine and industry.",
    duration: "3 years",
    streams: ["Science", "Biology"],
    interests: ["Microbiology", "Laboratory Work", "Research"]
  },
  {
    id: "course-bio-8",
    title: "B.Sc Food Technology",
    description: "Focuses on food processing, preservation, and quality control methods.",
    duration: "3 years",
    streams: ["Science", "Biology"],
    interests: ["Food Science", "Quality Control", "Nutrition"]
  },
  {
    id: "course-bio-9",
    title: "B.Sc Nutrition and Dietetics",
    description: "Studies human nutrition, diet planning, and nutritional counseling.",
    duration: "3 years",
    streams: ["Science", "Biology"],
    interests: ["Nutrition", "Healthcare", "Counseling"]
  },
  {
    id: "course-bio-10",
    title: "BPT",
    description: "Bachelor of Physiotherapy for careers in physical rehabilitation and therapy.",
    duration: "4.5 years",
    streams: ["Science", "Biology"],
    interests: ["Physiotherapy", "Rehabilitation", "Healthcare"]
  },
  
  {
    id: "course-com-1",
    title: "B.Com",
    description: "Bachelor of Commerce provides knowledge in accounting, economics, business law, taxation, and finance.",
    duration: "3 years",
    streams: ["Commerce"],
    interests: ["Finance", "Economics", "Business", "Mathematics"]
  },
  {
    id: "course-com-2",
    title: "BBA",
    description: "Bachelor of Business Administration focuses on management principles, business strategy, and organizational behavior.",
    duration: "3 years",
    streams: ["Commerce"],
    interests: ["Business", "Management", "Leadership", "Marketing"]
  },
  {
    id: "course-com-3",
    title: "B.Com Accounting and Finance",
    description: "Specializes in financial accounting, corporate finance, and taxation practices.",
    duration: "3 years",
    streams: ["Commerce"],
    interests: ["Accounting", "Finance", "Taxation"]
  },
  {
    id: "course-com-4",
    title: "B.Com Banking and Insurance",
    description: "Focuses on banking operations, insurance principles, and financial services.",
    duration: "3 years",
    streams: ["Commerce"],
    interests: ["Banking", "Insurance", "Finance"]
  },
  {
    id: "course-com-5",
    title: "BBA Marketing",
    description: "Bachelor of Business Administration with a specialization in Marketing focuses on marketing principles, consumer behavior, and brand management.",
    duration: "3 years",
    streams: ["Commerce"],
    interests: ["Marketing", "Business", "Creativity", "Communication"]
  },
  {
    id: "course-com-6",
    title: "BBA Finance",
    description: "Specializes in financial management, investment analysis, and corporate finance.",
    duration: "3 years",
    streams: ["Commerce"],
    interests: ["Finance", "Investment", "Business"]
  },
  {
    id: "course-com-7",
    title: "B.Com Computer Applications",
    description: "Combines commerce education with computer applications and software skills.",
    duration: "3 years",
    streams: ["Commerce"],
    interests: ["Commerce", "Computer Applications", "Business"]
  },
  {
    id: "course-com-8",
    title: "Chartered Accountancy (CA)",
    description: "Professional course for becoming a certified chartered accountant specializing in auditing and taxation.",
    duration: "3-5 years",
    streams: ["Commerce"],
    interests: ["Accounting", "Auditing", "Taxation"]
  },
  {
    id: "course-com-9",
    title: "Company Secretary (CS)",
    description: "Professional course for corporate governance and compliance management.",
    duration: "3-4 years",
    streams: ["Commerce"],
    interests: ["Corporate Law", "Governance", "Compliance"]
  },
  {
    id: "course-com-10",
    title: "Cost and Management Accountancy (CMA)",
    description: "Professional course focusing on cost accounting and management reporting.",
    duration: "3-4 years",
    streams: ["Commerce"],
    interests: ["Cost Accounting", "Management", "Finance"]
  },
  
  {
    id: "course-2",
    title: "B.Sc Mathematics",
    description: "Bachelor of Science in Mathematics covers pure and applied mathematics, statistics, and computational methods.",
    duration: "3 years",
    streams: ["Science", "Computer Science"],
    interests: ["Mathematics", "Analysis", "Problem Solving", "Research"]
  },
  {
    id: "course-5",
    title: "B.A Psychology",
    description: "Bachelor of Arts in Psychology explores human behavior, mental processes, and psychological theories.",
    duration: "3 years",
    streams: ["Arts", "Science", "Biology"],
    interests: ["Psychology", "Helping Others", "Research", "Social Sciences"]
  },
  {
    id: "course-6",
    title: "B.A Mass Communication",
    description: "Bachelor of Arts in Mass Communication covers journalism, public relations, advertising, and digital media.",
    duration: "3 years",
    streams: ["Arts", "Commerce"],
    interests: ["Media", "Communication", "Writing", "Current Affairs"]
  },
  {
    id: "course-10",
    title: "B.Arch",
    description: "Bachelor of Architecture trains students in architectural design, building technology, and urban planning.",
    duration: "5 years",
    streams: ["Science", "Arts"],
    interests: ["Design", "Art", "Mathematics", "Innovation"]
  }
];

// Government exams data
const mockGovernmentExams: GovernmentExam[] = [
  {
    id: "exam-1",
    title: "UPSC Civil Services Exam",
    description: "For recruitment to Indian Administrative Service (IAS), Indian Police Service (IPS), and other prestigious civil services.",
    eligibility: ["Graduate in any discipline", "Age 21-32 years (with relaxations for reserved categories)"],
    streams: ["Science", "Commerce", "Arts", "Computer Science", "Biology"],
    preparationTime: "1-2 years"
  },
  {
    id: "exam-2",
    title: "SSC CGL",
    description: "Combined Graduate Level exam for various posts in government ministries and departments.",
    eligibility: ["Graduate in any discipline", "Age 18-32 years (varies by post)"],
    streams: ["Science", "Commerce", "Arts", "Computer Science", "Biology"],
    preparationTime: "6-12 months"
  },
  {
    id: "exam-3",
    title: "IBPS PO",
    description: "For recruitment of Probationary Officers in participating public sector banks.",
    eligibility: ["Graduate in any discipline", "Age 20-30 years"],
    streams: ["Science", "Commerce", "Arts", "Computer Science", "Biology"],
    preparationTime: "6-9 months"
  },
  {
    id: "exam-4",
    title: "RRB NTPC",
    description: "For non-technical popular categories of jobs in Indian Railways.",
    eligibility: ["Graduate/12th Pass (depending on post)", "Age 18-33 years (varies by post)"],
    streams: ["Science", "Commerce", "Arts", "Computer Science", "Biology"],
    preparationTime: "6-9 months"
  },
  {
    id: "exam-5",
    title: "TNPSC",
    description: "Tamil Nadu Public Service Commission exams for various state government posts.",
    eligibility: ["Varies by post (typically graduate level)", "Age varies by post"],
    streams: ["Science", "Commerce", "Arts", "Computer Science", "Biology"],
    preparationTime: "6-12 months"
  },
  
  {
    id: "exam-cs-1",
    title: "ISRO Scientist/Engineer",
    description: "For technical and research positions in the Indian Space Research Organization.",
    eligibility: ["B.Tech/BE in relevant engineering discipline", "Age limit varies by post"],
    streams: ["Science", "Computer Science"],
    preparationTime: "6-12 months"
  },
  {
    id: "exam-cs-2",
    title: "DRDO Scientist",
    description: "For research positions in Defense Research and Development Organization.",
    eligibility: ["B.Tech/BE/M.Sc in relevant discipline", "Age limit typically up to 28 years"],
    streams: ["Science", "Computer Science"],
    preparationTime: "6-12 months"
  },
  {
    id: "exam-cs-3",
    title: "SSC JE",
    description: "For Junior Engineer positions in various government departments.",
    eligibility: ["Diploma/Degree in Engineering", "Age 18-32 years"],
    streams: ["Science", "Computer Science"],
    preparationTime: "6-9 months"
  },
  {
    id: "exam-cs-4",
    title: "GATE (Computer Science)",
    description: "Graduate Aptitude Test in Engineering for higher education and PSU recruitment.",
    eligibility: ["B.Tech/BE or in final year", "No age limit"],
    streams: ["Science", "Computer Science"],
    preparationTime: "8-12 months"
  },
  {
    id: "exam-cs-5",
    title: "NIELIT Scientific Assistant",
    description: "For technical positions in National Institute of Electronics & Information Technology.",
    eligibility: ["B.Tech/BCA/B.Sc in relevant discipline", "Age typically up to 30 years"],
    streams: ["Science", "Computer Science"],
    preparationTime: "4-6 months"
  },
  
  {
    id: "exam-bio-1",
    title: "NEET",
    description: "National Eligibility cum Entrance Test for medical and dental college admissions.",
    eligibility: ["12th with Biology, Physics, Chemistry", "Age 17-25 years"],
    streams: ["Science", "Biology"],
    preparationTime: "1-2 years"
  },
  {
    id: "exam-bio-2",
    title: "AIIMS Entrance",
    description: "For admission to undergraduate medical programs at AIIMS institutions.",
    eligibility: ["12th with Biology, Physics, Chemistry", "Age 17-25 years"],
    streams: ["Science", "Biology"],
    preparationTime: "1-2 years"
  },
  {
    id: "exam-bio-3",
    title: "JIPMER",
    description: "Entrance exam for Jawaharlal Institute of Postgraduate Medical Education & Research.",
    eligibility: ["12th with Biology, Physics, Chemistry", "Age 17-25 years"],
    streams: ["Science", "Biology"],
    preparationTime: "1-2 years"
  },
  {
    id: "exam-bio-4",
    title: "ICAR AIEEA",
    description: "All India Entrance Examination for Admission to agricultural universities.",
    eligibility: ["12th with relevant subjects", "Age typically no specific limit"],
    streams: ["Science", "Biology"],
    preparationTime: "8-12 months"
  },
  {
    id: "exam-bio-5",
    title: "NIPER JEE",
    description: "Joint Entrance Examination for National Institute of Pharmaceutical Education and Research.",
    eligibility: ["B.Pharm or equivalent", "No specific age limit"],
    streams: ["Science", "Biology"],
    preparationTime: "6-9 months"
  },
  
  {
    id: "exam-com-1",
    title: "CA Foundation",
    description: "First level of Chartered Accountancy course by ICAI.",
    eligibility: ["12th pass", "No specific age limit"],
    streams: ["Commerce"],
    preparationTime: "4-6 months"
  },
  {
    id: "exam-com-2",
    title: "CS Foundation",
    description: "Entry-level exam for Company Secretary course by ICSI.",
    eligibility: ["12th pass", "No specific age limit"],
    streams: ["Commerce"],
    preparationTime: "3-4 months"
  },
  {
    id: "exam-com-3",
    title: "CMA Foundation",
    description: "First level of Cost and Management Accountancy course.",
    eligibility: ["12th pass", "No specific age limit"],
    streams: ["Commerce"],
    preparationTime: "3-4 months"
  },
  {
    id: "exam-com-4",
    title: "CMAT",
    description: "Common Management Admission Test for MBA admissions.",
    eligibility: ["Graduate in any discipline", "No specific age limit"],
    streams: ["Commerce", "Science", "Arts"],
    preparationTime: "4-6 months"
  },
  {
    id: "exam-com-5",
    title: "ICAI Commerce Wizard",
    description: "Quiz contest for commerce students by Institute of Chartered Accountants of India.",
    eligibility: ["Commerce students in 11th/12th", "No specific age limit"],
    streams: ["Commerce"],
    preparationTime: "1-2 months"
  }
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
  const [governmentExams] = useState<GovernmentExam[]>(mockGovernmentExams);

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

  const getExamsByStream = (stream: string) => {
    return governmentExams.filter(exam => 
      exam.streams.includes(stream)
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

    const recommendedExams = getExamsByStream(stream).slice(0, 5);
    
    return {
      careers: recommendedCareers,
      courses: recommendedCourses,
      colleges: recommendedColleges,
      exams: recommendedExams
    };
  };

  return (
    <DataContext.Provider
      value={{
        careers,
        courses,
        colleges,
        governmentExams,
        getCareersByStream,
        getCareersByInterest,
        getCoursesByStream,
        getCoursesByInterest,
        getExamsByStream,
        getTopColleges,
        getCollegesByCourse,
        getRecommendations
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
