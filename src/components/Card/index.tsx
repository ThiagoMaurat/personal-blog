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

      <Text fontWeight={'500'} color={"blue.300"} fontSize="1.2rem">
        {theme}
      </Text>

      <Text fontWeight="bold" color="darkblue.700" fontSize="1.5rem">
        {title}
      </Text>

      <Text color={"gray.600"} fontWeight="600" fontSize="0.9rem">
        {description}
      </Text>

      <HStack gap={"0.5rem"}>
        <Avatar
          name="Thiago Maurat"
          src="https://avatars.githubusercontent.com/u/76444984?v=4"
        />
        <Flex flexDir={"column"} gap="2px">
          <Text fontWeight="bold" color="darkblue.700" fontSize="0.8rem">
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
