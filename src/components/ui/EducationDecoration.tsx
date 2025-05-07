
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, School, Star } from 'lucide-react';

interface EducationDecorationProps {
  variant?: 'careers' | 'courses' | 'tips' | 'profile';
  position?: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
}

const EducationDecoration: React.FC<EducationDecorationProps> = ({ 
  variant = 'careers',
  position = 'top-right'
}) => {
  // Different position classes based on the position prop
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  // Different color schemes based on variant
  const colorScheme = {
    careers: {
      primary: 'bg-blue-500/10',
      secondary: 'bg-indigo-500/10',
      tertiary: 'bg-purple-500/10',
      icon: 'text-blue-600',
    },
    courses: {
      primary: 'bg-green-500/10',
      secondary: 'bg-emerald-500/10',
      tertiary: 'bg-teal-500/10',
      icon: 'text-green-600',
    },
    tips: {
      primary: 'bg-amber-500/10',
      secondary: 'bg-yellow-500/10',
      tertiary: 'bg-orange-500/10',
      icon: 'text-amber-600',
    },
    profile: {
      primary: 'bg-purple-500/10',
      secondary: 'bg-fuchsia-500/10',
      tertiary: 'bg-pink-500/10',
      icon: 'text-purple-600',
    },
  };

  const colors = colorScheme[variant];
  
  // Select icon based on variant
  const IconComponent = 
    variant === 'careers' ? GraduationCap : 
    variant === 'courses' ? BookOpen :
    variant === 'tips' ? Star :
    School;

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none z-0 flex items-center justify-center`}>
      <motion.div
        className={`w-48 h-48 rounded-full ${colors.primary} flex items-center justify-center`}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className={`w-32 h-32 rounded-full ${colors.secondary} flex items-center justify-center`}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <motion.div
            className={`w-16 h-16 rounded-full ${colors.tertiary} flex items-center justify-center`}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <IconComponent className={`w-8 h-8 ${colors.icon}`} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EducationDecoration;
