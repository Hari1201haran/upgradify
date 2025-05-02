
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookOpen, BriefcaseBusiness, GraduationCap, UserPlus, Globe, Clock, MapPin, Mail, Phone, Award } from 'lucide-react';

export interface ExpertDetails {
  id: string;
  name: string;
  expertise: string;
  experience: string;
  bio: string;
  education: string[];
  publications: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  avatarUrl?: string;
  type: 'academic' | 'career' | 'personal';
}

interface ExpertProfileModalProps {
  expert: ExpertDetails | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ExpertProfileModal: React.FC<ExpertProfileModalProps> = ({ expert, open, onOpenChange }) => {
  if (!expert) return null;
  
  const getExpertIcon = (type: string) => {
    switch(type) {
      case 'academic':
        return <BookOpen className="h-5 w-5" />;
      case 'career':
        return <BriefcaseBusiness className="h-5 w-5" />;
      case 'personal':
        return <UserPlus className="h-5 w-5" />;
      default:
        return <GraduationCap className="h-5 w-5" />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Expert Profile</DialogTitle>
          <DialogDescription>
            Learn more about our expert advisor
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center text-center py-4">
          <Avatar className="h-24 w-24 mb-4">
            {expert.avatarUrl ? (
              <AvatarImage src={expert.avatarUrl} />
            ) : (
              <AvatarFallback className="bg-primary/10">
                {expert.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            )}
          </Avatar>
          
          <div className="p-2 rounded-full bg-primary/10 mb-2">
            {getExpertIcon(expert.type)}
          </div>
          
          <h2 className="text-xl font-bold">{expert.name}</h2>
          <p className="text-muted-foreground">{expert.expertise}</p>
          <div className="flex items-center gap-1 mt-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{expert.experience}</span>
          </div>
        </div>
        
        <div className="space-y-4 text-left">
          <div>
            <h3 className="font-medium mb-1">About</h3>
            <p className="text-sm text-muted-foreground">{expert.bio}</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Education</h3>
            <ul className="space-y-1">
              {expert.education.map((edu, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <GraduationCap className="h-4 w-4 mt-0.5 text-primary" />
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Publications</h3>
            <ul className="space-y-1">
              {expert.publications.map((pub, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <Award className="h-4 w-4 mt-0.5 text-primary" />
                  <span>{pub}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Contact Information</h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{expert.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{expert.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{expert.contact.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
          <Button>Contact Expert</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExpertProfileModal;
