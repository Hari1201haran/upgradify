
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useData, Career } from '@/contexts/DataContext';
import MainLayout from '@/components/layout/MainLayout';
import GlassCard from '@/components/ui/GlassCard';
import PageTransition from '@/components/layout/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, Filter, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  const { user } = useAuth();
  const { careers } = useData();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState<string | null>(user?.stream || null);
  
  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStream = selectedStream ? career.streams.includes(selectedStream) : true;
    
    return matchesSearch && matchesStream;
  });
  
  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8">
          <section className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">Explore Careers</h1>
              <p className="text-muted-foreground mt-1">
                Discover career options based on your interests and academic stream
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search careers..."
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
          
          {/* Career List */}
          <section className="space-y-6">
            {filteredCareers.length === 0 ? (
              <div className="text-center py-12">
                <GraduationCap className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
                <h3 className="mt-4 text-lg font-medium">No careers found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCareers.map((career) => (
                  <CareerCard 
                    key={career.id} 
                    career={career} 
                    onClick={() => navigate(`/careers/${career.id}`)}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

interface CareerCardProps {
  career: Career;
  onClick: () => void;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, onClick }) => {
  return (
    <GlassCard 
      className="p-5 hover:shadow-lg transition-all cursor-pointer scale-in-animation"
      onClick={onClick}
      variant="elevated"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-lg bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-wrap gap-1">
            {career.streams.map((stream) => (
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
          <h3 className="text-lg font-semibold">{career.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {career.description}
          </p>
        </div>
        
        <div className="pt-2 flex justify-between items-center">
          <div className="flex flex-wrap gap-1">
            {career.interests.slice(0, 2).map((interest) => (
              <span 
                key={interest} 
                className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full"
              >
                {interest}
              </span>
            ))}
            {career.interests.length > 2 && (
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                +{career.interests.length - 2}
              </span>
            )}
          </div>
          <Button size="sm" variant="ghost" className="text-primary p-0">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default Careers;
