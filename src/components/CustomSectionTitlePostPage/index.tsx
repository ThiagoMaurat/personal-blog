import {
  Avatar,
  Flex,
  FlexProps,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Limiter } from "../Limiter";
import { Text } from "@chakra-ui/react";

interface CustomSectionTitlePostPage extends FlexProps {
  theme: string;
  title: string;
  date: string;
  author: string;
}

export const CustomSectionTitlePostPage = (
  props: CustomSectionTitlePostPage
) => {
  const { author, date, theme, title, ...rest } = props;

  return (
    <Limiter>
      <Flex backgroundColor={"#092856"} {...rest}>
        <VStack>
          <Text fontWeight={"500"} color={"blue.300"} fontSize="1.2rem">
            {theme}
          </Text>

          <Heading>{title}</Heading>
        </VStack>

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
    </Limiter>
  );
};
