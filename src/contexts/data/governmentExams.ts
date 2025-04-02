
import { GovernmentExam } from './types';

export const governmentExams: GovernmentExam[] = [
  {
    id: 'exam-1',
    title: 'UPSC Civil Services Examination',
    description: 'One of the toughest exams in India for various civil services posts',
    eligibility: ['Bachelor\'s degree in any discipline'],
    streams: ['Computer Science', 'Biology', 'Commerce', 'Science'],
    preparationTime: '1-2 years',
  },
  {
    id: 'exam-2',
    title: 'GATE (Graduate Aptitude Test in Engineering)',
    description: 'Examination for admission to postgraduate programs in engineering',
    eligibility: ['Bachelor\'s degree in Engineering/Technology'],
    streams: ['Computer Science', 'Science'],
    preparationTime: '6-12 months',
  },
  {
    id: 'exam-3',
    title: 'NEET (National Eligibility cum Entrance Test)',
    description: 'Entrance examination for medical colleges in India',
    eligibility: ['10+2 with Biology'],
    streams: ['Biology'],
    preparationTime: '1-2 years',
  },
];
