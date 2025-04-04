
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { generateOTP, storeOTP, isValidOTP } from '@/utils/authUtils';

// Send OTP to user's email
export const sendOTP = async (email: string): Promise<string | void> => {
  try {
    const otp = generateOTP();
    storeOTP(email, otp);
    
    // Call our edge function to send the email
    const { error } = await supabase.functions.invoke('send-otp-email', {
      body: { email, otp }
    });
    
    if (error) {
      console.error('Error sending OTP email:', error);
      // Fallback to showing OTP in toast for development purposes
      toast.info(`Your OTP is: ${otp}`, { duration: 10000 });
      throw error;
    }
    
    toast.success('Verification code sent to your email');
    return otp;
  } catch (error: any) {
    console.error('Error in sendOTP:', error);
    toast.error(error.message || 'Failed to send OTP');
    throw error;
  }
};

// Verify OTP
export const verifyOTP = async (email: string, otp: string): Promise<void> => {
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
