import { Button, ButtonProps } from "@chakra-ui/react";
import React, { forwardRef, ForwardRefRenderFunction } from "react";

type ButtonThemeProps = {} & ButtonProps;

const ButtonChakra: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonThemeProps
> = (props, ref) => {
  return <Button {...props} ref={ref} />;
};

export const ButtonTheme = forwardRef(ButtonChakra);
