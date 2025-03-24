
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/layout/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Search, 
  Lightbulb, 
  GraduationCap, 
  BriefcaseBusiness, 
  Globe, 
  Presentation, 
  UserPlus, 
  Clock, 
  ScrollText,
  CheckCircle
} from 'lucide-react';

// Define the structure for expert tips
interface Tip {
  id: string;
  category: string;
  title: string;
  content: string;
  author: string;
  expertise: string;
}

const tips: Tip[] = [
  {
    id: "1",
    category: "academic",
    title: "Effective Study Techniques",
    content: "The Pomodoro Technique involves studying for 25 minutes followed by a 5-minute break. This method has been proven to increase focus and productivity. Try creating a dedicated study space free from distractions and use active recall methods like flashcards to test your knowledge rather than passive reading.",
    author: "Dr. Sarah Johnson",
    expertise: "Cognitive Learning Specialist"
  },
  {
    id: "2",
    category: "academic",
    title: "Mastering Time Management",
    content: "Create a weekly schedule blocking specific times for studying, extracurricular activities, and relaxation. Prioritize tasks using the Eisenhower Matrix (urgent/important). Start assignments early rather than cramming, and break large projects into smaller, manageable tasks with deadlines for each component.",
    author: "Prof. Michael Chen",
    expertise: "Educational Psychology"
  },
  {
    id: "3",
    category: "academic",
    title: "Note-Taking Strategies",
    content: "Consider using the Cornell Method with a column for main ideas and a larger section for details. Use mind maps for visual learners to connect related concepts. Review and revise notes within 24 hours to improve retention. Consider digital tools like Notion or OneNote for better organization.",
    author: "Dr. Lisa Rodriguez",
    expertise: "Learning Methodologies"
  },
  {
    id: "4",
    category: "career",
    title: "Building a Strong Resume",
    content: "Tailor your resume for each application by matching keywords from the job description. Quantify achievements where possible (e.g., 'increased efficiency by 20%'). Include relevant coursework and projects if you lack work experience. Keep the design clean and professional, and limit the length to 1-2 pages maximum.",
    author: "Robert Williams",
    expertise: "Career Counselor"
  },
  {
    id: "5",
    category: "career",
    title: "Networking for Students",
    content: "Start building your professional network early. Attend industry events, join relevant LinkedIn groups, and connect with alumni from your institution. Prepare a concise elevator pitch about yourself for networking opportunities. Always follow up after meeting new connections, and offer value before asking for favors.",
    author: "Jennifer Smith",
    expertise: "Professional Networking Coach"
  },
  {
    id: "6",
    category: "career",
    title: "Acing the Interview",
    content: "Research the company thoroughly before your interview. Prepare stories using the STAR method (Situation, Task, Action, Result) to demonstrate your skills. Practice common questions with a friend or mentor. Send a thank-you email within 24 hours of your interview, referencing specific discussion points.",
    author: "Daniel Park",
    expertise: "HR Director"
  },
  {
    id: "7",
    category: "personal",
    title: "Managing Stress and Anxiety",
    content: "Practice mindfulness meditation for 10 minutes daily to reduce stress. Maintain physical activity—even a 20-minute walk can boost mood. Ensure 7-8 hours of quality sleep per night. Don't hesitate to seek support from counselors or mental health services if feeling overwhelmed.",
    author: "Dr. Emma Thompson",
    expertise: "Clinical Psychologist"
  },
  {
    id: "8",
    category: "personal",
    title: "Financial Planning for Students",
    content: "Create a monthly budget tracking all income and expenses. Look for student discounts and use apps like Splitwise for shared expenses. Build an emergency fund, even if it's small. Consider part-time work that complements your study schedule, and apply for scholarships beyond freshman year.",
    author: "Marcus Lee",
    expertise: "Financial Advisor"
  },
  {
    id: "9",
    category: "personal",
    title: "Work-Life Balance",
    content: "Schedule regular breaks and leisure activities as non-negotiable time. Learn to set boundaries and say no when necessary. Use technology intentionally—schedule specific times to check emails and social media. Remember that perfect balance isn't always possible, but aim for harmony across different life areas.",
    author: "Dr. Nadia Patel",
    expertise: "Wellness Coach"
  }
];

