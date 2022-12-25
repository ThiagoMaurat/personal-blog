import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { FieldSearch } from "../components/FieldSearch/inde";
import { GetStaticProps } from "next";
import { ButtonTheme } from "../components/ButtonTheme";
import { supabase } from "../lib/initSupabase";
import { PostgrestError } from "@supabase/supabase-js";
import { Card } from "../components/Card";
import { Limiter } from "../components/Limiter";
import { format } from "date-fns";

interface ThemeData {
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
        width: number;
        height: number;
      };
      theme: {
        id: number;
        thumbnail_url: string;
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

export default function BlogPage(themesData: ThemeData) {
  console.log(themesData);

  return (
    <Limiter>
      <Header />

      <Box borderRadius={"24px"} overflow="hidden">
        <Box
          backgroundImage={"url(./blog.svg)"}
          bgRepeat="no-repeat"
          h={{ base: "140px", md: "200px" }}
          backgroundSize={"1200px auto"}
          backgroundPosition={"center center"}
        />
      </Box>
      <Flex
        w="100%"
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
        bottom="30px"
      >
        <FieldSearch name="fieldsearch" />
      </Flex>

      {!themesData.allThemes.error &&
        themesData.allThemes.data?.map((themes, index) => {
          return (
            <ButtonTheme key={`themesButton-${index}`}>
              {themes.theme}
            </ButtonTheme>
          );
        })}

      {!themesData.allPosts.error && (
        <SimpleGrid gap={"1rem"} columns={{ base: 2, md: 3 }}>
          {themesData.allPosts.data?.map((posts, index) => {
            return (
              <Card
                key={`card-posts${index}`}
                image={posts.thumbnail.thumbnail_url!}
                theme={posts.theme.thumbnail_url}
                title={posts.title ?? "Front-End Developer Blog"}
                description={posts.description ?? "Saiba mais sobre a matéria."}
                author={posts.author ?? "Thiago Maurat"}
                date={format(
                  new Date(posts.created_at),
                  "dd-MM-yyyy, 'às' HH:mm."
                )}
                width={posts.thumbnail.width}
                height={posts.thumbnail.height}
              />
            );
          })}
        </SimpleGrid>
      )}
    </Limiter>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: themesData, error: themesError } = await supabase
    .from("themes")
    .select("id, theme");

  const { data: postsData, error: postsError } = await supabase
    .from("posts")
    .select(
      `author, title, content, created_at, description, id,
          thumbnail:thumbnails(id, thumbnail_url, width, height),
          theme:themes(id, theme)`
    );

  /* const revalidate = 60 * 60 * 24; */ // cache for 24 hours

  return {
    props: {
      allThemes: { data: themesData, error: themesError },
      allPosts: { data: postsData, error: postsError },
    },
    /* revalidate: revalidate, */
  };
};
