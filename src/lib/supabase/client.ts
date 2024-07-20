import { createClient } from "@supabase/supabase-js";
import { type Database } from "~/types/supabase";
import { env } from "~/env.mjs";

const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_KEY);

export default supabase;
