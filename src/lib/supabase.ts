import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uuvvsewciqienjjtqadk.supabase.co";
const supabaseAnonKey = "sb_publishable_lG2Vu1hsvman4Enm9YXieg_IaxTt8eC";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