const ExpertTips = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tip.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || tip.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'academic':
        return <BookOpen className="h-5 w-5" />;
      case 'career':
        return <BriefcaseBusiness className="h-5 w-5" />;
      case 'personal':
        return <UserPlus className="h-5 w-5" />;
      default:
        return <Lightbulb className="h-5 w-5" />;
    }
  };
  
  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8">
          <section className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">Expert Tips & Advice</h1>
              <p className="text-muted-foreground mt-1">
                Professional guidance to help you excel in academics, career, and personal development
              </p>
            </div>
            
            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search for tips and advice..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </section>
          
          {/* Featured tip */}
          <GlassCard className="p-6 bg-gradient-to-r from-primary/10 to-indigo-500/10 border-none">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="p-4 bg-primary/10 rounded-full h-fit">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Featured Insight</h3>
                  <p className="text-sm text-muted-foreground">From our experts</p>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "The key to success isn't just hard work, but smart work. Understanding how you learn best and adapting your strategy accordingly can make all the difference in your educational journey."
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Robert Williams</p>
                    <p className="text-sm text-muted-foreground">Education Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
          
          {/* Tips Categories */}
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="all">All Tips</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="personal">Personal</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTips.map(tip => (
                  <TipCard key={tip.id} tip={tip} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="academic" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTips.filter(tip => tip.category === 'academic').map(tip => (
                  <TipCard key={tip.id} tip={tip} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="career" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTips.filter(tip => tip.category === 'career').map(tip => (
                  <TipCard key={tip.id} tip={tip} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="personal" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTips.filter(tip => tip.category === 'personal').map(tip => (
                  <TipCard key={tip.id} tip={tip} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Expert Directory */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold flex items-center">
                <Presentation className="mr-2 h-5 w-5" />
                Meet Our Experts
              </h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ExpertCard 
                name="Dr. Sarah Johnson"
                expertise="Cognitive Learning Specialist"
                experience="15+ years"
                icon={<BookOpen className="h-5 w-5" />}
              />
              <ExpertCard 
                name="Robert Williams"
                expertise="Career Counselor"
                experience="10+ years"
                icon={<BriefcaseBusiness className="h-5 w-5" />}
              />
              <ExpertCard 
                name="Dr. Emma Thompson"
                expertise="Clinical Psychologist"
                experience="12+ years"
                icon={<UserPlus className="h-5 w-5" />}
              />
            </div>
          </section>
          
          {/* Tips for Success */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              Quick Tips for Success
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Academic Excellence</CardTitle>
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Create a consistent study schedule</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Use active recall instead of passive reviewing</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Join study groups for difficult subjects</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Use the 80/20 rule - focus on the most important content</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Career Preparation</CardTitle>
                    <BriefcaseBusiness className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Start building your portfolio early</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Seek internships in your field of interest</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Network with professionals in your target industry</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Develop both hard and soft skills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Personal Growth</CardTitle>
                    <UserPlus className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Practice mindfulness and stress management</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Maintain a healthy sleep schedule</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Build a support network of friends and mentors</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Set SMART goals for personal development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

// Tip Card Component
interface TipCardProps {
  tip: Tip;
}

const TipCard: React.FC<TipCardProps> = ({ tip }) => {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{tip.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Clock className="h-3 w-3 mr-1" />
              <span className="text-xs">4 min read</span>
            </CardDescription>
          </div>
          <div className="p-2 rounded-lg bg-primary/10">
            {getCategoryIcon(tip.category)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{tip.content}</p>
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <GraduationCap size={16} />
            </div>
            <div>
              <p className="text-sm font-medium">{tip.author}</p>
              <p className="text-xs text-muted-foreground">{tip.expertise}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="p-0">
            <ScrollText className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Expert Card Component
interface ExpertCardProps {
  name: string;
  expertise: string;
  experience: string;
  icon: React.ReactNode;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ name, expertise, experience, icon }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{expertise}</p>
          <div className="flex items-center gap-1 mt-2">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{experience}</span>
          </div>
          <Button variant="outline" size="sm" className="mt-4">View Profile</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpertTips;
