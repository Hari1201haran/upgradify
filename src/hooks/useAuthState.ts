
import { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { UserProfile } from '@/types/auth';

export const useAuthState = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserProfile = async (userId: string) => {
    try {
      console.log('Fetching user profile for userId:', userId);
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
        return;
      }

      console.log('User profile data from database:', profile);

      const userProfile: UserProfile = {
        id: userId,
        fullName: profile.full_name || '',
        email: profile.email || '',
        mobile: profile.mobile || '',
        grade: '12th', // Always set grade to '12th' regardless of database value
        stream: profile.stream || null,
        interests: profile.interests || [],
        age: profile.age !== null && profile.age !== undefined ? Number(profile.age) : null,
        isAdmin: false
      };

      console.log('Setting user profile:', userProfile);
      setUser(userProfile);
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
    }
  };

  // Function to refresh user profile - can be called externally
  const refreshUserProfile = async () => {
    if (session?.user) {
      console.log('Refreshing user profile...');
      await fetchUserProfile(session.user.id);
    }
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log('Auth state changed:', event, currentSession?.user?.id);
        setSession(currentSession);
        if (currentSession?.user) {
          fetchUserProfile(currentSession.user.id);
        } else {
          setUser(null);
        }
      }
    );

    const initializeAuth = async () => {
      setIsLoading(true);
      try {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        console.log('Initial session:', currentSession?.user?.id);
        setSession(currentSession);
        
        if (currentSession?.user) {
          await fetchUserProfile(currentSession.user.id);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    initializeAuth();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user, setUser, session, setSession, isLoading, setIsLoading, refreshUserProfile };
};
