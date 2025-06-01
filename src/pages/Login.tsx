
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, Mail, Lock, Loader2, AlertCircle, Star, BookOpen, Trophy } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import PageTransition from '@/components/layout/PageTransition';
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import GradientText from '@/components/ui/GradientText';
import { isValidEmail } from '@/types/auth';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  // Validate email whenever it changes
  useEffect(() => {
    if (email && !isValidEmail(email)) {
      setEmailError('Please enter a valid email address from a recognized provider');
    } else {
      setEmailError('');
    }
  }, [email]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!isValidEmail(email)) {
      toast.error('Invalid email address. Please use a valid email from a recognized provider.');
      setEmailError('Please enter a valid email address from a recognized provider');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: <Star className="h-5 w-5" />, text: "Personalized Career Guidance" },
    { icon: <BookOpen className="h-5 w-5" />, text: "1000+ Course Options" },
    { icon: <Trophy className="h-5 w-5" />, text: "Expert Recommendations" }
  ];
  
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 relative overflow-hidden">
        <BackgroundDecorations variant="default" />
        
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
                Your Journey to{" "}
                <GradientText variant="rainbow">Success</GradientText>{" "}
                Starts Here
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of students who have discovered their perfect career path through our comprehensive guidance platform.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
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
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground mt-2">
                Sign in to continue your education journey
              </p>
            </div>

            <div className="hidden lg:block text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-muted-foreground">
                Please sign in to your account
              </p>
            </div>
            
            <GlassCard className="p-8 bg-white/80 backdrop-blur-lg">
              {error && (
                <motion.div 
                  className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-6 flex items-start gap-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className={`pl-10 h-12 ${emailError ? 'border-red-500' : ''}`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  {emailError && (
                    <motion.p 
                      className="text-sm text-red-500 flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AlertCircle size={14} />
                      {emailError}
                    </motion.p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10 h-12"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-lg font-medium" 
                  disabled={isSubmitting || !email || !password || !!emailError}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Signing In...
                    </>
                  ) : 'Sign In'}
                </Button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary hover:underline font-medium">
                    Create an account
                  </Link>
                </p>
              </div>
            </GlassCard>
            
            {/* Demo Credentials */}
            <motion.div 
              className="mt-6 text-center text-sm text-muted-foreground bg-gray-50 p-4 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="font-medium mb-2">Demo Credentials:</p>
              <p>Email: student@gmail.com (or any valid email)</p>
              <p>Password: (any password will work)</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
