
import React from 'react';
import { pageTransition } from '@/utils/animation';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <div 
      className="page-transition w-full"
      style={{
        opacity: 0,
        animation: 'fade-in 0.5s forwards'
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
