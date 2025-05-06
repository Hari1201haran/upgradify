
import React from 'react';
import { Career, Course, GovernmentExam } from '@/contexts/DataContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Clock, Briefcase, GraduationCap } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface CourseDetailsModalProps {
  course: Course | null;
  relatedCareers: Career[];
  relatedExams: GovernmentExam[];
  isOpen: boolean;
  onClose: () => void;
}

const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({
  course,
  relatedCareers,
  relatedExams,
  isOpen,
  onClose
}) => {
  const { user } = useAuth();
  
  if (!course) return null;

  // Filter exams based on age eligibility
  const filteredExams = relatedExams.filter(exam => {
    // If no age is specified, show all exams
    if (!user?.age) return true;
    
    // Check eligibility rules based on age
    // Most government exams have age limits in the 18-32 range
    if (user.age > 32) {
      // Filter out exams that typically have upper age limits
      return !['UPSC', 'SSC', 'Banking', 'NDA', 'CDS'].some(
        keyword => exam.title.includes(keyword)
      );
    } else if (user.age < 18) {
      // Show only exams that are available for minors
      return ['NTSE', 'Olympiad', 'NEET', 'JEE', 'Class', 'NDA', 'Foundation'].some(
        keyword => exam.title.includes(keyword) || 
        (Array.isArray(exam.eligibility) ? 
          exam.eligibility.some(e => typeof e === 'string' && e.includes('Class')) :
          exam.eligibility.includes('Class'))
      );
    }
    
    // Show all exams for ages 18-32
    return true;
  });

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{course.title}</DialogTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {course.streams.map((stream) => (
              <Badge key={stream} variant="secondary">{stream}</Badge>
            ))}
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="space-y-2">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span>{course.duration}</span>
            </div>
            
            <p className="text-base">{course.description}</p>
          </div>

          <Separator />

          <Tabs defaultValue="careers" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="careers">
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Careers ({relatedCareers.length})
                </div>
              </TabsTrigger>
              <TabsTrigger value="exams">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Exams ({filteredExams.length})
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="careers" className="space-y-4 pt-4">
              {relatedCareers.length === 0 ? (
                <p className="text-muted-foreground">No related careers found for this course.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedCareers.map((career) => (
                    <div key={career.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-medium">{career.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{career.description}</p>
                      <div className="mt-2 flex items-center">
                        <GraduationCap className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">{career.jobOutlook}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="exams" className="space-y-4 pt-4">
              {filteredExams.length === 0 ? (
                <p className="text-muted-foreground">
                  {user?.age && (user.age > 32 || user.age < 18) ? 
                    "No eligible government exams found for your age. Some exams have age restrictions." : 
                    "No related government exams found for this course."}
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredExams.map((exam) => (
                    <div key={exam.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-medium">{exam.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{exam.description}</p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                          <span className="text-xs text-muted-foreground">Prep: {exam.preparationTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {typeof exam.eligibility === 'string' ? (
                            <Badge variant="outline" className="text-xs">{exam.eligibility}</Badge>
                          ) : (
                            exam.eligibility.slice(0, 1).map((req, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{req}</Badge>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsModal;
