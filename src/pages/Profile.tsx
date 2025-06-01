
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/components/layout/MainLayout';
import PageTransition from '@/components/layout/PageTransition';
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import GradientText from '@/components/ui/GradientText';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Edit3, 
  Save, 
  Mail, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Trophy,
  Target,
  Star,
  Award,
  TrendingUp,
  Settings,
  Shield
} from 'lucide-react';
import { staggerContainer, slideUpVariants } from '@/utils/animation';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: '',
    location: '',
    bio: '',
    interests: user?.interests || [],
    goals: ''
  });

  const achievements = [
    { icon: <Trophy className="h-5 w-5" />, title: "Profile Complete", description: "100% profile completion", color: "from-yellow-500 to-orange-500" },
    { icon: <BookOpen className="h-5 w-5" />, title: "Course Explorer", description: "Viewed 50+ courses", color: "from-blue-500 to-indigo-500" },
    { icon: <Target className="h-5 w-5" />, title: "Goal Setter", description: "Set career goals", color: "from-green-500 to-teal-500" },
    { icon: <Star className="h-5 w-5" />, title: "Early Adopter", description: "One of first 100 users", color: "from-purple-500 to-pink-500" }
  ];

  const stats = [
    { value: "25", label: "Courses Viewed", icon: <BookOpen className="h-5 w-5" /> },
    { value: "8", label: "Career Paths Explored", icon: <Target className="h-5 w-5" /> },
    { value: "12", label: "Expert Tips Read", icon: <Star className="h-5 w-5" /> },
    { value: "95%", label: "Profile Completion", icon: <Award className="h-5 w-5" /> }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8 relative">
          <BackgroundDecorations variant="dots" />
          
          {/* Header Section */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-0">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="relative">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
                    <AvatarImage src="" alt={user?.fullName} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-3xl font-bold">
                      {user?.fullName?.split(' ').map(n => n[0]).join('') || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 p-2 bg-green-500 rounded-full">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">
                      <GradientText variant="blue">{user?.fullName}</GradientText>
                    </h1>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {user?.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Joined December 2024
                      </div>
                      {user?.stream && (
                        <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500">
                          {user.stream}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    Ambitious student exploring career opportunities and building a strong foundation for future success.
                  </p>
                  
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => setIsEditing(!isEditing)}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500"
                    >
                      <Edit3 className="h-4 w-4 mr-2" />
                      {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                    </Button>
                    {isEditing && (
                      <Button onClick={handleSave} variant="outline">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.section>

          {/* Stats Section */}
          <motion.section 
            className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={slideUpVariants}>
                <GlassCard className="p-6 text-center bg-white/60 border-0 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3 text-blue-500">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.section>

          {/* Main Content */}
          <motion.section 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 h-12">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="edit">Edit Profile</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <GlassCard className="p-6 bg-white/70 border-0">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <User className="h-5 w-5 text-blue-500" />
                      Personal Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Full Name</Label>
                        <p className="font-medium">{user?.fullName}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                        <p className="font-medium">{user?.email}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Stream</Label>
                        <p className="font-medium">{user?.stream || 'Not specified'}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                        <p className="font-medium">Mumbai, India</p>
                      </div>
                    </div>
                  </GlassCard>

                  {/* Interests & Goals */}
                  <GlassCard className="p-6 bg-white/70 border-0">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-500" />
                      Interests & Goals
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground mb-2 block">Interests</Label>
                        <div className="flex flex-wrap gap-2">
                          {user?.interests?.map((interest, index) => (
                            <Badge key={index} variant="outline">
                              {interest}
                            </Badge>
                          )) || <p className="text-muted-foreground">No interests added yet</p>}
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Career Goals</Label>
                        <p className="font-medium">
                          Seeking opportunities in technology and innovation to make a positive impact on society.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </TabsContent>
              
              <TabsContent value="edit" className="space-y-6">
                <GlassCard className="p-6 bg-white/70 border-0">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Edit3 className="h-5 w-5 text-blue-500" />
                    Edit Your Profile
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          rows={4}
                          value={formData.bio}
                          onChange={(e) => handleInputChange('bio', e.target.value)}
                          placeholder="Tell us about yourself..."
                        />
                      </div>
                      <div>
                        <Label htmlFor="goals">Career Goals</Label>
                        <Textarea
                          id="goals"
                          rows={3}
                          value={formData.goals}
                          onChange={(e) => handleInputChange('goals', e.target.value)}
                          placeholder="What are your career aspirations?"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 mt-6">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-gradient-to-r from-blue-500 to-indigo-500">
                      Save Changes
                    </Button>
                  </div>
                </GlassCard>
              </TabsContent>
              
              <TabsContent value="achievements" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <GlassCard className={`p-6 bg-gradient-to-br ${achievement.color}/10 border-0 hover:shadow-lg transition-all`}>
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white`}>
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">
                              {achievement.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {achievement.description}
                            </p>
                            <div className="mt-3 flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium">Achievement Unlocked</span>
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.section>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Profile;
