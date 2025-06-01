
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  ArrowRight, 
  BookOpen, 
  Trophy, 
  Users, 
  Star,
  CheckCircle,
  TrendingUp,
  Target,
  Award
} from 'lucide-react';
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import FloatingElements from '@/components/ui/FloatingElements';
import GradientText from '@/components/ui/GradientText';
import GlassCard from '@/components/ui/GlassCard';
import { fadeInVariants, slideUpVariants, staggerContainer } from '@/utils/animation';

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: "Comprehensive Course Database",
      description: "Access detailed information about thousands of courses and colleges across India",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Career Guidance",
      description: "Get personalized career recommendations based on your interests and aptitude",
      gradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: "Government Exam Prep",
      description: "Complete information about government exams, eligibility, and preparation tips",
      gradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "NIRF Rankings",
      description: "Latest NIRF rankings to help you choose the best institutions",
      gradient: "from-purple-50 to-pink-50"
    }
  ];

  const stats = [
    { number: "1000+", label: "Courses", icon: <BookOpen className="h-6 w-6" /> },
    { number: "500+", label: "Colleges", icon: <GraduationCap className="h-6 w-6" /> },
    { number: "200+", label: "Career Paths", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "50+", label: "Exam Details", icon: <Target className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <BackgroundDecorations variant="default" />
      <FloatingElements />
      
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <GradientText variant="blue" className="text-2xl font-bold">
              After School
            </GradientText>
          </motion.div>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
              <Link to="/register">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1 
              variants={slideUpVariants}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Your Future Starts{" "}
              <GradientText variant="rainbow" className="text-6xl md:text-8xl">
                Here
              </GradientText>
            </motion.h1>
            
            <motion.p 
              variants={slideUpVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Discover your perfect career path with our comprehensive platform for 
              <span className="font-semibold text-blue-600"> courses</span>, 
              <span className="font-semibold text-green-600"> colleges</span>, and 
              <span className="font-semibold text-purple-600"> career guidance</span>
            </motion.p>
            
            <motion.div 
              variants={slideUpVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                asChild 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/register" className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="text-lg px-8 py-6 rounded-full border-2 hover:bg-gray-50"
              >
                <Link to="/login">Sign In</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInVariants}>
                <GlassCard className="p-6 text-center hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3 text-blue-500">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need for Your{" "}
              <GradientText variant="purple">Education Journey</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and resources to help you make informed decisions about your future
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={slideUpVariants}>
                <GlassCard className={`p-8 h-full bg-gradient-to-br ${feature.gradient} hover:shadow-xl transition-all duration-300 border-0`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-12 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Shape Your{" "}
                <GradientText variant="blue">Future?</GradientText>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who have found their perfect career path with our platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-lg px-8 py-6 rounded-full"
                >
                  <Link to="/register" className="flex items-center gap-2">
                    Create Free Account
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 text-blue-500" />
            <span className="font-semibold text-gray-800">After School</span>
          </div>
          <p className="text-muted-foreground">
            Empowering students to make informed career decisions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
