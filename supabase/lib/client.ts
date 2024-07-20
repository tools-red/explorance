import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "../env";
import { type Database } from "~/types/supabase"; // generate only if required, to access using supabase

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
