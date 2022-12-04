import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  Stack,
} from "@chakra-ui/react";
import React, { ForwardRefRenderFunction } from "react";
import { BsSearch } from "react-icons/bs";

interface FieldSearchComponentProps extends InputProps {
  name: string;
}

const FieldSearchComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  FieldSearchComponentProps
> = (props, ref) => {
  return (
    <Stack w="300px">
      <InputGroup>
        <InputLeftElement
          position={"absolute"}
          left="1.6%"
          pointerEvents="none"
          fontSize="1.2em"
        >
          <BsSearch color="black" />
        </InputLeftElement>
        <Input
          pl="70px !important"
          borderRadius={"24px"}
          h="45px"
          w="100%"
          backgroundColor={"#FFFF"}
          placeholder="Search"
          ref={ref}
          {...props}
        />
        ;
      </InputGroup>
    </Stack>
  );
};

export const FieldSearch = React.forwardRef(FieldSearchComponent);
