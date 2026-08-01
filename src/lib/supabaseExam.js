import { createClient } from "@supabase/supabase-js";

export const supabaseExam = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL_EXAM,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_EXAM
);