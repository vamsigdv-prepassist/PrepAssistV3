-- Migration: Create Current Affairs Table in Supabase

CREATE TABLE IF NOT EXISTS public.current_affairs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    source TEXT NOT NULL,
    content TEXT NOT NULL,
    tags TEXT[] DEFAULT '{}',
    publish_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS and setup permissive policies for admin testing
ALTER TABLE public.current_affairs ENABLE ROW LEVEL SECURITY;

-- Allow read access for everyone
CREATE POLICY "Enable read access for all users" ON public.current_affairs FOR SELECT USING (true);

-- Allow insert/update access (You should ultimately restrict this to authenticated admins)
CREATE POLICY "Enable insert access for all" ON public.current_affairs FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable delete access for all" ON public.current_affairs FOR DELETE USING (true);
CREATE POLICY "Enable update access for all" ON public.current_affairs FOR UPDATE USING (true);
