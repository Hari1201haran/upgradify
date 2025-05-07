
import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/utils/animation';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
  return (
    <motion.div 
      className={`page-transition w-full ${className || ''}`}
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
