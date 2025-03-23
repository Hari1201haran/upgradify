
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
    // Computer Science Courses
    {
      id: 'cs-1',
      title: 'B.Tech in Operating Systems',
      description: 'Specialized knowledge in operating systems engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-2',
      title: 'B.Tech in Data Science',
      description: 'Specialized knowledge in data science engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-3',
      title: 'B.Tech in Game Development',
      description: 'Specialized knowledge in game development engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-4',
      title: 'B.Tech in Bioinformatics',
      description: 'Specialized knowledge in bioinformatics engineering.',
      duration: '4 years',
      streams: ['Computer Science', 'Biology'],
    },
    {
      id: 'cs-5',
      title: 'B.Tech in Advanced Databases',
      description: 'Specialized knowledge in advanced databases engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-6',
      title: 'B.Tech in AI & ML',
      description: 'Specialized knowledge in AI & ML engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-7',
      title: 'B.Tech in Microservices Architecture',
      description: 'Specialized knowledge in microservices architecture engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-8',
      title: 'B.Tech in Web Technologies',
      description: 'Specialized knowledge in web technologies engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-9',
      title: 'B.Tech in Augmented Reality & VR',
      description: 'Specialized knowledge in augmented reality & VR engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-10',
      title: 'B.Tech in ERP Systems',
      description: 'Specialized knowledge in ERP systems engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-11',
      title: 'B.Tech in Big Data Analytics',
      description: 'Specialized knowledge in big data analytics engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-12',
      title: 'B.Tech VR & AR Systems',
      description: 'For careers in immersive technology development.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-13',
      title: 'B.Tech in Programming Languages and Paradigms',
      description: 'Specialized knowledge in programming languages and paradigms.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-14',
      title: 'BCA E-Commerce Technology',
      description: 'Specialized knowledge in online business models.',
      duration: '3 years',
      streams: ['Computer Science', 'Commerce'],
    },
    {
      id: 'cs-15',
      title: 'B.Tech in Full Stack Development',
      description: 'Specialized knowledge in full stack development engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-16',
      title: 'B.Tech in IT Infrastructure Management',
      description: 'Specialized knowledge in IT infrastructure management.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-17',
      title: 'B.Tech in Computer Graphics',
      description: 'Specialized knowledge in computer graphics engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-18',
      title: 'B.Tech in Network Security',
      description: 'Specialized knowledge in network security engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-19',
      title: 'B.Tech AI Ethics',
      description: 'Understanding AI\'s societal impact and ethical practices.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-20',
      title: 'BCA Game Design',
      description: 'Specializing in designing and developing video games.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-21',
      title: 'B.Tech in Mobile Application Development',
      description: 'Specialized knowledge in mobile application development.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-22',
      title: 'B.Tech in Virtual Reality Development',
      description: 'Specialized knowledge in virtual reality development.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-23',
      title: 'B.Tech in Software Testing and Quality Assurance',
      description: 'Specialized knowledge in software testing and quality assurance.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-24',
      title: 'B.Tech in Human-Computer Interaction',
      description: 'Specialized knowledge in human-computer interaction engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-25',
      title: 'B.Tech in Cryptography',
      description: 'Specialized knowledge in cryptography engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-26',
      title: 'B.Tech in Autonomous Systems',
      description: 'Specialized knowledge in autonomous systems engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-27',
      title: 'B.Tech in Embedded Systems',
      description: 'Specialized knowledge in embedded systems engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-28',
      title: 'B.Tech in Data Structures & Algorithms',
      description: 'Specialized knowledge in data structures & algorithms.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-29',
      title: 'BCA DevOps Management',
      description: 'For software deployment and automation processes.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-30',
      title: 'B.Tech Distributed Computing',
      description: 'For careers in distributed systems and networks.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-31',
      title: 'B.Tech in Cyber Security',
      description: 'Specialized knowledge in cyber security engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-32',
      title: 'B.Tech in Neural Networks and Deep Learning',
      description: 'Specialized knowledge in neural networks and deep learning.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-33',
      title: 'B.Tech in Virtualization',
      description: 'Specialized knowledge in virtualization engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-34',
      title: 'BCA Software Testing',
      description: 'Expertise in testing and ensuring software quality.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-35',
      title: 'B.Tech in DevOps',
      description: 'Specialized knowledge in DevOps engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-36',
      title: 'B.Tech in E-Commerce Development',
      description: 'Specialized knowledge in e-commerce development.',
      duration: '4 years',
      streams: ['Computer Science', 'Commerce'],
    },
    {
      id: 'cs-37',
      title: 'B.Tech in Blockchain Technology',
      description: 'Specialized knowledge in blockchain technology engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-38',
      title: 'BCA Blockchain Development',
      description: 'For careers in blockchain and crypto tech.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-39',
      title: 'B.Tech in Data Privacy Engineering',
      description: 'Specialized knowledge in data privacy engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-40',
      title: 'B.Tech in Information Technology',
      description: 'Specialized knowledge in information technology engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-41',
      title: 'B.Tech in Natural Language Processing',
      description: 'Specialized knowledge in natural language processing.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-42',
      title: 'B.Tech in Software Development Life Cycle',
      description: 'Specialized knowledge in software development life cycle.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-43',
      title: 'BCA Cloud Computing',
      description: 'Skills in managing cloud infrastructure.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-44',
      title: 'B.Tech in Digital Forensics',
      description: 'Specialized knowledge in digital forensics engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-45',
      title: 'B.Tech in Machine Learning',
      description: 'Specialized knowledge in machine learning engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-46',
      title: 'B.Tech in Internet of Things',
      description: 'Specialized knowledge in internet of things engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-47',
      title: 'B.Tech in Multimedia Computing',
      description: 'Specialized knowledge in multimedia computing engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-48',
      title: 'B.Tech in Software Engineering',
      description: 'Specialized knowledge in software engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-49',
      title: 'B.Tech in Digital Signal Processing',
      description: 'Specialized knowledge in digital signal processing.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-50',
      title: 'B.Tech in Computer Science & Engineering',
      description: 'Specialized knowledge in computer science & engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-51',
      title: 'B.Tech in UI/UX Design',
      description: 'Specialized knowledge in UI/UX design engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-52',
      title: 'BCA Mobile Computing',
      description: 'For careers in mobile app development.',
      duration: '3 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-53',
      title: 'B.Tech in Artificial Intelligence',
      description: 'Specialized knowledge in artificial intelligence engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-54',
      title: 'B.Tech in Quantum Computing',
      description: 'Specialized knowledge in quantum computing engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-55',
      title: 'B.Tech in Cloud Computing',
      description: 'Specialized knowledge in cloud computing engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-56',
      title: 'B.Tech in Robotics',
      description: 'Specialized knowledge in robotics engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-57',
      title: 'B.Tech in Cloud Security',
      description: 'Specialized knowledge in cloud security engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-58',
      title: 'B.Tech in Edge Computing',
      description: 'Specialized knowledge in edge computing engineering.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    {
      id: 'cs-59',
      title: 'B.Tech in Web Design and Development',
      description: 'Specialized knowledge in web design and development.',
      duration: '4 years',
      streams: ['Computer Science'],
    },
    
    // Biology Courses
    {
      id: 'bio-1',
      title: 'B.Sc in Agronomy',
      description: 'Specialized knowledge in agronomy science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-2',
      title: 'B.Tech Pharmaceutical Engineering',
      description: 'For careers in drug development and pharma.',
      duration: '4 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-3',
      title: 'B.Sc in Nutritional Science',
      description: 'Specialized knowledge in nutritional science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-4',
      title: 'B.Sc in Bioanalytical Techniques',
      description: 'Specialized knowledge in bioanalytical techniques.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-5',
      title: 'B.Sc in Fishery Science',
      description: 'Specialized knowledge in fishery science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-6',
      title: 'B.Sc in Biomedical Instrumentation',
      description: 'Specialized knowledge in biomedical instrumentation.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-7',
      title: 'B.Sc in Forensic Science',
      description: 'Specialized knowledge in forensic science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-8',
      title: 'B.Tech Biomedical Engineering',
      description: 'Combines engineering and biological sciences.',
      duration: '4 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-9',
      title: 'B.Sc in Genetics',
      description: 'Specialized knowledge in genetics science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-10',
      title: 'B.Tech Genetic Engineering',
      description: 'For careers in gene modification and research.',
      duration: '4 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-11',
      title: 'B.Sc in Agriculture',
      description: 'Specialized knowledge in agriculture science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-12',
      title: 'B.Sc in Health Informatics',
      description: 'Specialized knowledge in health informatics science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-13',
      title: 'B.Sc in Animal Science',
      description: 'Specialized knowledge in animal science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-14',
      title: 'B.Sc in Bioinformatics',
      description: 'Specialized knowledge in bioinformatics science.',
      duration: '3 years',
      streams: ['Biology', 'Computer Science'],
    },
    {
      id: 'bio-15',
      title: 'B.Sc in Genetic Engineering',
      description: 'Specialized knowledge in genetic engineering science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-16',
      title: 'B.Sc in Bioengineering',
      description: 'Specialized knowledge in bioengineering science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-17',
      title: 'B.Sc in Phytochemistry',
      description: 'Specialized knowledge in phytochemistry science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-18',
      title: 'B.Sc in Pathology',
      description: 'Specialized knowledge in pathology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-19',
      title: 'B.Sc in Ecology and Evolution',
      description: 'Specialized knowledge in ecology and evolution science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-20',
      title: 'B.Sc in Applied Physics',
      description: 'Specialized knowledge in applied physics science.',
      duration: '3 years',
      streams: ['Science'],
    },
    {
      id: 'bio-21',
      title: 'B.Sc in Astrobiology',
      description: 'Specialized knowledge in astrobiology science.',
      duration: '3 years',
      streams: ['Biology', 'Science'],
    },
    {
      id: 'bio-22',
      title: 'B.Sc Radiology',
      description: 'Specializing in radiographic imaging and diagnosis.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-23',
      title: 'B.Tech Bioinformatics',
      description: 'Specializing in computational biology.',
      duration: '4 years',
      streams: ['Biology', 'Computer Science'],
    },
    {
      id: 'bio-24',
      title: 'B.Sc Audiology and Speech Therapy',
      description: 'For careers in speech and hearing sciences.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-25',
      title: 'B.Sc Cardiovascular Technology',
      description: 'For careers in heart and vascular sciences.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-26',
      title: 'B.Sc in Medical Laboratory Technology',
      description: 'Specialized knowledge in medical laboratory technology.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-27',
      title: 'B.Sc in Botany',
      description: 'Specialized knowledge in botany science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-28',
      title: 'B.Sc in Entomology',
      description: 'Specialized knowledge in entomology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-29',
      title: 'B.Sc in Biotechnology',
      description: 'Specialized knowledge in biotechnology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-30',
      title: 'B.Sc in Biochemistry',
      description: 'Specialized knowledge in biochemistry science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-31',
      title: 'B.Sc in Nanoscience and Technology',
      description: 'Specialized knowledge in nanoscience and technology.',
      duration: '3 years',
      streams: ['Biology', 'Science'],
    },
    {
      id: 'bio-32',
      title: 'B.Sc in Aquaculture',
      description: 'Specialized knowledge in aquaculture science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-33',
      title: 'B.Sc in Biomedical Science',
      description: 'Specialized knowledge in biomedical science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-34',
      title: 'B.Sc in Immunology',
      description: 'Specialized knowledge in immunology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-35',
      title: 'B.Sc in Microbial Technology',
      description: 'Specialized knowledge in microbial technology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-36',
      title: 'B.Sc in Genomics and Proteomics',
      description: 'Specialized knowledge in genomics and proteomics science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-37',
      title: 'B.Sc in Microbiology',
      description: 'Specialized knowledge in microbiology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-38',
      title: 'B.Sc in Molecular Diagnostics',
      description: 'Specialized knowledge in molecular diagnostics science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-39',
      title: 'B.Sc in Biophysics',
      description: 'Specialized knowledge in biophysics science.',
      duration: '3 years',
      streams: ['Biology', 'Science'],
    },
    {
      id: 'bio-40',
      title: 'B.Sc in Environmental Biotechnology',
      description: 'Specialized knowledge in environmental biotechnology.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-41',
      title: 'B.Sc in Marine Biology',
      description: 'Specialized knowledge in marine biology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-42',
      title: 'B.Sc in Computational Biology',
      description: 'Specialized knowledge in computational biology science.',
      duration: '3 years',
      streams: ['Biology', 'Computer Science'],
    },
    {
      id: 'bio-43',
      title: 'B.Sc in Neuroscience',
      description: 'Specialized knowledge in neuroscience.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-44',
      title: 'B.Sc in Veterinary Science',
      description: 'Specialized knowledge in veterinary science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-45',
      title: 'B.Sc Nuclear Medicine',
      description: 'Focus on nuclear imaging and therapy.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-46',
      title: 'B.Tech Biotechnology',
      description: 'Advanced knowledge in bioengineering and technology.',
      duration: '4 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-47',
      title: 'B.Sc in Reproductive Biology',
      description: 'Specialized knowledge in reproductive biology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-48',
      title: 'B.Sc in Food Technology',
      description: 'Specialized knowledge in food technology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-49',
      title: 'B.Sc in Environmental Science',
      description: 'Specialized knowledge in environmental science.',
      duration: '3 years',
      streams: ['Biology', 'Science'],
    },
    {
      id: 'bio-50',
      title: 'B.Sc in Public Health',
      description: 'Specialized knowledge in public health science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-51',
      title: 'B.Sc in Stem Cell Technology',
      description: 'Specialized knowledge in stem cell technology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-52',
      title: 'B.Sc in Clinical Research',
      description: 'Specialized knowledge in clinical research science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-53',
      title: 'B.Sc in Pharmaceutical Biotechnology',
      description: 'Specialized knowledge in pharmaceutical biotechnology.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-54',
      title: 'B.Sc in Poultry Science',
      description: 'Specialized knowledge in poultry science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-55',
      title: 'B.Sc in Industrial Microbiology',
      description: 'Specialized knowledge in industrial microbiology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-56',
      title: 'B.Sc in Plant Biology',
      description: 'Specialized knowledge in plant biology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-57',
      title: 'B.Sc in Tissue Engineering',
      description: 'Specialized knowledge in tissue engineering science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-58',
      title: 'B.Sc in Radiography and Imaging',
      description: 'Specialized knowledge in radiography and imaging science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-59',
      title: 'B.Sc in Physiology',
      description: 'Specialized knowledge in physiology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-60',
      title: 'B.Sc in Bioethics and Biosafety',
      description: 'Specialized knowledge in bioethics and biosafety science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-61',
      title: 'B.Sc Optometry',
      description: 'Expertise in eye care and vision technology.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-62',
      title: 'B.Sc in Zoology',
      description: 'Specialized knowledge in zoology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-63',
      title: 'B.Sc in Plant Pathology',
      description: 'Specialized knowledge in plant pathology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-64',
      title: 'B.Sc in Pharmaceutical Chemistry',
      description: 'Specialized knowledge in pharmaceutical chemistry science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-65',
      title: 'B.Sc in Molecular Biology',
      description: 'Specialized knowledge in molecular biology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-66',
      title: 'B.Sc in Horticulture',
      description: 'Specialized knowledge in horticulture science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    {
      id: 'bio-67',
      title: 'B.Sc in Pharmacology',
      description: 'Specialized knowledge in pharmacology science.',
      duration: '3 years',
      streams: ['Biology'],
    },
    
    // Commerce Courses
    {
      id: 'com-1',
      title: 'B.Com in Corporate Social Responsibility',
      description: 'Specialized knowledge in corporate social responsibility.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-2',
      title: 'B.Com in Human Resource Management',
      description: 'Specialized knowledge in human resource management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-3',
      title: 'B.Com in Accounting and Finance',
      description: 'Specialized knowledge in accounting and finance.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-4',
      title: 'B.Com in Auditing and Assurance',
      description: 'Specialized knowledge in auditing and assurance.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-5',
      title: 'B.Com in Financial Markets',
      description: 'Specialized knowledge in financial markets.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-6',
      title: 'B.Com in Agribusiness Management',
      description: 'Specialized knowledge in agribusiness management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-7',
      title: 'B.Com in Corporate Secretaryship',
      description: 'Specialized knowledge in corporate secretaryship.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-8',
      title: 'B.Com in Foreign Trade',
      description: 'Specialized knowledge in foreign trade.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-9',
      title: 'B.Com in Retail Operations',
      description: 'Specialized knowledge in retail operations.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-10',
      title: 'B.Com in Tourism and Travel Management',
      description: 'Specialized knowledge in tourism and travel management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-11',
      title: 'B.Com in Real Estate Management',
      description: 'Specialized knowledge in real estate management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-12',
      title: 'B.Com in Business Intelligence',
      description: 'Specialized knowledge in business intelligence.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-13',
      title: 'B.Com in Business Law',
      description: 'Specialized knowledge in business law.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-14',
      title: 'B.Com in Banking Technology',
      description: 'Specialized knowledge in banking technology.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-15',
      title: 'B.Com in Taxation',
      description: 'Specialized knowledge in taxation.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-16',
      title: 'B.Com in Co-operative Management',
      description: 'Specialized knowledge in co-operative management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-17',
      title: 'B.Com in Retail Management',
      description: 'Specialized knowledge in retail management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-18',
      title: 'B.Com in Supply Chain Analytics',
      description: 'Specialized knowledge in supply chain analytics.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-19',
      title: 'B.Com in Corporate Compliance',
      description: 'Specialized knowledge in corporate compliance.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-20',
      title: 'B.Com in Corporate Governance',
      description: 'Specialized knowledge in corporate governance.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-21',
      title: 'B.Com in International Finance',
      description: 'Specialized knowledge in international finance.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-22',
      title: 'B.Com in Insurance Management',
      description: 'Specialized knowledge in insurance management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-23',
      title: 'B.Com in Hospital Administration',
      description: 'Specialized knowledge in hospital administration.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-24',
      title: 'B.Com in Digital Marketing',
      description: 'Specialized knowledge in digital marketing.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-25',
      title: 'B.Com in Financial Planning',
      description: 'Specialized knowledge in financial planning.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-26',
      title: 'BBA Finance',
      description: 'For careers in financial management and analysis.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-27',
      title: 'B.Com in Wealth Management',
      description: 'Specialized knowledge in wealth management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-28',
      title: 'BMS Digital Marketing',
      description: 'Focus on digital promotion and branding.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-29',
      title: 'B.Com in Merchandising Management',
      description: 'Specialized knowledge in merchandising management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-30',
      title: 'B.Com in Hotel and Hospitality Management',
      description: 'Specialized knowledge in hotel and hospitality management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-31',
      title: 'B.Com in Export Management',
      description: 'Specialized knowledge in export management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-32',
      title: 'B.Com in Banking and Insurance',
      description: 'Specialized knowledge in banking and insurance.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-33',
      title: 'B.Com in Environmental Management',
      description: 'Specialized knowledge in environmental management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-34',
      title: 'B.Com in Media Management',
      description: 'Specialized knowledge in media management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-35',
      title: 'B.Com in Cost and Management Accounting',
      description: 'Specialized knowledge in cost and management accounting.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-36',
      title: 'B.Com in Advertising and Public Relations',
      description: 'Specialized knowledge in advertising and public relations.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-37',
      title: 'BBA Retail Management',
      description: 'For careers in retail industry and store operations.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-38',
      title: 'B.Com in Entrepreneurship',
      description: 'Specialized knowledge in entrepreneurship.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-39',
      title: 'B.Com in Microfinance',
      description: 'Specialized knowledge in microfinance.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-40',
      title: 'B.Com in Logistics and Supply Chain Management',
      description: 'Specialized knowledge in logistics and supply chain management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-41',
      title: 'BBA Human Resource',
      description: 'Focus on human resource and talent management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-42',
      title: 'BBA Hospitality Management',
      description: 'Focus on hospitality and tourism sectors.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-43',
      title: 'B.Com in Strategic Financial Management',
      description: 'Specialized knowledge in strategic financial management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-44',
      title: 'B.Com in Financial Reporting',
      description: 'Specialized knowledge in financial reporting.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-45',
      title: 'B.Com in Investment Management',
      description: 'Specialized knowledge in investment management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-46',
      title: 'B.Com in Textile Management',
      description: 'Specialized knowledge in textile management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-47',
      title: 'BBA International Business',
      description: 'Specialized knowledge in global trade policies.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-48',
      title: 'BMS Banking & Finance',
      description: 'For careers in banking and finance sectors.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-49',
      title: 'B.Com in E-Commerce',
      description: 'Specialized knowledge in e-commerce.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-50',
      title: 'B.Com in Stock Market Operations',
      description: 'Specialized knowledge in stock market operations.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-51',
      title: 'BBA Logistics Management',
      description: 'Expertise in supply chain and operations.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-52',
      title: 'B.Com in Risk Management',
      description: 'Specialized knowledge in risk management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-53',
      title: 'B.Com in International Business',
      description: 'Specialized knowledge in international business.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-54',
      title: 'B.Com in Business Analytics',
      description: 'Specialized knowledge in business analytics.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-55',
      title: 'B.Com in Business Law and Ethics',
      description: 'Specialized knowledge in business law and ethics.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-56',
      title: 'B.Com in Event Management',
      description: 'Specialized knowledge in event management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-57',
      title: 'B.Com in Pharmaceutical Management',
      description: 'Specialized knowledge in pharmaceutical management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-58',
      title: 'B.Com in Corporate Leadership',
      description: 'Specialized knowledge in corporate leadership.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-59',
      title: 'B.Com in Strategic Management',
      description: 'Specialized knowledge in strategic management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-60',
      title: 'BMS Sports Management',
      description: 'Specializing in sports and event management.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-61',
      title: 'BBA Marketing',
      description: 'Specializing in marketing and branding strategies.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-62',
      title: 'B.Com in E-Governance',
      description: 'Specialized knowledge in e-governance.',
      duration: '3 years',
      streams: ['Commerce'],
    },
    {
      id: 'com-63',
      title: 'B.Com in Trade Finance',
      description: 'Specialized knowledge in trade finance.',
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
    {
      id: 'exam-11',
      title: 'IBPS Clerk',
      description: 'For clerical positions in public sector banks.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '4-6 months'
    },
    {
      id: 'exam-12',
      title: 'RRB NTPC',
      description: 'For non-technical positions in Indian Railways.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '5-8 months'
    },
    {
      id: 'exam-13',
      title: 'RRB Group D',
      description: 'Recruitment for Group D level railway posts.',
      eligibility: '10th pass',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '3-6 months'
    },
    {
      id: 'exam-14',
      title: 'SBI PO',
      description: 'Probationary Officer positions at State Bank of India.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '6-10 months'
    },
    {
      id: 'exam-15',
      title: 'SBI Clerk',
      description: 'Clerical positions at State Bank of India.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '4-6 months'
    },
    {
      id: 'exam-16',
      title: 'NABARD Grade A & B',
      description: 'For officers in agriculture and rural development.',
      eligibility: 'Bachelor\'s degree in relevant field',
      streams: ['Commerce', 'Agriculture'],
      preparationTime: '6-9 months'
    },
    {
      id: 'exam-17',
      title: 'UPTET/CTET',
      description: 'Teacher eligibility tests for teaching positions.',
      eligibility: 'Bachelor\'s degree with B.Ed',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '3-5 months'
    },
    {
      id: 'exam-18',
      title: 'SSC CHSL',
      description: 'For lower division clerks and data entry operators.',
      eligibility: '12th pass',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '4-6 months'
    },
    {
      id: 'exam-19',
      title: 'SSC JE',
      description: 'For junior engineers in central government departments.',
      eligibility: 'Diploma/Degree in Engineering',
      streams: ['Computer Science', 'Science'],
      preparationTime: '5-8 months'
    },
    {
      id: 'exam-20',
      title: 'Indian Forest Service Exam',
      description: 'Recruitment for forest officers.',
      eligibility: 'Bachelor\'s degree in Science or Engineering',
      streams: ['Science', 'Biology'],
      preparationTime: '10-14 months'
    },
    {
      id: 'exam-21',
      title: 'Delhi Police SI',
      description: 'Sub-inspector recruitment in Delhi Police.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '4-6 months'
    },
    {
      id: 'exam-22',
      title: 'DSSSB Exams',
      description: 'For recruitment in Delhi state government schools.',
      eligibility: 'Varies by position',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '3-6 months'
    },
    {
      id: 'exam-23',
      title: 'LIC AAO',
      description: 'Assistant Administrative Officer positions in LIC.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Commerce', 'Computer Science'],
      preparationTime: '4-7 months'
    },
    {
      id: 'exam-24',
      title: 'FCI Manager',
      description: 'Recruitment in Food Corporation of India.',
      eligibility: 'Bachelor\'s degree in relevant discipline',
      streams: ['Commerce', 'Agriculture'],
      preparationTime: '4-6 months'
    },
    {
      id: 'exam-25',
      title: 'ICAR AIEEA',
      description: 'For agricultural research and education.',
      eligibility: '12th with PCB/PCM',
      streams: ['Biology', 'Science'],
      preparationTime: '6-9 months'
    },
    {
      id: 'exam-26',
      title: 'AIIMS Nursing Officer',
      description: 'Recruitment for nursing officers in AIIMS.',
      eligibility: 'B.Sc Nursing',
      streams: ['Biology'],
      preparationTime: '3-6 months'
    },
    {
      id: 'exam-27',
      title: 'ESIC UDC',
      description: 'Upper Division Clerk recruitment in ESIC.',
      eligibility: 'Bachelor\'s degree in any discipline',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '3-5 months'
    },
    {
      id: 'exam-28',
      title: 'NVS Recruitment',
      description: 'For teaching and non-teaching staff in Navodaya Vidyalaya.',
      eligibility: 'Varies by position',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '4-7 months'
    },
    {
      id: 'exam-29',
      title: 'KVS Recruitment',
      description: 'For teachers and administrators in Kendriya Vidyalayas.',
      eligibility: 'Bachelor\'s degree with B.Ed',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '4-7 months'
    },
    {
      id: 'exam-30',
      title: 'Indian Coast Guard',
      description: 'Recruitment for coast guard personnel.',
      eligibility: '12th pass or graduate depending on position',
      streams: ['Science', 'Computer Science'],
      preparationTime: '3-6 months'
    },
    {
      id: 'exam-31',
      title: 'Indian Navy SSR/AA',
      description: 'Recruitment for sailors and artificer apprentices.',
      eligibility: '12th pass with Physics and Mathematics',
      streams: ['Science', 'Computer Science'],
      preparationTime: '3-6 months'
    },
    {
      id: 'exam-32',
      title: 'Air Force X & Y Group',
      description: 'Recruitment for Air Force technical and non-technical staff.',
      eligibility: '12th pass with specific subjects',
      streams: ['Science', 'Computer Science'],
      preparationTime: '3-6 months'
    },
    {
      id: 'exam-33',
      title: 'Territorial Army Officer',
      description: 'For joining the territorial army as an officer.',
      eligibility: 'Graduate from any recognized university',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '2-4 months'
    },
    {
      id: 'exam-34',
      title: 'CDS (Combined Defence Services)',
      description: 'For officer recruitment in Indian Army, Navy, and Air Force.',
      eligibility: 'Bachelor\'s degree for most positions',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '6-10 months'
    },
    {
      id: 'exam-35',
      title: 'NDA (National Defence Academy)',
      description: 'Entry-level recruitment for armed forces.',
      eligibility: '12th pass',
      streams: ['Science'],
      preparationTime: '8-12 months'
    },
    {
      id: 'exam-36',
      title: 'DRDO CEPTAM',
      description: 'Recruitment for technical positions in DRDO.',
      eligibility: 'Diploma/Degree in relevant field',
      streams: ['Science', 'Computer Science'],
      preparationTime: '4-8 months'
    },
    {
      id: 'exam-37',
      title: 'ISRO Scientist/Engineer',
      description: 'For scientists and engineers in ISRO.',
      eligibility: 'B.Tech/M.Tech in relevant field',
      streams: ['Computer Science', 'Science'],
      preparationTime: '6-10 months'
    },
    {
      id: 'exam-38',
      title: 'CISF Constable/Fireman',
      description: 'Recruitment for constables in CISF.',
      eligibility: '10th/12th pass depending on position',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '2-4 months'
    },
    {
      id: 'exam-39',
      title: 'BSF Constable',
      description: 'For constable positions in Border Security Force.',
      eligibility: '10th pass',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '2-4 months'
    },
    {
      id: 'exam-40',
      title: 'CRPF Recruitment',
      description: 'Recruitment for various paramilitary positions.',
      eligibility: 'Varies by position',
      streams: ['Arts', 'Science', 'Commerce', 'Computer Science', 'Biology'],
      preparationTime: '2-5 months'
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

