import {
  AspectRatio,
  Avatar,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface CardProps {
  image: string;
  theme: string;
  title: string;
  description: string;
  author: string;
  date: string;
  width: number;
  height: number;
}

export function Card(props: CardProps) {
  const { author, date, description, image, height, width, theme, title } =
    props;
  return (
    <Flex gap="1rem" cursor={"pointer"} flexDir="column">
      <AspectRatio ratio={height / width} w="350px" h="350px">
        <Image src={image} alt="post card section" />
      </AspectRatio>

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
        <Flex flexDir={"column"} gap="1rem">
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
