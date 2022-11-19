import { Box, FlexProps, SimpleGridProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type LimiterProps = {
  children: ReactNode;
} & FlexProps &
  SimpleGridProps;

export const Limiter = (props: LimiterProps) => {
  const { children, ...rest } = props;
  return (
    <Box maxW="1500px" w="full" mx="auto" px={4} {...rest}>
      {children}
    </Box>
  );
};
