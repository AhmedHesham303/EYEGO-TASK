// app/api/client.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wvirbbqezlhtlohhqmga.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2aXJiYnFlemxodGxvaGhxbWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3NDI2MjIsImV4cCI6MjA3NjMxODYyMn0.6C4FbPWR8qr9eEecntzwVIA5u30zO5V74Q2BO0rwG5g";

export const supabase = createClient(supabaseUrl, supabaseKey);
