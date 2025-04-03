
import React, { createContext } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { AuthContextType, UserProfile } from '@/types/auth';
import { useAuthState } from '@/hooks/useAuthState';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, setUser, session, isLoading } = useAuthState();

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        throw error;
      }
      
      // Don't show success toast here, as we'll be redirecting to OTP verification
    } catch (error: any) {
      toast.error(error.message || 'Failed to login');
      throw error;
    }
  };

  const register = async ({ email, password, fullName, mobile }: { 
    email: string;
    password: string;
    fullName: string;
    mobile: string;
  }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            mobile
          }
        }
      });
      
      if (error) {
        throw error;
      }
      
      toast.success('Registration successful! Please verify your email.');
    } catch (error: any) {
      toast.error(error.message || 'Registration failed');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      toast.info('You have been logged out');
    } catch (error: any) {
      toast.error(error.message || 'Failed to log out');
      console.error('Logout error:', error);
    }
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user || !session) {
      toast.error('You must be logged in to update your profile');
      return;
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: data.fullName,
          mobile: data.mobile,
          grade: data.grade,
          stream: data.stream,
          interests: data.interests,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) {
        throw error;
      }

      setUser({
        ...user,
        ...data
      });
      
      toast.success('Profile updated successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to update profile');
      console.error('Update profile error:', error);
    }
  };

  // Generate a 6-digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Store OTP in localStorage with expiration time (5 minutes)
  const storeOTP = (email: string, otp: string) => {
    // In a real app, this should be stored server-side
    // Here we're using localStorage for simplicity
    const expiresAt = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now
    localStorage.setItem(`otp_${email}`, JSON.stringify({ otp, expiresAt }));
  };

  // Check if OTP is valid and not expired
  const isValidOTP = (email: string, inputOTP: string) => {
    const storedData = localStorage.getItem(`otp_${email}`);
    if (!storedData) return false;
    
    const { otp, expiresAt } = JSON.parse(storedData);
    const now = new Date().getTime();
    
    // Check if OTP has expired
    if (now > expiresAt) {
      localStorage.removeItem(`otp_${email}`);
      return false;
    }
    
    return otp === inputOTP;
  };

  // Send OTP to user's email
  const sendOTP = async (email: string) => {
    try {
      const otp = generateOTP();
      storeOTP(email, otp);
      
      // In a real application, you would send the OTP via email
      // For demonstration, we'll show the OTP in a toast
      toast.info(`Your OTP is: ${otp}`, { duration: 10000 });
      
      // For a real implementation, uncomment and modify this:
      /*
      const { error } = await supabase
        .functions
        .invoke('send-otp-email', {
          body: { email, otp }
        });
        
      if (error) throw error;
      */
      
      return otp;
    } catch (error: any) {
      toast.error(error.message || 'Failed to send OTP');
      throw error;
    }
  };

  // Verify OTP
  const verifyOTP = async (email: string, otp: string) => {
    try {
      if (!isValidOTP(email, otp)) {
        throw new Error('Invalid or expired OTP. Please try again.');
      }
      
      // Clear the OTP from storage
      localStorage.removeItem(`otp_${email}`);
      
      toast.success('OTP verified successfully');
    } catch (error: any) {
      toast.error(error.message || 'OTP verification failed');
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isLoading,
        isAuthenticated: !!session,
        login,
        register,
        logout,
        updateProfile,
        sendOTP,
        verifyOTP
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth } from '@/hooks/useAuth';
