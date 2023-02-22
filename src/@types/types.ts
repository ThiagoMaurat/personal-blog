import { PostgrestError } from "@supabase/supabase-js";

export interface ThemeData {
  allThemes: {
    data: Array<{
      id: number;
      theme: string | null;
    }>;
    error: PostgrestError | null;
  };
  allPosts: {
    data: Array<{
      id: number;
      thumbnail: {
        id: number;
        thumbnail_url: string;
      };
      theme: {
        id: number;
        theme: string;
      };
      title: string | null;
      author: string | null;
      content: string | null;
      description: string | null;
      created_at: string;
    }>;
    error: PostgrestError | null;
  };
}
