
import { Session } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  grade?: string;
  stream?: 'Science' | 'Commerce' | 'Arts' | null;
  interests?: string[];
  isAdmin?: boolean;
}

export interface AuthContextType {
  user: UserProfile | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
}

export interface RegisterData {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
}
