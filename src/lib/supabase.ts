import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zfpsbmipfhvdwatnahfm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmcHNibWlwZmh2ZHdhdG5haGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyNzA2ODEsImV4cCI6MjA1MDg0NjY4MX0.gDrOJ4_VTijDTz8x4d9htTn5zvnAA4ZdPDoNUYBUHNA';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anonymous Key');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);