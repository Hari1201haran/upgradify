

import { College } from './types';

export const colleges: College[] = [
  {
    id: 'col-1',
    name: 'Anna University',
    description: 'One of the top engineering universities in Tamil Nadu',
    location: 'Chennai',
    ranking: 1,
    courses: ['cs-1', 'cs-50', 'cs-55'],
    category: 'Engineering',
  },
  {
    id: 'col-2',
    name: 'IIT Madras',
    description: 'Premier engineering and technology institute in India',
    location: 'Chennai',
    ranking: 2,
    courses: ['cs-53', 'cs-54', 'cs-45'],
    category: 'Engineering',
  },
  {
    id: 'col-3',
    name: 'Loyola College',
    description: 'Top arts and science college in Chennai',
    location: 'Chennai',
    ranking: 3,
    courses: ['bio-29', 'com-3', 'com-11'],
    category: 'Arts & Science',
  },
];
