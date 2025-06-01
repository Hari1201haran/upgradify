
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { GraduationCap, User, Target, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import PageTransition from '@/components/layout/PageTransition';
import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import GradientText from '@/components/ui/GradientText';
import { toast } from 'sonner';
import { slideUpVariants } from '@/utils/animation';

const ProfileSetup = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    stream: '',
    interests: [] as string[],
    careerGoals: '',
    studyPreferences: [] as string[]
  });

  const streams = [
    { value: 'Computer Science', label: 'Computer Science & IT', description: 'Programming, AI, Software Development' },
    { value: 'Biology', label: 'Biology & Life Sciences', description: 'Medicine, Biotechnology, Research' },
    { value: 'Commerce', label: 'Commerce & Business', description: 'Finance, Marketing, Entrepreneurship' },
    { value: 'Arts', label: 'Arts & Humanities', description: 'Literature, Psychology, Social Sciences' },
    { value: 'Science', label: 'Physical Sciences', description: 'Physics, Chemistry, Mathematics' },
    { value: 'Law', label: 'Law & Legal Studies', description: 'Legal Practice, Judiciary, Corporate Law' }
  ];

  const interestOptions = [
    'Programming', 'Medicine', 'Teaching', 'Business', 'Research', 'Design',
    'Writing', 'Sports', 'Music', 'Technology', 'Environment', 'Social Work'
  ];

  const careerGoalOptions = [
    'Get a high-paying job',
    'Start my own business',
    'Pursue higher education',
    'Work in government sector',
    'Make a social impact',
    'Achieve work-life balance'
  ];

  const studyPreferenceOptions = [
    'Online courses',
    'Traditional classroom',
    'Hands-on projects',
    'Group discussions',
    'Self-paced learning',
    'Practical training'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleStudyPreferenceToggle = (preference: string) => {
    setFormData(prev => ({
      ...prev,
      studyPreferences: prev.studyPreferences.includes(preference)
        ? prev.studyPreferences.filter(p => p !== preference)
        : [...prev.studyPreferences, preference]
    }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.stream) {
      toast.error('Please select your stream');
      return;
    }
    if (step === 2 && formData.interests.length === 0) {
      toast.error('Please select at least one interest');
      return;
    }
    if (step === 3 && !formData.careerGoals) {
      toast.error('Please select your career goal');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleSubmit = async () => {
    if (formData.studyPreferences.length === 0) {
      toast.error('Please select at least one study preference');
      return;
    }

    setIsSubmitting(true);
    try {
      await updateUserProfile(formData);
      toast.success('Profile setup completed successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: 'Choose Stream', icon: <GraduationCap className="h-5 w-5" /> },
    { number: 2, title: 'Select Interests', icon: <Target className="h-5 w-5" /> },
    { number: 3, title: 'Career Goals', icon: <Lightbulb className="h-5 w-5" /> },
    { number: 4, title: 'Study Preferences', icon: <User className="h-5 w-5" /> }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 relative overflow-hidden">
        <BackgroundDecorations variant="default" />
        
        <div className="w-full max-w-4xl relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <GradientText variant="blue" className="text-3xl font-bold">
                After School
              </GradientText>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Complete Your <GradientText variant="rainbow">Profile</GradientText>
            </h1>
            <p className="text-muted-foreground text-lg">
              Help us personalize your experience with just a few quick questions
            </p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-4 md:space-x-8">
              {steps.map((stepItem, index) => (
                <div key={stepItem.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
                    step >= stepItem.number 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step > stepItem.number ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      stepItem.icon
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className={`text-sm font-medium ${
                      step >= stepItem.number ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      Step {stepItem.number}
                    </p>
                    <p className={`text-xs ${
                      step >= stepItem.number ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      {stepItem.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 md:w-16 h-0.5 mx-4 transition-all ${
                      step > stepItem.number ? 'bg-blue-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            key={step}
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
          >
            <GlassCard className="p-8 md:p-12 bg-white/80 backdrop-blur-lg border-0">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Choose Your Academic Stream</h2>
                    <p className="text-muted-foreground">
                      Select the stream that best matches your current studies or interests
                    </p>
                  </div>
                  
                  <RadioGroup 
                    value={formData.stream} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, stream: value }))}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    {streams.map((stream) => (
                      <div key={stream.value} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-all cursor-pointer">
                        <RadioGroupItem value={stream.value} id={stream.value} />
                        <div className="flex-1">
                          <Label htmlFor={stream.value} className="font-medium cursor-pointer">
                            {stream.label}
                          </Label>
                          <p className="text-sm text-muted-foreground">{stream.description}</p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">What Are Your Interests?</h2>
                    <p className="text-muted-foreground">
                      Select areas that genuinely interest you (choose multiple)
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {interestOptions.map((interest) => (
                      <div 
                        key={interest} 
                        className={`flex items-center space-x-3 p-4 rounded-lg border transition-all cursor-pointer ${
                          formData.interests.includes(interest) 
                            ? 'bg-blue-50 border-blue-200' 
                            : 'hover:bg-gray-50'
                        }`}
                        onClick={() => handleInterestToggle(interest)}
                      >
                        <Checkbox 
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                        />
                        <Label className="cursor-pointer font-medium">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">What's Your Primary Career Goal?</h2>
                    <p className="text-muted-foreground">
                      Choose the option that best describes your main career aspiration
                    </p>
                  </div>
                  
                  <RadioGroup 
                    value={formData.careerGoals} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, careerGoals: value }))}
                    className="space-y-3"
                  >
                    {careerGoalOptions.map((goal) => (
                      <div key={goal} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-all cursor-pointer">
                        <RadioGroupItem value={goal} id={goal} />
                        <Label htmlFor={goal} className="font-medium cursor-pointer">
                          {goal}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">How Do You Prefer to Learn?</h2>
                    <p className="text-muted-foreground">
                      Select your preferred learning methods (choose multiple)
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {studyPreferenceOptions.map((preference) => (
                      <div 
                        key={preference} 
                        className={`flex items-center space-x-3 p-4 rounded-lg border transition-all cursor-pointer ${
                          formData.studyPreferences.includes(preference) 
                            ? 'bg-blue-50 border-blue-200' 
                            : 'hover:bg-gray-50'
                        }`}
                        onClick={() => handleStudyPreferenceToggle(preference)}
                      >
                        <Checkbox 
                          checked={formData.studyPreferences.includes(preference)}
                          onChange={() => handleStudyPreferenceToggle(preference)}
                        />
                        <Label className="cursor-pointer font-medium">
                          {preference}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-12">
                <div>
                  {step > 1 && (
                    <Button 
                      variant="outline" 
                      onClick={() => setStep(prev => prev - 1)}
                      className="px-8"
                    >
                      Previous
                    </Button>
                  )}
                </div>
                
                <div>
                  {step < 4 ? (
                    <Button 
                      onClick={handleNext}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 px-8"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-green-500 to-teal-500 px-8"
                    >
                      {isSubmitting ? 'Saving...' : 'Complete Setup'}
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProfileSetup;
