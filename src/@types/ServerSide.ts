import { PostgrestError } from "@supabase/supabase-js";
import { ParsedUrlQuery } from "querystring";
import { Post } from "./DataPost";

export type Props = {
  data: Post | undefined;
  error: PostgrestError | null;
};

export type Params = {
  id: string;
} & ParsedUrlQuery;
