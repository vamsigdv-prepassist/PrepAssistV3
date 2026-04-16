import { supabase as defaultSupabase } from "./supabase";
import { SupabaseClient } from "@supabase/supabase-js";

export interface CurrentAffair {
  id?: string;
  title: string;
  source: string;
  content: string;
  tags: string[];
  publishDate: string;
  createdAt?: any;
}

export const addCurrentAffair = async (affair: Omit<CurrentAffair, 'id' | 'createdAt'>, client: SupabaseClient = defaultSupabase) => {
  try {
    const formattedTags = (affair.tags || []).map(t => t.toLowerCase().trim());
    
    const { data, error } = await client.from('current_affairs').insert([{
      title: affair.title,
      source: affair.source,
      content: affair.content,
      tags: formattedTags,
      publish_date: affair.publishDate
    }]).select();
    
    if (error) throw error;
    return data[0].id;
  } catch (error) {
    console.error("Error pushing Current Affair to DB:", error);
    throw error;
  }
};

export const bulkAddCurrentAffairs = async (affairs: Omit<CurrentAffair, 'id' | 'createdAt'>[], client: SupabaseClient = defaultSupabase) => {
  try {
    const formattedPayload = affairs.map(affair => ({
        title: affair.title || "Untitled UPSC Extraction",
        content: affair.content || "",
        source: affair.source || "Unknown Publication",
        tags: (affair.tags || []).map(t => t.toLowerCase().trim()),
        publish_date: affair.publishDate
    }));

    const { error } = await client.from('current_affairs').insert(formattedPayload);

    if (error) throw error;
  } catch (error) {
    console.error("Error pushing batch Current Affairs to DB:", error);
    throw error;
  }
};

export const fetchRecentCurrentAffairs = async (maxResults: number = 10, client: SupabaseClient = defaultSupabase) => {
  try {
    const { data, error } = await client.from('current_affairs')
       .select('*')
       .order('created_at', { ascending: false })
       .limit(maxResults);
       
    if (error) throw error;
    
    return (data || []).map(d => ({
       id: d.id,
       title: d.title,
       source: d.source,
       content: d.content,
       tags: d.tags || [],
       publishDate: d.publish_date,
       createdAt: d.created_at
    })) as CurrentAffair[];
  } catch (error) {
    console.error("Error fetching Current Affairs:", error);
    return [];
  }
};

export const fetchAffairsByDate = async (dateStr: string, client: SupabaseClient = defaultSupabase): Promise<CurrentAffair[]> => {
  try {
    const { data, error } = await client.from('current_affairs')
       .select('*')
       .eq('publish_date', dateStr)
       .order('created_at', { ascending: false });
       
    if (error) throw error;

    return (data || []).map(d => ({
       id: d.id,
       title: d.title,
       source: d.source,
       content: d.content,
       tags: d.tags || [],
       publishDate: d.publish_date,
       createdAt: d.created_at
    })) as CurrentAffair[];
  } catch (error) {
    console.error("Error fetching affairs by date: ", error);
    return [];
  }
};

export const deleteCurrentAffair = async (id: string, client: SupabaseClient = defaultSupabase) => {
  if (!id) throw new Error("Missing ID for deletion directive.");
  try {
    const { error } = await client.from('current_affairs').delete().eq('id', id);
    if (error) throw error;
  } catch (error) {
    console.error("Error destroying Current Affair Payload:", error);
    throw error;
  }
};
