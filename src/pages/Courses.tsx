
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useData, Course, College } from '@/contexts/DataContext';
import MainLayout from '@/components/layout/MainLayout';
import GlassCard from '@/components/ui/GlassCard';
import PageTransition from '@/components/layout/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, BookOpen, School, ArrowRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const { user } = useAuth();
  const { courses, colleges } = useData();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState<string | null>(user?.stream || null);
  
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
  
  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8">
          <section className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">Courses & Colleges</h1>
              <p className="text-muted-foreground mt-1">
                Explore courses and top colleges in Chennai
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search courses or colleges..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant={selectedStream === null ? "default" : "outline"}
                  onClick={() => setSelectedStream(null)}
                >
                  All
                </Button>
                <Button 
                  variant={selectedStream === 'Science' ? "default" : "outline"}
                  onClick={() => setSelectedStream('Science')}
                >
                  Science
                </Button>
                <Button 
                  variant={selectedStream === 'Commerce' ? "default" : "outline"}
                  onClick={() => setSelectedStream('Commerce')}
                >
                  Commerce
                </Button>
                <Button 
                  variant={selectedStream === 'Arts' ? "default" : "outline"}
                  onClick={() => setSelectedStream('Arts')}
                >
                  Arts
                </Button>
              </div>
            </div>
          </section>
          
          {/* Tabs */}
          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="colleges">Colleges</TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses" className="space-y-6">
              {filteredCourses.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
                  <h3 className="mt-4 text-lg font-medium">No courses found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCourses.map((course) => (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      onClick={() => navigate(`/courses/${course.id}`)}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="colleges" className="space-y-6">
              {filteredColleges.length === 0 ? (
                <div className="text-center py-12">
                  <School className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
                  <h3 className="mt-4 text-lg font-medium">No colleges found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredColleges.map((college) => (
                    <CollegeCard 
                      key={college.id} 
                      college={college} 
                      onClick={() => navigate(`/colleges/${college.id}`)}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <GlassCard 
      className="p-5 hover:shadow-lg transition-all cursor-pointer scale-in-animation"
      onClick={onClick}
      variant="elevated"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-lg bg-indigo-100">
            <BookOpen className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="flex flex-wrap gap-1">
            {course.streams.map((stream) => (
              <span 
                key={stream} 
                className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full"
              >
                {stream}
              </span>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </div>
        
        <div className="pt-2 flex justify-between items-center">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm text-muted-foreground">{course.duration}</span>
          </div>
          <Button size="sm" variant="ghost" className="text-primary p-0">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

interface CollegeCardProps {
  college: College;
  onClick: () => void;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college, onClick }) => {
  return (
    <GlassCard 
      className="p-5 hover:shadow-lg transition-all cursor-pointer scale-in-animation"
      onClick={onClick}
      variant="elevated"
    >
      <div className="flex gap-4">
        <div className="p-2 h-fit rounded-lg bg-blue-100">
          <School className="h-6 w-6 text-blue-600" />
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{college.name}</h3>
            <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Rank #{college.ranking}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{college.location}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {college.description}
          </p>
          <div className="pt-2 flex justify-between items-center">
            <div className="flex flex-wrap gap-1">
              {college.courses.slice(0, 2).map((course, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full"
                >
                  {course.split(' ')[0]}
                </span>
              ))}
              {college.courses.length > 2 && (
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                  +{college.courses.length - 2}
                </span>
              )}
            </div>
            <Button size="sm" variant="ghost" className="text-primary p-0">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default Courses;
