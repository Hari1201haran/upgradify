
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/components/layout/MainLayout';
import GlassCard from '@/components/ui/GlassCard';
import PageTransition from '@/components/layout/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { User, Mail, Phone, GraduationCap, Save, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from "sonner";

const STREAMS = ['Science', 'Commerce', 'Arts'] as const;

const INTERESTS = [
  'Technology', 'Coding', 'Mathematics', 'Problem Solving',
  'Biology', 'Chemistry', 'Physics', 'Research',
  'Finance', 'Economics', 'Business', 'Management',
  'Literature', 'History', 'Psychology', 'Sociology',
  'Design', 'Art', 'Music', 'Communication'
];

const Profile = () => {
  const { user, updateProfile } = useAuth();
  
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [mobile, setMobile] = useState(user?.mobile || '');
  const [stream, setStream] = useState<string>(user?.stream || 'Science');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    user?.interests || []
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      if (selectedInterests.length < 5) {
        setSelectedInterests([...selectedInterests, interest]);
      } else {
        toast.warning("You can select up to 5 interests");
      }
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      updateProfile({
        fullName,
        email,
        mobile,
        stream: stream as 'Science' | 'Commerce' | 'Arts',
        interests: selectedInterests
      });
      
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
      console.error('Failed to update profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8 max-w-4xl mx-auto">
          <section className="space-y-2">
            <h1 className="text-3xl font-bold">Your Profile</h1>
            <p className="text-muted-foreground">
              Manage your personal information and preferences
            </p>
          </section>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <GlassCard className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-medium">Personal Information</h2>
                  <p className="text-sm text-muted-foreground">
                    Update your basic information
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="fullName"
                        placeholder="Your full name"
                        className="pl-10"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="mobile"
                        placeholder="Your mobile number"
                        className="pl-10"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        id="grade"
                        placeholder="Your grade"
                        className="pl-10"
                        value="12th"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            {/* Academic Stream */}
            <GlassCard className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-medium">Academic Stream</h2>
                  <p className="text-sm text-muted-foreground">
                    Select your current academic stream
                  </p>
                </div>
                
                <RadioGroup
                  value={stream}
                  onValueChange={setStream}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {STREAMS.map((streamOption) => (
                    <div key={streamOption}>
                      <RadioGroupItem
                        value={streamOption}
                        id={streamOption}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={streamOption}
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-white p-4 hover:bg-secondary hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                      >
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-lg font-medium">{streamOption}</span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </GlassCard>
            
            {/* Interests */}
            <GlassCard className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-medium">Interests</h2>
                  <p className="text-sm text-muted-foreground">
                    Select up to 5 interests to help us provide better recommendations
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {INTERESTS.map((interest) => {
                    const isSelected = selectedInterests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`relative rounded-lg border-2 p-3 text-sm font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-muted bg-white hover:border-primary/50 text-foreground'
                        }`}
                      >
                        <span>{interest}</span>
                        {isSelected && <CheckCircle2 className="h-4 w-4 text-primary" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
            
            {/* Save Button */}
            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting} className="button-hover">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default Profile;
