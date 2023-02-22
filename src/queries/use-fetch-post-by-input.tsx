import { useQuery } from "react-query";
import { supabase } from "../lib/initSupabase";

interface Params {
  search: string | undefined;
}

interface Post {
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

export async function searchPost({ search }: Params) {
  const { data: post } = (await supabase
    .from("posts")
    .select(
      `author, title, content, created_at, description, id,
            thumbnail:thumbnails(id, thumbnail_url),
            theme:themes(id, theme)`
    )
    .filter("title", "ilike", `%${search}%`)) as {
    data: Post[];
    error: any;
  };

  return post;
}

export function useSearchPost(query: Params) {
  return useQuery(["searchPost", query], () => searchPost(query), {
    refetchOnWindowFocus: false,
  });
}
