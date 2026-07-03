import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://igibocziqrqdpufuurch.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWJvY3ppcXJxZHB1ZnV1cmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwMzkzNDQsImV4cCI6MjA5ODYxNTM0NH0.j7pG1u5tlQ5Wo1Gj-TOUceng-UzZw9w7KXQS0ynzIcE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
