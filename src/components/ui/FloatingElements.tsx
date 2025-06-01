
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Trophy, Star, Lightbulb, Target } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const icons = [
    { Icon: GraduationCap, delay: 0, color: 'text-blue-400' },
    { Icon: BookOpen, delay: 2, color: 'text-green-400' },
    { Icon: Trophy, delay: 4, color: 'text-yellow-400' },
    { Icon: Star, delay: 1, color: 'text-purple-400' },
    { Icon: Lightbulb, delay: 3, color: 'text-orange-400' },
    { Icon: Target, delay: 5, color: 'text-red-400' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-20`}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: [-20, -80, -20],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + index,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + index * 15}%`,
            top: `${10 + index * 10}%`,
          }}
        >
          <Icon size={24 + index * 4} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
