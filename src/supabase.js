import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fulmtvpkfqiwrgwzompe.supabase.co";
const supabaseKey = "sb_publishable_l57iKzy127Le4FtI5Ggr_Q_ylvbA6xO";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);