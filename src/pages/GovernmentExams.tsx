
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useData } from '@/contexts/DataContext';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/layout/PageTransition';
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import GradientText from '@/components/ui/GradientText';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import EligibilityFilter from '@/components/exams/EligibilityFilter';
import ExamDetailsModal from '@/components/exams/ExamDetailsModal';
import { 
  Search, 
  FileText, 
  Calendar, 
  Users, 
  Award,
  Clock,
  BookOpen,
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { staggerContainer, slideUpVariants } from '@/utils/animation';

const GovernmentExams = () => {
  const { governmentExams } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEligibility, setSelectedEligibility] = useState<string>('All');
  const [selectedExam, setSelectedExam] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredExams = governmentExams.filter(exam => {
    const matchesSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEligibility = selectedEligibility === 'All' || exam.eligibility.includes(selectedEligibility);
    return matchesSearch && matchesEligibility;
  });

  const eligibilityOptions = ['All', 'Graduate', '12th Pass', 'Diploma', 'Post Graduate'];

  const handleExamClick = (exam: any) => {
    setSelectedExam(exam);
    setIsModalOpen(true);
  };

  const stats = [
    { 
      icon: <FileText className="h-6 w-6" />, 
      value: governmentExams.length.toString(), 
      label: "Total Exams",
      color: "from-blue-500 to-blue-600" 
    },
    { 
      icon: <Users className="h-6 w-6" />, 
      value: "50K+", 
      label: "Registered Students",
      color: "from-green-500 to-green-600" 
    },
    { 
      icon: <Award className="h-6 w-6" />, 
      value: "85%", 
      label: "Success Rate",
      color: "from-purple-500 to-purple-600" 
    },
    { 
      icon: <TrendingUp className="h-6 w-6" />, 
      value: "2024", 
      label: "Active Year",
      color: "from-orange-500 to-orange-600" 
    }
  ];

  const upcomingExams = filteredExams.filter(exam => {
    const examDate = new Date(exam.applicationDeadline);
    const today = new Date();
    return examDate > today;
  }).slice(0, 3);

  const examCategories = [
    { name: "Engineering", count: 8, color: "from-blue-500 to-indigo-500" },
    { name: "Banking", count: 12, color: "from-green-500 to-teal-500" },
    { name: "Civil Services", count: 6, color: "from-purple-500 to-pink-500" },
    { name: "Defense", count: 5, color: "from-red-500 to-orange-500" },
    { name: "Railways", count: 10, color: "from-yellow-500 to-amber-500" },
    { name: "Teaching", count: 7, color: "from-indigo-500 to-purple-500" }
  ];

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
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <GradientText variant="green">Government Exams</GradientText> & Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive information about government exams, eligibility criteria, 
              and preparation guidelines to help you secure your dream job
            </p>
          </motion.section>

          {/* Stats Section */}
          <motion.section 
            className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-6 text-center bg-white/60 border-0 hover:shadow-lg transition-all">
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

          {/* Exam Categories */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-500" />
              Exam Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {examCategories.map((category, index) => (
                <GlassCard key={index} className="p-4 text-center bg-white/70 border-0 hover:shadow-lg transition-all cursor-pointer">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} exams</p>
                </GlassCard>
              ))}
            </div>
          </motion.section>

          {/* Upcoming Deadlines */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-red-500" />
              Upcoming Application Deadlines
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingExams.map((exam, index) => (
                <GlassCard key={index} className="p-6 bg-gradient-to-br from-red-50/80 to-orange-50/80 border-0 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="destructive" className="text-xs">
                      Deadline Soon
                    </Badge>
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{exam.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {exam.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Deadline: {exam.applicationDeadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Age: {exam.ageLimit}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-gradient-to-r from-red-500 to-orange-500"
                    onClick={() => handleExamClick(exam)}
                  >
                    Apply Now
                  </Button>
                </GlassCard>
              ))}
            </div>
          </motion.section>

          {/* Search and Filter */}
          <motion.section 
            className="relative z-10 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search government exams..."
                  className="pl-10 bg-white/80 backdrop-blur-sm border-0 shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <EligibilityFilter 
                eligibilityOptions={eligibilityOptions}
                selectedEligibility={selectedEligibility}
                setSelectedEligibility={setSelectedEligibility}
              />
            </div>
          </motion.section>

          {/* Exams Grid */}
          <motion.section 
            className="relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-green-500" />
              All Government Exams ({filteredExams.length})
            </h2>
            
            {filteredExams.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
                <h3 className="mt-4 text-lg font-medium">No exams found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map((exam, index) => (
                  <motion.div key={exam.id} variants={slideUpVariants}>
                    <GlassCard 
                      className="p-6 hover:shadow-xl transition-all cursor-pointer bg-white/70 border-0"
                      onClick={() => handleExamClick(exam)}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                              {exam.name}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                              {exam.description}
                            </p>
                          </div>
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 ml-2" />
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Deadline: {exam.applicationDeadline}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>Age: {exam.ageLimit}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {exam.eligibility.slice(0, 2).map((req, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                          {exam.eligibility.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{exam.eligibility.length - 2} more
                            </Badge>
                          )}
                        </div>
                        
                        <Button 
                          className="w-full bg-gradient-to-r from-green-500 to-teal-500"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExamClick(exam);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* Exam Details Modal */}
          <ExamDetailsModal
            exam={selectedExam}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default GovernmentExams;
