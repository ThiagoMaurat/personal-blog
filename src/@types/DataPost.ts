import { PostgrestError } from "@supabase/supabase-js";

export interface Post {
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
}

export interface PostData {
  data: Post[];
  error: PostgrestError | null;
}

export interface ThemeData {
  data: Array<{
    id: number;
    theme: string | null;
  }>;
  error: PostgrestError | null;
}

export interface ThemeAndPostData {
  allThemes: ThemeData;
  allPosts: PostData;
}

export interface ThemeAndPostDataNextSSR {
  props: ThemeAndPostData;
}
