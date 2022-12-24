import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/initSupabase";

const fetchAllThemes = async () => {
  const { data: themes } = await supabase.from("themes").select("id, theme");

  return themes;
};

export const useFetchAllThemes = () => {
  return useQuery(["fetchAllThemes"], fetchAllThemes, {
    refetchOnWindowFocus: false,
  });
};
