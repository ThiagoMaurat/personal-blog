import { Avatar, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

interface CardProps {
  image: string;
  theme: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

export function Card(props: CardProps) {
  const { author, date, description, image, theme, title } = props;
  return (
    <Flex maxW="360px" w="100%" gap="1rem" cursor={"pointer"} flexDir="column">
      <Image
        w="360px"
        borderRadius={"15px"}
        h="250px"
        src={image}
        alt="post containd section"
      />

      <Text color={"blue.300"} fontSize="1rem">
        {theme}
      </Text>

      <Text color={"blue.800"} fontSize="1.2rem">
        {title}
      </Text>

      <Text color={"gray.900"} fontSize="1.2rem">
        {description}
      </Text>

      <HStack gap={"1rem"}>
        <Avatar
          name="Thiago Maurat"
          src="https://avatars.githubusercontent.com/u/76444984?v=4"
        />
        <Flex flexDir={"column"} gap="2px">
          <Text color={"blue.800"} fontSize="0.9rem">
            {author}
          </Text>
          <Text color={"gray.900"} fontSize="0.7rem">
            {date}
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
}
