
import React from 'react';
import { GovernmentExam } from '@/contexts/DataContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Award, Clock, Users, CalendarClock, BookOpen } from 'lucide-react';

interface ExamDetailsModalProps {
  exam: GovernmentExam | null;
  isOpen: boolean;
  onClose: () => void;
}

const ExamDetailsModal: React.FC<ExamDetailsModalProps> = ({
  exam,
  isOpen,
  onClose
}) => {
  if (!exam) return null;

  // Check if the exam is eligible for 12th pass students
  const isClass12Exam = typeof exam.eligibility === 'string' ? 
    exam.eligibility.toLowerCase().includes('class 12') : 
    exam.eligibility.some(e => e.toLowerCase().includes('class 12'));

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Award className="h-6 w-6 text-purple-600" />
            {exam.title}
          </DialogTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {exam.streams.map((stream) => (
              <Badge key={stream} variant="secondary">{stream}</Badge>
            ))}
            {isClass12Exam && (
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                12th Pass Eligible
              </Badge>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <DialogDescription className="text-base text-foreground">
            {exam.description}
          </DialogDescription>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              Eligibility Criteria
            </h3>
            <div className="bg-muted/50 rounded-lg p-4">
              {typeof exam.eligibility === 'string' ? (
                <p>{exam.eligibility}</p>
              ) : (
                <ul className="list-disc pl-5 space-y-1">
                  {exam.eligibility.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Preparation Time:</span>
              <span>{exam.preparationTime}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              Study Tips
            </h3>
            <div className="bg-muted/50 rounded-lg p-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>Create a structured study plan focusing on exam-specific subjects</li>
                <li>Practice with previous years' question papers</li>
                <li>Join coaching or online platforms for expert guidance</li>
                <li>Form study groups with peers preparing for the same exam</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <CalendarClock className="h-5 w-5 text-muted-foreground" />
              Important Dates
            </h3>
            <p className="text-sm text-muted-foreground">
              Most government exams are conducted annually. Check the official website for the latest 
              notification, application dates, and examination schedule.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExamDetailsModal;
