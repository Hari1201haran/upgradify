
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Star, Users, Award, BookOpen } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import PageTransition from '@/components/layout/PageTransition';
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import GradientText from '@/components/ui/GradientText';
import RegisterForm from '@/components/auth/RegisterForm';

const Register = () => {
  const benefits = [
    { icon: <Star className="h-5 w-5" />, text: "Personalized Career Path" },
    { icon: <BookOpen className="h-5 w-5" />, text: "Access to 1000+ Courses" },
    { icon: <Users className="h-5 w-5" />, text: "Expert Mentorship" },
    { icon: <Award className="h-5 w-5" />, text: "Success Guarantee" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 relative overflow-hidden">
        <BackgroundDecorations variant="gradient" />
        
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side - Branding */}
          <motion.div 
            className="hidden lg:block space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <GradientText variant="blue" className="text-4xl font-bold">
                  After School
                </GradientText>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Begin Your{" "}
                <GradientText variant="rainbow">Dream Career</GradientText>{" "}
                Journey Today
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join our community of ambitious students and get personalized guidance to achieve your career goals.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/50 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-2">🚀 Start Your Success Story</h3>
                <p className="text-sm text-gray-600">
                  Over 10,000 students have found their perfect career path with us. You could be next!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Registration Form */}
          <motion.div 
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mobile Header */}
            <div className="text-center mb-8 lg:hidden">
              <div className="inline-flex items-center justify-center p-2 bg-primary rounded-xl mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold">Create Account</h1>
              <p className="text-muted-foreground mt-2">
                Join us to explore career opportunities
              </p>
            </div>

            <div className="hidden lg:block text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Create Your Account</h2>
              <p className="text-muted-foreground">
                Start your journey to success
              </p>
            </div>
            
            <GlassCard className="p-8 bg-white/80 backdrop-blur-lg">
              <RegisterForm />
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </GlassCard>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>10K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  <span>95% Success Rate</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Register;
