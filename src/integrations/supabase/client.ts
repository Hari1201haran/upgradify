
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Supabase project URL and anon key
const SUPABASE_URL = "https://dpttcfioehernrbiqmcp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdHRjZmlvZWhlcm5yYmlxbWNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4OTgxODIsImV4cCI6MjA1ODQ3NDE4Mn0.wwrGUQ8vWfvqSEU-RsrDrNYOQgC36P6fzevpOs9maTs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: localStorage
  }
});
