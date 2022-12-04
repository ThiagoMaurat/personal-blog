import { AspectRatio, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Image, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import bgImg from "../../public/blog.png";
import { FieldSearch } from "../components/FieldSearch/inde";

export default function BlogPage() {
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
      <FieldSearch name="fieldsearch" />
    </>
  );
}
