import { Box, FlexProps, SimpleGridProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type LimiterProps = {
  children: ReactNode;
} & FlexProps &
  SimpleGridProps;

export const Limiter = (props: LimiterProps) => {
  const { children, ...rest } = props;
  return (
    <Box maxW="1200px" w="full" mx="auto" p="7" {...rest}>
      {children}
    </Box>
  );
};
