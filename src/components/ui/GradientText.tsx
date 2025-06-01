
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'blue' | 'purple' | 'rainbow' | 'green';
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '', 
  variant = 'blue' 
}) => {
  const variants = {
    blue: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    purple: 'bg-gradient-to-r from-purple-600 to-pink-600',
    rainbow: 'bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
    green: 'bg-gradient-to-r from-green-600 to-teal-600',
  };

  return (
    <span className={cn(
      'bg-clip-text text-transparent font-bold',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

export default GradientText;
