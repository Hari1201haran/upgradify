
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
import { 
  Search, 
  Trophy, 
  TrendingUp, 
  Award,
  Star,
  MapPin,
  Users,
  BookOpen,
  Target,
  ExternalLink,
  Medal,
  Crown,
  Zap
} from 'lucide-react';
import { staggerContainer, slideUpVariants } from '@/utils/animation';

const NIRFRankings = () => {
  const { nirfRankings } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Overall');

  const categories = ['Overall', 'Engineering', 'Management', 'Pharmacy', 'Medical', 'Law', 'University'];

  const filteredRankings = nirfRankings.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Overall' || college.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { 
      icon: <Trophy className="h-6 w-6" />, 
      value: nirfRankings.length.toString(), 
      label: "Ranked Institutions",
      color: "from-yellow-500 to-orange-500" 
    },
    { 
      icon: <Award className="h-6 w-6" />, 
      value: categories.length.toString(), 
      label: "Categories",
      color: "from-blue-500 to-indigo-500" 
    },
    { 
      icon: <Star className="h-6 w-6" />, 
      value: "2024", 
      label: "Latest Rankings",
      color: "from-purple-500 to-pink-500" 
    },
    { 
      icon: <TrendingUp className="h-6 w-6" />, 
      value: "100%", 
      label: "Authentic Data",
      color: "from-green-500 to-teal-500" 
    }
  ];

  const topPerformers = filteredRankings.slice(0, 3);

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Medal className="h-6 w-6 text-orange-600" />;
    return <Trophy className="h-5 w-5 text-blue-500" />;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "from-yellow-400 to-yellow-600";
    if (rank === 2) return "from-gray-300 to-gray-500";
    if (rank === 3) return "from-orange-400 to-orange-600";
    if (rank <= 10) return "from-blue-400 to-blue-600";
    if (rank <= 50) return "from-green-400 to-green-600";
    return "from-purple-400 to-purple-600";
  };

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
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <GradientText variant="rainbow">NIRF Rankings</GradientText> 2024
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Official National Institutional Ranking Framework (NIRF) rankings 
              to help you choose the best institutions in India
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

          {/* Top Performers Spotlight */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="h-6 w-6 text-yellow-500" />
              Top Performers ({selectedCategory})
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {topPerformers.map((college, index) => (
                <GlassCard 
                  key={college.id} 
                  className={`p-6 bg-gradient-to-br ${
                    index === 0 ? 'from-yellow-50/80 to-orange-50/80' :
                    index === 1 ? 'from-gray-50/80 to-slate-50/80' :
                    'from-orange-50/80 to-red-50/80'
                  } border-0 hover:shadow-xl transition-all`}
                >
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center">
                      {getRankIcon(college.rank)}
                    </div>
                    <div>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${getRankColor(college.rank)} text-white text-2xl font-bold mb-3`}>
                        #{college.rank}
                      </div>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {college.name}
                      </h3>
                      <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4" />
                        {college.location}
                      </div>
                      <Badge className={`bg-gradient-to-r ${getRankColor(college.rank)} text-white border-0`}>
                        {college.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{college.score}</span>
                      <span className="text-sm text-muted-foreground">/ 100</span>
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
                  placeholder="Search institutions by name or location..."
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

          {/* Rankings Table */}
          <motion.section 
            className="relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-blue-500" />
              Complete Rankings ({filteredRankings.length} institutions)
            </h2>
            
            {filteredRankings.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
                <h3 className="mt-4 text-lg font-medium">No institutions found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or category filter
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredRankings.map((college, index) => (
                  <motion.div key={college.id} variants={slideUpVariants}>
                    <GlassCard className="p-6 bg-white/70 border-0 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-6">
                        {/* Rank */}
                        <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${getRankColor(college.rank)} text-white text-xl font-bold flex-shrink-0`}>
                          #{college.rank}
                        </div>
                        
                        {/* Institution Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg mb-2">
                            {college.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {college.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              {college.category}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {college.type}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">{college.category}</Badge>
                            <Badge variant="outline">{college.type}</Badge>
                          </div>
                        </div>
                        
                        {/* Score and Actions */}
                        <div className="text-right flex-shrink-0">
                          <div className="mb-3">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-lg font-bold">{college.score}</span>
                              <span className="text-sm text-muted-foreground">/ 100</span>
                            </div>
                            <p className="text-xs text-muted-foreground">NIRF Score</p>
                          </div>
                          <Button size="sm" variant="outline" className="gap-2">
                            View Details
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* Info Section */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <GlassCard className="p-8 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-0">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Target className="h-6 w-6 text-blue-500" />
                  <h3 className="text-2xl font-bold">About NIRF Rankings</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The National Institutional Ranking Framework (NIRF) was launched by the Ministry of Education, 
                  Government of India, to rank higher education institutions across the country. The ranking is 
                  based on five broad parameters: Teaching, Learning & Resources; Research and Professional Practice; 
                  Graduation Outcomes; Outreach and Inclusivity; and Perception.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 bg-white/50 rounded-lg">
                    <Award className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Comprehensive Evaluation</h4>
                    <p className="text-muted-foreground">Based on multiple parameters for holistic assessment</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Annual Updates</h4>
                    <p className="text-muted-foreground">Rankings updated every year for current information</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg">
                    <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Government Approved</h4>
                    <p className="text-muted-foreground">Official rankings by Ministry of Education</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.section>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default NIRFRankings;
