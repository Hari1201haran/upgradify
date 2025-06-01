
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useData } from '@/contexts/DataContext';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/layout/PageTransition';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SearchBar from '@/components/courses/SearchBar';
import StreamFilter from '@/components/courses/StreamFilter';
import CoursesContent from '@/components/courses/CoursesContent';
import CollegesContent from '@/components/courses/CollegesContent';
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import GradientText from '@/components/ui/GradientText';
import { BookOpen, GraduationCap, TrendingUp, Award } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const Courses = () => {
  const { user } = useAuth();
  const { courses, colleges, isLoading } = useData();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState<string | null>(user?.stream || null);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStream = selectedStream ? course.streams.includes(selectedStream) : true;
    
    return matchesSearch && matchesStream;
  });
  
  const filteredColleges = colleges.filter(college => {
    return college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const streamOptions = ['Computer Science', 'Biology', 'Commerce', 'Arts', 'Science', 'Law'];
  
  const courseCounts = {
    'Computer Science': courses.filter(course => course.streams.includes('Computer Science')).length,
    'Biology': courses.filter(course => course.streams.includes('Biology')).length,
    'Commerce': courses.filter(course => course.streams.includes('Commerce')).length,
    'Arts': courses.filter(course => course.streams.includes('Arts')).length,
    'Science': courses.filter(course => course.streams.includes('Science')).length,
    'Law': courses.filter(course => course.streams.includes('Law')).length,
    'All': courses.length
  };

  const stats = [
    { 
      icon: <BookOpen className="h-6 w-6" />, 
      value: courses.length.toString(), 
      label: "Total Courses",
      color: "from-blue-500 to-blue-600" 
    },
    { 
      icon: <GraduationCap className="h-6 w-6" />, 
      value: colleges.length.toString(), 
      label: "Partner Colleges",
      color: "from-green-500 to-green-600" 
    },
    { 
      icon: <TrendingUp className="h-6 w-6" />, 
      value: filteredCourses.length.toString(), 
      label: "Matching Results",
      color: "from-purple-500 to-purple-600" 
    },
    { 
      icon: <Award className="h-6 w-6" />, 
      value: "95%", 
      label: "Success Rate",
      color: "from-orange-500 to-orange-600" 
    }
  ];

  useEffect(() => {
    console.log("Total courses:", courses.length);
    console.log("Computer Science courses:", courses.filter(course => course.streams.includes('Computer Science')).length);
    console.log("Law courses:", courses.filter(course => course.streams.includes('Law')).length);
    console.log("Filtered courses:", filteredCourses.length);
    console.log("Selected stream:", selectedStream);
  }, [courses, filteredCourses, selectedStream]);
  
  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8 relative">
          <BackgroundDecorations variant="waves" />
          
          {/* Header Section */}
          <motion.section 
            className="relative z-10 text-center py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <GradientText variant="blue">Courses</GradientText> & {" "}
              <GradientText variant="green">Colleges</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect educational path with access to {courses.length} courses 
              and top-ranked colleges across India
            </p>
          </motion.section>

          {/* Stats Grid */}
          <motion.section 
            className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-4 text-center bg-white/60 border-0">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-3`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </motion.section>
          
          {/* Search and Filters */}
          <motion.section 
            className="relative z-10 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              viewMode={viewMode}
              setViewMode={setViewMode}
            />
            
            <StreamFilter 
              streamOptions={streamOptions}
              selectedStream={selectedStream}
              setSelectedStream={setSelectedStream}
              courseCounts={courseCounts}
            />
          </motion.section>
          
          {/* Main Content */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Tabs defaultValue="courses" className="space-y-6">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
                  <TabsTrigger value="courses" className="text-lg">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Courses
                  </TabsTrigger>
                  <TabsTrigger value="colleges" className="text-lg">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Colleges
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="courses" className="space-y-6">
                <CoursesContent 
                  isLoading={isLoading}
                  filteredCourses={filteredCourses}
                  viewMode={viewMode}
                  selectedStream={selectedStream}
                />
              </TabsContent>
              
              <TabsContent value="colleges" className="space-y-6">
                <CollegesContent 
                  isLoading={isLoading}
                  filteredColleges={filteredColleges}
                  viewMode={viewMode}
                />
              </TabsContent>
            </Tabs>
          </motion.section>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Courses;
