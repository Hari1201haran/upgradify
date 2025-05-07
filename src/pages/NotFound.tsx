
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <BackgroundDecorations variant="light" />
      <div className="text-center glassmorphism p-10 animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <a href="/" className="btn-glow bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
