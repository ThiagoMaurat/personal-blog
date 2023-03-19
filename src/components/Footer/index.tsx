import {
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import React from "react";
import { useRouter } from "next/router";
import { NavIndices } from "./NavIndicces";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  const { push } = useRouter();

  return (
    <>
      <Grid
        gridGap={"3rem"}
        pt="6rem"
        px="1rem"
        maxW={"1200px"}
        gridColumnGap="2.5rem"
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
      >
        <GridItem display={"flex"} flexDir="column" gap="2rem">
          <Heading
            fontWeight={"bold"}
            fontSize="1.7rem"
            color={"gray.900"}
            cursor="pointer"
            onClick={() => push("/")}
          >
            Thiago🚀Dev
          </Heading>
          <Text
            fontWeight={"500"}
            fontSize="1rem"
            color={"gray.700"}
            whiteSpace={"break-spaces"}
          >
            {`Olá amigos desenvolvedores!! Fique à vontade para deixar seus comentários e sugestões sobre o conteúdo do nosso blog.`}
          </Text>
        </GridItem>

        <GridItem
          display={"flex"}
          flexDir="column"
          alignItems={{ base: "unset", lg: "center" }}
        >
          <Heading fontWeight={"bold"} fontSize="1.7rem" color={"gray.900"}>
            Início
          </Heading>

          <VStack mt="2rem" align={"flex-start"} justify="flex-start">
            <NavIndices isExternal={false} href="" text="Topic #1" />
            <NavIndices isExternal={false} href="" text="Topic #2" />
            <NavIndices isExternal={false} href="" text="Topic #3" />
          </VStack>
        </GridItem>

        <GridItem display={"flex"} flexDir="column" gap="2rem">
          <Heading fontWeight={"bold"} fontSize="1.7rem" color={"gray.900"}>
            NewsLetter
          </Heading>

          <Text
            fontWeight={"500"}
            fontSize="1rem"
            color={"gray.700"}
            whiteSpace={"break-spaces"}
          >
            {`Inscreva-se em nossa newsletter! Fique por dentro das últimas novidades do mundo dev.`}
          </Text>

          {/* <HStack
            as="a"
            href={`mailto:maysarodolfo@hotmail.com`}
            aria-label="Write Email"
          >
            <FaPen fontSize="1rem" color="black" />

            <Text fontWeight={"500"} fontSize="1rem" color={"gray.700"}>
              thiagomaurat@hotmail.com
            </Text>
          </HStack> */}
        </GridItem>

        <GridItem display={"flex"} flexDir="column" gap="2rem">
          <Heading fontWeight={"bold"} fontSize="1.7rem" color={"gray.900"}>
            Contato
          </Heading>

          <VStack align={"flex-start"} spacing="4px">
            <NavIndices
              href="https://github.com/ThiagoMaurat"
              LeftIcon={BsGithub}
              text="Git-hub"
              isExternal={true}
            />

            <NavIndices
              href="mailto:thiagomaurat@hotmail.com"
              LeftIcon={FaPen}
              text="E-mail"
              isExternal
            />

            <NavIndices
              href="https://www.facebook.com/thiago.maurat"
              LeftIcon={BsFacebook}
              text="Facebook"
              isExternal
            />

            <NavIndices
              href="https://twitter.com/Thiago_Maurat"
              LeftIcon={BsTwitter}
              text="Twitter"
              isExternal
            />
          </VStack>
        </GridItem>
      </Grid>

      <HStack my="2rem" justifyContent={"center"}>
        <Text
          fontWeight={"500"}
          fontSize="1rem"
          color={"gray.700"}
        >{`© ${new Date().getFullYear()} Todos os direitos reservados. Thiago Maurat.`}</Text>
      </HStack>
    </>
  );
};
