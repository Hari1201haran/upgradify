
import { toast } from "sonner";

// Generate a 6-digit OTP
export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Store OTP in localStorage with expiration time (5 minutes)
export const storeOTP = (email: string, otp: string): void => {
  // In a real app, this should be stored server-side
  // Here we're using localStorage for simplicity
  const expiresAt = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now
  localStorage.setItem(`otp_${email}`, JSON.stringify({ otp, expiresAt }));
};

// Check if OTP is valid and not expired
export const isValidOTP = (email: string, inputOTP: string): boolean => {
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
