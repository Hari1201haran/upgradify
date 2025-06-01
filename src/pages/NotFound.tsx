
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundDecorations from "@/components/ui/BackgroundDecorations";
import GlassCard from "@/components/ui/GlassCard";
import GradientText from "@/components/ui/GradientText";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 relative overflow-hidden">
      <BackgroundDecorations variant="dots" />
      
      <motion.div 
        className="text-center max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <GlassCard className="p-12 bg-white/80 backdrop-blur-lg border-0">
          {/* 404 Animation */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-24 w-24 text-yellow-500" />
            </div>
            <GradientText variant="rainbow" className="text-8xl md:text-9xl font-bold">
              404
            </GradientText>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off. 
              Let's get you back on track to your educational journey.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
              <p><strong>Requested path:</strong> {location.pathname}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
              >
                <Link to="/" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2"
              >
                <Link to="/dashboard" className="flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  Go to Dashboard
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-muted-foreground mb-4">
                You might be looking for:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/courses">Courses</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/careers">Careers</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/expert-tips">Expert Tips</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/profile">Profile</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default NotFound;
