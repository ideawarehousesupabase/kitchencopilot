import { createClient } from "@supabase/supabase-js";

// Ensure URL and anon key are available, otherwise provide a fallback or throw a clear error
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://uuvvsewciqienjjtqadk.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_lG2Vu1hsvman4Enm9YXieg_IaxTt8eC";

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn("VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing. Using fallback values.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
