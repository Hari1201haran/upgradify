
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <BackgroundDecorations variant="light" />
      
      <div className="w-full max-w-md px-4">
        <motion.div 
          className="text-center bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            404
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-xl text-gray-600 mb-8">Oops! This page doesn't exist</p>
            
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Confused student" 
                className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
              />
            </div>
            
            <p className="text-gray-500 mb-6">
              The page you're looking for cannot be found. Return home to continue your educational journey.
            </p>
            
            <Link to="/" className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
