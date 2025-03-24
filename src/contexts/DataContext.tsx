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
      title: 'B
