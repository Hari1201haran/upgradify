
import React from 'react';
import { Career, Course } from '@/contexts/DataContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Clock, Briefcase, GraduationCap } from 'lucide-react';

interface CourseDetailsModalProps {
  course: Course | null;
  relatedCareers: Career[];
  isOpen: boolean;
  onClose: () => void;
}

const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({
  course,
  relatedCareers,
  isOpen,
  onClose
}) => {
  if (!course) return null;

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

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center">
              <Briefcase className="h-5 w-5 mr-2" />
              Related Careers ({relatedCareers.length})
            </h3>

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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailsModal;
