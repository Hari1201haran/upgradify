
import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundDecorationsProps {
  variant?: 'default' | 'light' | 'dark';
}

const BackgroundDecorations: React.FC<BackgroundDecorationsProps> = ({ 
  variant = 'default' 
}) => {
  // Different color schemes based on variant
  const colorScheme = {
    default: {
      circle1: 'bg-blue-500/10',
      circle2: 'bg-indigo-500/10',
      square: 'bg-purple-500/10',
      triangle: 'border-b-indigo-400/20',
    },
    light: {
      circle1: 'bg-blue-300/10',
      circle2: 'bg-indigo-300/10',
      square: 'bg-purple-300/10',
      triangle: 'border-b-indigo-200/20',
    },
    dark: {
      circle1: 'bg-blue-600/10',
      circle2: 'bg-indigo-600/10',
      square: 'bg-purple-600/10',
      triangle: 'border-b-indigo-500/20',
    },
  };

  const colors = colorScheme[variant];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Large blob in top right */}
      <motion.div
        className={`absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full ${colors.circle1}`}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Medium circle in bottom left */}
      <motion.div
        className={`absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] rounded-full ${colors.circle2}`}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Small square in center right */}
      <motion.div
        className={`absolute top-[40%] right-[-20px] w-[100px] h-[100px] rounded-md ${colors.square}`}
        animate={{
          rotate: [0, 45, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Triangle in bottom right */}
      <div className="absolute bottom-[20%] right-[15%]">
        <motion.div
          className={`w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] ${colors.triangle}`}
          animate={{
            rotate: [0, -10, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundDecorations;
