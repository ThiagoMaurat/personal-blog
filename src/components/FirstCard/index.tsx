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
    <Grid gridTemplateColumns={"1fr 1fr"} gap="2rem">
      <GridItem>
        <Image
          borderRadius={"3xl"}
          h="40vh"
          alt="last-post-thumbnail"
          src={thumbnail}
          objectFit="cover"
        />
      </GridItem>

      <GridItem py="15px" display={"flex"} flexDirection={"column"} gap="1rem">
        <Text fontWeight={"500"} color={"blue.300"} fontSize="1.2rem">
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
      </GridItem>
    </Grid>
  );
}

export default FirstCard;
