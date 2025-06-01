
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useData } from '@/contexts/DataContext';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/layout/PageTransition';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BookOpen, 
  GraduationCap, 
  Award,
  ArrowRight,
  Star,
  Target,
  Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GlassCard from '@/components/ui/GlassCard';
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import GradientText from '@/components/ui/GradientText';
import { Link } from 'react-router-dom';
import { staggerContainer, slideUpVariants } from '@/utils/animation';

const Dashboard = () => {
  const { user } = useAuth();
  const { courses, careers, colleges } = useData();

  // Get personalized recommendations based on user's stream
  const recommendedCourses = courses
    .filter(course => user?.stream ? course.streams.includes(user.stream) : true)
    .slice(0, 3);
    
  const recommendedCareers = careers
    .filter(career => user?.stream ? career.streams.includes(user.stream) : true)
    .slice(0, 3);

  const stats = [
    {
      title: "Available Courses",
      value: courses.length.toString(),
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      title: "Career Paths",
      value: careers.length.toString(),
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      title: "Top Colleges",
      value: colleges.length.toString(),
      icon: <GraduationCap className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      title: "Success Rate",
      value: "95%",
      icon: <Award className="h-6 w-6" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    }
  ];

  const quickActions = [
    {
      title: "Explore Courses",
      description: "Find the perfect course for your career goals",
      icon: <BookOpen className="h-8 w-8" />,
      href: "/courses",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Career Guidance",
      description: "Discover career opportunities in your field",
      icon: <Target className="h-8 w-8" />,
      href: "/careers",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Expert Tips",
      description: "Learn from industry professionals",
      icon: <Lightbulb className="h-8 w-8" />,
      href: "/expert-tips",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8 relative">
          <BackgroundDecorations variant="gradient" />
          
          {/* Welcome Section */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center space-y-4 py-8">
              <h1 className="text-4xl md:text-5xl font-bold">
                Welcome back, <GradientText variant="blue">{user?.fullName?.split(' ')[0]}!</GradientText>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to take the next step in your educational journey? Let's explore what's new for you.
              </p>
            </div>
          </motion.section>

          {/* Stats Grid */}
          <motion.section 
            className="relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={slideUpVariants}>
                  <GlassCard className={`p-6 bg-gradient-to-br ${stat.bgColor} border-0 hover:shadow-lg transition-all`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-gray-800">
                          {stat.value}
                        </p>
                      </div>
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white`}>
                        {stat.icon}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quick Actions */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Quick Actions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GlassCard className="p-6 h-full hover:shadow-xl transition-all border-0 bg-white/70">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${action.color} text-white`}>
                        {action.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{action.title}</h3>
                      <p className="text-muted-foreground">{action.description}</p>
                      <Button asChild className={`bg-gradient-to-r ${action.color} hover:opacity-90 border-0`}>
                        <Link to={action.href} className="flex items-center gap-2">
                          Get Started
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Recommendations */}
          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            {/* Recommended Courses */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    Recommended Courses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendedCourses.map((course) => (
                    <div key={course.id} className="p-4 bg-white/70 rounded-lg hover:shadow-md transition-all">
                      <h4 className="font-semibold mb-2">{course.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-600">
                          {course.duration}
                        </span>
                        <Button size="sm" variant="outline" asChild>
                          <Link to="/courses">View Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-indigo-500">
                    <Link to="/courses">Explore All Courses</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.section>

            {/* Recommended Careers */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-teal-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Career Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendedCareers.map((career) => (
                    <div key={career.id} className="p-4 bg-white/70 rounded-lg hover:shadow-md transition-all">
                      <h4 className="font-semibold mb-2">{career.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {career.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-green-600">
                          {career.salary}
                        </span>
                        <Button size="sm" variant="outline" asChild>
                          <Link to="/careers">Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button asChild className="w-full bg-gradient-to-r from-green-500 to-teal-500">
                    <Link to="/careers">Explore Careers</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.section>
          </div>

          {/* Motivational Quote */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <GlassCard className="p-8 text-center bg-gradient-to-r from-purple-50 to-pink-50 border-0">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  <GradientText variant="purple">"Education is the passport to the future."</GradientText>
                </h3>
                <p className="text-muted-foreground">
                  Every step you take today shapes your tomorrow. Keep exploring, keep learning, and keep growing.
                </p>
              </div>
            </GlassCard>
          </motion.section>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Dashboard;
