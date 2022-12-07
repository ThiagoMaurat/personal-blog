import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { FieldSearch } from "../components/FieldSearch/inde";
import { supabase } from "../lib/initSupabase";

export default function BlogPage() {
  const fetcch = async () => {
    const { data: posts, error } = await supabase.from("posts").select("*");
    console.log(posts);
  };
  fetcch();

  return (
    <>
      <Header />

      <Box
        maxW="1200px"
        h="100%"
        m="0 auto"
        borderRadius={"24px"}
        overflow="hidden"
      >
        <Box
          backgroundImage={"url(./blog.svg)"}
          m="0 auto"
          bgRepeat="no-repeat"
          maxW={"1200px"}
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
    </>
  );
}
