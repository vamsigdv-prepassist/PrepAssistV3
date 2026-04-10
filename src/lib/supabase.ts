import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials are missing. Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storageKey: 'prepassist-user-auth',
    persistSession: true,
    autoRefreshToken: true,
  }
});

export const adminSupabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storageKey: 'prepassist-admin-auth',
    persistSession: true,
    autoRefreshToken: true,
  }
});

