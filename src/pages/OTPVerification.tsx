
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { GraduationCap, Loader2 } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import PageTransition from '@/components/layout/PageTransition';
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from '@/components/ui/input-otp';
import { toast } from 'sonner';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  
  const location = useLocation();
  const email = location.state?.email || '';
  
  const { verifyOTP, sendOTP } = useAuth();
  const navigate = useNavigate();
  
  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [timeLeft]);
  
  // Format countdown
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      await verifyOTP(email, otp);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to verify OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleResendOTP = async () => {
    if (!email) {
      setError('Email is missing. Please go back to login.');
      return;
    }
    
    try {
      await sendOTP(email);
      setTimeLeft(300); // Reset the timer
      setOtp(''); // Clear the input
      toast.success('A new verification code has been sent to your email');
    } catch (err: any) {
      setError(err.message || 'Failed to send verification code. Please try again.');
    }
  };
  
  if (!email) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50 p-4">
          <GlassCard className="p-6 w-full max-w-md">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-500">Invalid Access</h1>
              <p className="mt-2 text-muted-foreground">
                Please go back to the login page to start the verification process.
              </p>
              <Button 
                className="mt-4" 
                onClick={() => navigate('/login')}
              >
                Back to Login
              </Button>
            </div>
          </GlassCard>
        </div>
      </PageTransition>
    );
  }
  
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50 p-4">
        <div className="w-full max-w-md scale-in-animation">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-primary rounded-xl mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Verify Your Email</h1>
            <p className="text-muted-foreground mt-2">
              Enter the 6-digit verification code sent to {email}
            </p>
          </div>
          
          <GlassCard className="p-6">
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4">
                {error}
              </div>
            )}
            
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="otp">Verification Code</Label>
                <div className="flex justify-center">
                  <InputOTP 
                    maxLength={6} 
                    value={otp} 
                    onChange={setOtp}
                    render={({ slots }) => (
                      <InputOTPGroup>
                        {slots.map((slot, index) => (
                          <InputOTPSlot key={index} {...slot} index={index} />
                        ))}
                      </InputOTPGroup>
                    )}
                  />
                </div>
                
                <div className="text-center mt-2">
                  <p className="text-sm text-muted-foreground">
                    {timeLeft > 0 ? (
                      <>Code expires in {formatTime(timeLeft)}</>
                    ) : (
                      <>Code has expired. Please request a new one.</>
                    )}
                  </p>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting || otp.length !== 6 || timeLeft <= 0}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : 'Verify & Continue'}
              </Button>
              
              <div className="text-center">
                <button 
                  type="button"
                  onClick={handleResendOTP} 
                  className="text-primary text-sm hover:underline"
                  disabled={timeLeft > 0 && timeLeft < 270} // Prevent spam clicks (allow resend after 30 seconds)
                >
                  {timeLeft > 0 && timeLeft < 270 ? 
                    `Resend code in ${formatTime(270 - timeLeft)}` : 
                    'Resend verification code'}
                </button>
              </div>
            </form>
          </GlassCard>
          
          <div className="mt-4 text-center">
            <button 
              onClick={() => navigate(-1)} 
              className="text-sm text-muted-foreground hover:text-primary hover:underline"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default OTPVerification;
