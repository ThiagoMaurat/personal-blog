import { Box, Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";
import { Header } from "../components/Header";
import { FieldSearch } from "../components/FieldSearch/inde";
import { GetStaticProps } from "next";
import { ButtonTheme } from "../components/ButtonTheme";
import { supabase } from "../lib/initSupabase";
import { Card } from "../components/Card";
import { Limiter } from "../components/Limiter";
import { format } from "date-fns";
import FirstCard from "../components/FirstCard";
import { last, orderBy } from "lodash";
import { ThemeData } from "../@types/types";

export default function BlogPage(themesData: ThemeData) {
  const orderedData = useMemo(() => {
    return orderBy(themesData.allPosts.data, "created_at");
  }, [themesData.allPosts]);

  const [loadedPosts, setLoadedPosts] = useState(6);

  const visiblePosts = orderedData.slice(0, loadedPosts);

  const loadMorePosts = useCallback(() => {
    setLoadedPosts((prev) => prev + 6);
  }, []);

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

      <Flex gap={"0.5rem"} justifyContent="center">
        {!themesData.allThemes.error &&
          themesData?.allThemes?.data?.map((themes, index) => {
            return (
              <ButtonTheme key={`themesButton-${index}`}>
                {themes.theme}
              </ButtonTheme>
            );
          })}
      </Flex>

      <Flex my="2rem">
        {!themesData.allPosts.error &&
          [last(themesData?.allPosts?.data)].map((lastItem) => {
            if (lastItem) {
              return (
                <FirstCard
                  key={"1"}
                  thumbnail={lastItem.thumbnail.thumbnail_url}
                  theme={lastItem.theme.theme}
                  title={lastItem.title ?? ""}
                  description={lastItem.description ?? ""}
                  author={lastItem.author ?? "Thiago Maurat"}
                  date={format(
                    new Date(lastItem.created_at),
                    "dd-MM-yyyy, 'às' HH:mm."
                  )}
                />
              );
            }
          })}
      </Flex>

      {!themesData.allPosts.error && (
        <SimpleGrid
          mx={{ base: "1rem", sm: "0px" }}
          justifyItems={"center"}
          gap={"3rem"}
          columns={{ base: 1, md: 2, xl: 3 }}
          mb="2rem"
        >
          {visiblePosts?.map((posts, index) => {
            return (
              <Card
                key={`card-posts${index}`}
                image={posts.thumbnail.thumbnail_url!}
                theme={posts.theme.theme}
                title={posts.title ?? "Front-End Developer Blog"}
                description={posts.description ?? "Saiba mais sobre a matéria."}
                author={posts.author ?? "Thiago Maurat"}
                date={format(
                  new Date(posts.created_at),
                  "dd-MM-yyyy, 'às' HH:mm."
                )}
              />
            );
          })}
        </SimpleGrid>
      )}

      {loadedPosts < orderedData.length && (
        <HStack justifyContent={"center"} my="2rem">
          <ButtonTheme onClick={loadMorePosts}>Carregar mais</ButtonTheme>
        </HStack>
      )}
    </Limiter>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // fetch all data on server (revalidate) and paginate on front

  const { data: themesData, error: themesError } = await supabase
    .from("themes")
    .select("id, theme");

  const { data: postsData, error: postsError } = await supabase
    .from("posts")
    .select(
      `author, title, content, created_at, description, id,
          thumbnail:thumbnails(id, thumbnail_url),
          theme:themes(id, theme)`
    );

  return {
    props: {
      allThemes: { data: themesData, error: themesError },
      allPosts: { data: postsData, error: postsError },
    },
    /* revalidate: 60 * 60 * 24 * 2,  */
  };
};
