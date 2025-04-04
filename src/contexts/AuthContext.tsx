
import React, { createContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { AuthContextType, UserProfile } from '@/types/auth';
import { useAuthState } from '@/hooks/useAuthState';
import { login, register, logout, updateProfile } from '@/services/authService';
import { sendOTP, verifyOTP } from '@/services/otpService';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, setUser, session, isLoading } = useAuthState();

  // Create the auth context value with our hooks and services
  const authContextValue: AuthContextType = {
    user,
    session,
    isLoading,
    isAuthenticated: !!session,
    login,
    register: async (userData) => {
      await register(userData);
      // After successful registration, send OTP
      await sendOTP(userData.email);
    },
    logout,
    updateProfile: (data) => updateProfile(user, setUser, data),
    sendOTP,
    verifyOTP
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth } from '@/hooks/useAuth';
