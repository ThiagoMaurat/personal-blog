import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface FirstCardProps {
  thumbnail: string;
  theme: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

function FirstCard(props: FirstCardProps) {
  const { author, date, description, thumbnail, theme, title } = props;
  return (
    <Grid gridTemplateColumns={"1fr, 1fr"} gap="1.5rem">
      <GridItem>
        <Image
          borderRadius={"15px"}
          h="40vh"
          alt="last-post-thumbnail"
          src={thumbnail}
        />
      </GridItem>

      <GridItem flexDirection={"column"}>
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
      </GridItem>
    </Grid>
  );
}

export default FirstCard;
