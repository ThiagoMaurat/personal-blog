import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/initSupabase";

const fetchAllPosts = async () => {
  const { data: posts } = await supabase.from("posts").select(
    `author, content, created_at, description, id,
          thumbnail:thumbnails(id, thumbnail_url),
          theme:themes(id, theme)`
  );

  return posts;
};

export const useFetchAllPosts = () => {
  return useQuery(["fetchAllPosts"], fetchAllPosts, {
    refetchOnWindowFocus: false,
  });
};
