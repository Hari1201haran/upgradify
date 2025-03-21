
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

interface User {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  grade?: string;
  stream?: 'Science' | 'Commerce' | 'Arts' | null;
  interests?: string[];
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

interface RegisterData {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
}

// Mock user data for demo purposes
const MOCK_USERS: User[] = [
  {
    id: '1',
    fullName: 'Admin User',
    email: 'admin@example.com',
    mobile: '9876543210',
    grade: '12th',
    stream: 'Science',
    interests: ['Technology', 'Research'],
    isAdmin: true
  },
  {
    id: '2',
    fullName: 'Student User',
    email: 'student@example.com',
    mobile: '9876543211',
    grade: '12th',
    stream: 'Science',
    interests: ['Coding', 'Mathematics']
  }
];

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved auth on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('asoUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved user', e);
        localStorage.removeItem('asoUser');
      }
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage when changed
  useEffect(() => {
    if (user) {
      localStorage.setItem('asoUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('asoUser');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Mock authentication logic
      const mockUser = MOCK_USERS.find(
        u => u.email.toLowerCase() === email.toLowerCase()
      );
      
      if (mockUser) {
        setUser(mockUser);
        toast.success(`Welcome back, ${mockUser.fullName}!`);
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Check if email already exists
      if (MOCK_USERS.some(u => u.email.toLowerCase() === userData.email.toLowerCase())) {
        throw new Error('Email already registered');
      }
      
      // Create new user
      const newUser: User = {
        id: `user-${Date.now()}`,
        fullName: userData.fullName,
        email: userData.email,
        mobile: userData.mobile,
        grade: '12th',
      };
      
      // In a real app, we would save to backend
      MOCK_USERS.push(newUser);
      setUser(newUser);
      toast.success('Registration successful!');
    } catch (error: any) {
      toast.error(error.message || 'Registration failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    toast.info('You have been logged out');
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      toast.success('Profile updated successfully');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
