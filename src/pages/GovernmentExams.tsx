
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useData, GovernmentExam } from '@/contexts/DataContext';
import MainLayout from '@/components/layout/MainLayout';
import GlassCard from '@/components/ui/GlassCard';
import PageTransition from '@/components/layout/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, GraduationCap, Clock, Users, BookOpenCheck, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GovernmentExams = () => {
  const { user } = useAuth();
  const { governmentExams, isLoading } = useData();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState<string | null>(user?.stream || null);
  
  const filteredExams = governmentExams.filter(exam => {
    const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStream = selectedStream ? exam.streams.includes(selectedStream) : true;
    
    return matchesSearch && matchesStream;
  });
  
  const generalExams = filteredExams.filter(exam => 
    exam.streams.length >= 3
  );
  
  const streamSpecificExams = filteredExams.filter(exam => 
    exam.streams.length < 3 && 
    (selectedStream ? exam.streams.includes(selectedStream) : true)
  );
  
  // Count exams per stream
  const examCounts = {
    'Computer Science': governmentExams.filter(exam => exam.streams.includes('Computer Science')).length,
    'Biology': governmentExams.filter(exam => exam.streams.includes('Biology')).length,
    'Commerce': governmentExams.filter(exam => exam.streams.includes('Commerce')).length,
    'Arts': governmentExams.filter(exam => exam.streams.includes('Arts')).length,
    'Science': governmentExams.filter(exam => exam.streams.includes('Science')).length,
    'All': governmentExams.length
  };

  // Define stream options
  const streamOptions = ['Computer Science', 'Biology', 'Commerce', 'Arts', 'Science'];

  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8">
          <section className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">Government Exams</h1>
              <p className="text-muted-foreground mt-1">
                Explore {governmentExams.length} government exam opportunities for 12th standard students
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search exams..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Button 
                  variant={selectedStream === null ? "default" : "outline"}
                  onClick={() => setSelectedStream(null)}
                >
                  All ({examCounts['All']})
                </Button>
                {streamOptions.map(stream => (
                  <Button 
                    key={stream}
                    variant={selectedStream === stream ? "default" : "outline"}
                    onClick={() => setSelectedStream(stream)}
                  >
                    {stream} ({examCounts[stream]})
                  </Button>
                ))}
              </div>
            </div>
          </section>
          
          {/* Tabs */}
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All Exams</TabsTrigger>
              <TabsTrigger value="stream-specific">Stream Specific</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              {isLoading ? (
                <div className="flex justify-center p-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : filteredExams.length === 0 ? (
                <div className="text-center py-12">
                  <Award className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
                  <h3 className="mt-4 text-lg font-medium">No exams found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">
                      Found {filteredExams.length} government exams
                      {selectedStream ? ` for ${selectedStream}` : ''}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredExams.map((exam) => (
                      <ExamCard 
                        key={exam.id} 
                        exam={exam}
                      />
                    ))}
                  </div>
                </>
              )}
            </TabsContent>
            
            <TabsContent value="stream-specific" className="space-y-6">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">General Exams ({generalExams.length})</h2>
                {isLoading ? (
                  <div className="flex justify-center p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                  </div>
                ) : generalExams.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No general exams found</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {generalExams.map((exam) => (
                      <ExamCard key={exam.id} exam={exam} />
                    ))}
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Stream-Specific Exams ({streamSpecificExams.length})</h2>
                {isLoading ? (
                  <div className="flex justify-center p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                  </div>
                ) : streamSpecificExams.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No stream-specific exams found</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {streamSpecificExams.map((exam) => (
                      <ExamCard key={exam.id} exam={exam} />
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

interface ExamCardProps {
  exam: GovernmentExam;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam }) => {
  return (
    <GlassCard 
      className="p-5 hover:shadow-lg transition-all scale-in-animation"
      variant="elevated"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-lg bg-purple-100">
            <Award className="h-5 w-5 text-purple-600" />
          </div>
          <div className="flex flex-wrap gap-1">
            {exam.streams && exam.streams.length > 0 && exam.streams.map((stream) => (
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
          <h3 className="text-lg font-semibold">{exam.title}</h3>
          <p className="text-sm text-muted-foreground">
            {exam.description}
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Eligibility:</span>
          </div>
          <ul className="text-sm text-muted-foreground pl-6 space-y-1 list-disc">
            {typeof exam.eligibility === 'string' ? (
              <li>{exam.eligibility}</li>
            ) : (
              exam.eligibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            )}
          </ul>
        </div>
        
        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Preparation: {exam.preparationTime}</span>
          </div>
          <Button size="sm" variant="outline" className="text-primary">
            <BookOpenCheck className="h-4 w-4 mr-1" />
            Explore
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default GovernmentExams;
