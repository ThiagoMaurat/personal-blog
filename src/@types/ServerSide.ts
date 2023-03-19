import { PostgrestError } from "@supabase/supabase-js";
import { ParsedUrlQuery } from "querystring";

export type Props = {
  data: any;
  error: PostgrestError | null;
};

export type Params = {
  id: string;
} & ParsedUrlQuery;
