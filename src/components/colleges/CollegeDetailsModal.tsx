import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  School, 
  MapPin, 
  Calendar, 
  Users, 
  GraduationCap, 
  Trophy,
  ExternalLink,
  Phone,
  Mail,
  Building,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import { College } from '@/contexts/DataContext';

interface CollegeDetailsModalProps {
  college: College | null;
  isOpen: boolean;
  onClose: () => void;
}

const CollegeDetailsModal: React.FC<CollegeDetailsModalProps> = ({
  college,
  isOpen,
  onClose
}) => {
  if (!college) return null;

  // Parse contact_info and placement_stats from string if they're not already objects
  const contactInfo = typeof college.contact_info === 'string' 
    ? JSON.parse(college.contact_info) 
    : college.contact_info;
    
  const placementStats = typeof college.placement_stats === 'string' 
    ? JSON.parse(college.placement_stats) 
    : college.placement_stats;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <School className="h-6 w-6 text-primary" />
            {college.name}
          </DialogTitle>
          <div className="flex items-center gap-4 text-muted-foreground mt-2">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{college.location}</span>
            </div>
            {college.established_year && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Est. {college.established_year}</span>
              </div>
            )}
            <Badge variant="outline" className="bg-primary/10 text-primary">
              Rank #{college.ranking}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div>
            <p className="text-base leading-relaxed">{college.description}</p>
            {college.type && (
              <Badge variant="secondary" className="mt-2">
                {college.type}
              </Badge>
            )}
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {college.student_strength && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <h4 className="font-medium">Student Strength</h4>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">{college.student_strength.toLocaleString()}</p>
                  </div>
                )}

                {college.faculty_count && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-green-600" />
                      <h4 className="font-medium">Faculty Count</h4>
                    </div>
                    <p className="text-2xl font-bold text-green-600">{college.faculty_count}</p>
                  </div>
                )}

                {college.campus_size && (
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="h-5 w-5 text-purple-600" />
                      <h4 className="font-medium">Campus Size</h4>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">{college.campus_size}</p>
                  </div>
                )}

                {college.fee_structure && (
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5 text-orange-600" />
                      <h4 className="font-medium">Fee Structure</h4>
                    </div>
                    <p className="text-sm text-orange-700">{college.fee_structure}</p>
                  </div>
                )}
              </div>

              {college.unique_features && college.unique_features.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    Unique Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {college.unique_features.map((feature, index) => (
                      <Badge key={index} variant="outline">{feature}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {placementStats && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Placement Statistics
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    {placementStats.average_package && (
                      <div>
                        <span className="text-muted-foreground">Average Package:</span>
                        <p className="font-semibold">{placementStats.average_package}</p>
                      </div>
                    )}
                    {placementStats.highest_package && (
                      <div>
                        <span className="text-muted-foreground">Highest Package:</span>
                        <p className="font-semibold">{placementStats.highest_package}</p>
                      </div>
                    )}
                    {placementStats.placement_percentage && (
                      <div>
                        <span className="text-muted-foreground">Placement Rate:</span>
                        <p className="font-semibold">{placementStats.placement_percentage}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="academics" className="space-y-4 pt-4">
              {college.accreditation && college.accreditation.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Accreditation</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.accreditation.map((acc, index) => (
                      <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {acc}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {college.admission_process && (
                <div>
                  <h4 className="font-medium mb-2">Admission Process</h4>
                  <p className="text-sm bg-blue-50 p-3 rounded-lg">{college.admission_process}</p>
                </div>
              )}

              {college.notable_alumni && college.notable_alumni.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Notable Alumni</h4>
                  <div className="space-y-2">
                    {college.notable_alumni.map((alumni, index) => (
                      <div key={index} className="text-sm bg-purple-50 p-2 rounded border-l-4 border-purple-200">
                        {alumni}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="facilities" className="space-y-4 pt-4">
              {college.facilities && college.facilities.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {college.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <School className="h-4 w-4 text-primary" />
                      <span className="text-sm">{facility}</span>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="contact" className="space-y-4 pt-4">
              {contactInfo && (
                <div className="space-y-4">
                  {contactInfo.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{contactInfo.phone}</span>
                    </div>
                  )}
                  
                  {contactInfo.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{contactInfo.email}</span>
                    </div>
                  )}
                  
                  {contactInfo.address && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  )}
                </div>
              )}

              {college.website_url && (
                <div className="pt-4">
                  <a 
                    href={college.website_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Official Website
                  </a>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeDetailsModal;
