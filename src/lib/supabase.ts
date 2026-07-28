import { createClient } from "@supabase/supabase-js";

// Ensure URL and anon key are available, otherwise provide a fallback or throw a clear error
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://placeholder-url-please-update.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

if (!import.meta.env.VITE_SUPABASE_URL) {
  console.warn("VITE_SUPABASE_URL is missing. Please add your Supabase URL to your .env file or Vercel Environment Variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
