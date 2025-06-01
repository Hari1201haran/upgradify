
import React from 'react';

interface DecorativeImageProps {
  query: string;
  width: number;
  height: number;
  className?: string;
}

export const DecorativeImage: React.FC<DecorativeImageProps> = ({ 
  query, 
  width, 
  height, 
  className 
}) => {
  // Using a placeholder service for the decorative image
  const imageUrl = `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=${width}&h=${height}&fit=crop&crop=center`;
  
  return (
    <img
      src={imageUrl}
      alt={query}
      width={width}
      height={height}
      className={className}
      loading="lazy"
    />
  );
};
