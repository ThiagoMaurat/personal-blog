import { Flex, FlexProps } from "@chakra-ui/react";

type NavBarContainerProps = {
  children: React.ReactNode;
} & FlexProps;

export const NavBarContainer = ({
  children,
  ...props
}: NavBarContainerProps) => {
  return (
    <Flex
      bg={"#272727"}
      px="1rem"
      position="sticky"
      w={"full"}
      zIndex="999"
      top={"0"}
      left="0"
    >
      <Flex
        maxW={{ base: "100%", md: "1500px" }}
        mx="auto"
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        paddingTop={8}
        paddingBottom={8}
        paddingRight={8}
        paddingLeft={{ base: 8, md: 0 }}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    </Flex>
  );
};
