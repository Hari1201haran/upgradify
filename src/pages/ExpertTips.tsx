import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/layout/PageTransition';
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import GradientText from '@/components/ui/GradientText';
import GlassCard from '@/components/ui/GlassCard';
import ExpertProfileModal from '@/components/experts/ExpertProfileModal';
import UserInteractionsPanel from '@/components/experts/UserInteractionsPanel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  Lightbulb, 
  Search, 
  Filter, 
  Star, 
  BookOpen, 
  TrendingUp,
  Users,
  Award,
  MessageCircle,
  ThumbsUp,
  Eye,
  Clock
} from 'lucide-react';
import { expertsData } from '@/data/expertsData';
import { staggerContainer, slideUpVariants } from '@/utils/animation';

const ExpertTips = () => {
  const [selectedExpert, setSelectedExpert] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Career Guidance', 'Academic Planning', 'Skill Development', 'Industry Insights'];

  const filteredExperts = expertsData.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || expert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleExpertClick = (expert: any) => {
    setSelectedExpert(expert);
    setIsModalOpen(true);
  };

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: expertsData.length.toString(), label: "Expert Mentors", color: "from-blue-500 to-blue-600" },
    { icon: <MessageCircle className="h-6 w-6" />, value: "2.5K+", label: "Tips Shared", color: "from-green-500 to-green-600" },
    { icon: <Star className="h-6 w-6" />, value: "4.9", label: "Average Rating", color: "from-yellow-500 to-yellow-600" },
    { icon: <Award className="h-6 w-6" />, value: "98%", label: "Success Rate", color: "from-purple-500 to-purple-600" }
  ];

  const featuredTips = [
    {
      title: "How to Choose the Right Engineering Branch",
      expert: "Dr. Rajesh Kumar",
      category: "Career Guidance",
      views: 1234,
      likes: 89,
      timeAgo: "2 days ago",
      snippet: "Understanding your interests and market demand is crucial when selecting an engineering specialization..."
    },
    {
      title: "Building a Strong Foundation in Mathematics",
      expert: "Prof. Anita Sharma",
      category: "Academic Planning",
      views: 2156,
      likes: 156,
      timeAgo: "5 days ago",
      snippet: "Mathematics forms the backbone of many technical fields. Here's how to master it effectively..."
    },
    {
      title: "Industry 4.0: Skills You Need to Learn Now",
      expert: "Vikram Singh",
      category: "Skill Development",
      views: 3421,
      likes: 234,
      timeAgo: "1 week ago",
      snippet: "The future of work is changing rapidly. These are the essential skills for tomorrow's workforce..."
    }
  ];

  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8 relative">
          <BackgroundDecorations variant="gradient" />
          
          {/* Header Section */}
          <motion.section 
            className="relative z-10 text-center py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <GradientText variant="rainbow">Expert Tips</GradientText> & Guidance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get personalized advice from industry professionals and academic experts 
              to accelerate your career growth and academic success
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

          {/* Featured Tips Section */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              Trending Expert Tips
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredTips.map((tip, index) => (
                <GlassCard key={index} className="p-6 bg-gradient-to-br from-white/80 to-gray-50/80 border-0 hover:shadow-xl transition-all cursor-pointer">
                  <div className="space-y-4">
                    <Badge variant="outline" className="text-xs">
                      {tip.category}
                    </Badge>
                    <h3 className="font-bold text-lg leading-tight">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {tip.snippet}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>by {tip.expert}</span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {tip.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          {tip.likes}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {tip.timeAgo}
                      </div>
                      <Button size="sm" variant="outline">
                        Read More
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.section>

          {/* Search and Filter */}
          <motion.section 
            className="relative z-10 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search experts by name or specialization..."
                  className="pl-10 bg-white/80 backdrop-blur-sm border-0 shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Experts Grid */}
          <motion.section 
            className="relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-500" />
              Meet Our Expert Mentors
            </h2>
            
            {filteredExperts.length === 0 ? (
              <div className="text-center py-12">
                <Lightbulb className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
                <h3 className="mt-4 text-lg font-medium">No experts found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExperts.map((expert, index) => (
                  <motion.div key={expert.id} variants={slideUpVariants}>
                    <GlassCard 
                      className="p-6 hover:shadow-xl transition-all cursor-pointer bg-gradient-to-br from-white/90 to-blue-50/30 border-0"
                      onClick={() => handleExpertClick(expert)}
                    >
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16 border-2 border-white shadow-md">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold">
                            {expert.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg truncate">{expert.name}</h3>
                          <p className="text-sm text-blue-600 font-medium mb-2">{expert.specialization}</p>
                          <div className="flex items-center gap-1 mb-3">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{expert.rating}</span>
                            <span className="text-xs text-muted-foreground">({expert.reviews} reviews)</span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {expert.bio}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-xs">
                              {expert.experience}
                            </Badge>
                            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-indigo-500">
                              Connect
                            </Button>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* User Interactions Panel */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <UserInteractionsPanel />
          </motion.section>

          {/* Expert Profile Modal */}
          <ExpertProfileModal
            expert={selectedExpert}
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default ExpertTips;
