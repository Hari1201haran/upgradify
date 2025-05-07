
import React from 'react';
import { motion } from 'framer-motion';

interface DecorativeImageProps {
  src: string;
  alt?: string;
  className?: string;
  animationDelay?: number;
}

const DecorativeImage: React.FC<DecorativeImageProps> = ({ 
  src, 
  alt = "Decorative image", 
  className = "",
  animationDelay = 0 
}) => {
  return (
    <motion.div
      className={`overflow-hidden rounded-xl shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut", 
        delay: animationDelay 
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        loading="lazy"
      />
    </motion.div>
  );
};

export default DecorativeImage;
