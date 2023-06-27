import { Theme } from "../core/app.theme";
import styled from "@emotion/styled";
import { buttonSizesStyle } from "./button.style";

type ButtonProps = {
  size: 'sm' | 'md' | 'lg',
  variants: 'outline' | 'solid',
  colorScheme?: Theme.ColorScheme
}

export const Button = styled.button<ButtonProps>(({ colorScheme = "primary", size='sm' }) => ({
  ...buttonBaseCss,
  ...buttonSizesStyle[size],
  color: "white",
  backgroundColor: Theme.color(colorScheme),
  borderColor: "transparent",
  "&:focus:enabled": {
    backgroundColor: Theme.color(`${colorScheme}400`),
  },
  "&:hover:enabled": {
    backgroundColor: Theme.color(`${colorScheme}400`),
  },
  "&:active:enabled": {
    backgroundColor: Theme.color(`${colorScheme}400`),
  },
}));

export const buttonBaseCss = {
  cursor: "pointer",
  height: "36px",
  width: "auto",
  padding: "10px 12px 10px",
  fontFamily: Theme.fontFamily("monument"),
  fontSize: Theme.fontSize("xs"),
  fontWeight: Theme.fontWeight("thin"),
  borderRadius: Theme.radius("lg"),
  borderWidth: "1px",
  borderStyle: "solid",
  textDecoration: "none",
  outline: "none",
  transition: "color .4s, background-color .4s",
};
