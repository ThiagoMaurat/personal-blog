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
    <Stack>
      <InputGroup>
        <InputLeftElement
          position={"absolute"}
          left="1.6%"
          pointerEvents="none"
          fontSize="1.2em"
        >
          <BsSearch />
        </InputLeftElement>
        <Input
          pl="70px !important"
          borderRadius={"24px"}
          h="50px"
          w="35%"
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
