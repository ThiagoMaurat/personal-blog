import { GetStaticProps } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import { PostData } from "../../@types/DataPost";
import { Props } from "../../@types/ServerSide";
import { supabase } from "../../lib/initSupabase";

export default function Posts({ data }: Props) {}

export async function getStaticPaths() {
  const { data: postsData } = (await supabase.from("posts").select(
    `author, title, content, created_at, description, id,
          thumbnail:thumbnails(id, thumbnail_url),
          theme:themes(id, theme)`
  )) as PostData;

  const paths = [];

  if (postsData?.length) {
    for (let i = 0; i < postsData?.length; i++) {
      paths.push({ params: { id: `${i + 1}` } });
    }
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const id = Number(params?.id);

  const { data: postsData, error: error } = (await supabase
    .from("posts")
    .select(
      `author, title, content, created_at, description, id,
          thumbnail:thumbnails(id, thumbnail_url),
          theme:themes(id, theme)`
    )) as PostData;

  const data = postsData?.find((post) => post.id === id);

  return {
    props: {
      data: data,
      error: error,
    },
  };
};
