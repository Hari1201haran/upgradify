
import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundDecorationsProps {
  variant?: 'default' | 'gradient' | 'dots' | 'waves';
  className?: string;
}

const BackgroundDecorations: React.FC<BackgroundDecorationsProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const renderDefault = () => (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated circles */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-1/4 -right-20 w-60 h-60 bg-indigo-200 rounded-full opacity-15"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-25"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );

  const renderGradient = () => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/80 to-transparent" />
    </div>
  );

  const renderDots = () => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, #e0e7ff 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        opacity: 0.3
      }} />
    </div>
  );

  const renderWaves = () => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320" fill="none">
        <path
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#gradient)"
          opacity="0.1"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  switch (variant) {
    case 'gradient':
      return renderGradient();
    case 'dots':
      return renderDots();
    case 'waves':
      return renderWaves();
    default:
      return renderDefault();
  }
};

export default BackgroundDecorations;
