import { css } from "@emotion/react";
import { CSSProperties } from "react";

export const theme = {
  colors: {
    background: "#F0F0F0",

    white: "#ffffff",
    white50: "rgba(255, 255, 255, 0.04)",
    white100: "rgba(255, 255, 255, 0.06)",
    white200: "rgba(255, 255, 255, 0.08)",
    white300: "rgba(255, 255, 255, 0.16)",
    white400: "rgba(255, 255, 255, 0.24)",
    white500: "rgba(255, 255, 255, 0.36)",
    white600: "rgba(255, 255, 255, 0.48)",
    white700: "rgba(255, 255, 255, 0.64)",
    white800: "rgba(255, 255, 255, 0.80)",
    white900: "rgba(255, 255, 255, 0.92)",

    black: "#000000",
    black50: "rgba(0, 0, 0, 0.04)",
    black100: "rgba(0, 0, 0, 0.06)",
    black200: "rgba(0, 0, 0, 0.08)",
    black300: "rgba(0, 0, 0, 0.16)",
    black400: "rgba(0, 0, 0, 0.24)",
    black500: "rgba(0, 0, 0, 0.36)",
    black600: "rgba(0, 0, 0, 0.48)",
    black700: "rgba(0, 0, 0, 0.64)",
    black800: "rgba(0, 0, 0, 0.80)",
    black900: "rgba(0, 0, 0, 0.92)",

    primary: "#091826",
    primary50: "#e1e3e5",
    primary100: "#b5babe",
    primary200: "#848c93",
    primary300: "#535d67",
    primary400: "#2e3b47",
    primary500: "#091826",
    primary600: "#091826",
    primary700: "#06111c",
    primary800: "#050e17",
    primary900: "#02080d",

    slate: "#14141C",
    slate50: "#E3E3E4",
    slate100: "#E3E3E4",
    slate200: "#8A8A8E",
    slate300: "#5B5B60",
    slate400: "#37373E",
    slate500: "#14141C",
    slate600: "#121219",
    slate700: "#0E0E14",
    slate800: "#0B0B11",
    slate900: "#060609",

    icywaters: "#091826",
    icywaters50: "#e1e3e5",
    icywaters100: "#b5babe",
    icywaters200: "#848c93",
    icywaters300: "#535d67",
    icywaters400: "#2e3b47",
    icywaters500: "#091826",
    icywaters600: "#091826",
    icywaters700: "#06111c",
    icywaters800: "#050e17",
    icywaters900: "#02080d",

    ghostgumwhite: "#FDFDFD",
    ghostgumwhite50: "#F2F2F2",
    ghostgumwhite100: "#FBFBFB",
    ghostgumwhite200: "#F9F9F9",
    ghostgumwhite300: "#F6F6F6",
    ghostgumwhite400: "#F4F4F4",
    ghostgumwhite500: "#F2F2F2",
    ghostgumwhite600: "#F0F0F0",
    ghostgumwhite700: "#EEEEEE",
    ghostgumwhite800: "#ECECEC",
    ghostgumwhite900: "#E8E8E8",

    ghostgumgrey: "#AAADA7",
    ghostgumgrey50: "#F5F5F4",
    ghostgumgrey100: "#E6E6E5",
    ghostgumgrey200: "#D5D6D3",
    ghostgumgrey300: "#C4C6C1",
    ghostgumgrey400: "#B7B9B4",
    ghostgumgrey500: "#AAADA7",
    ghostgumgrey600: "#A3A69F",
    ghostgumgrey700: "#999C96",
    ghostgumgrey800: "#90938C",
    ghostgumgrey900: "#7F837C",

    ghosttreeforest: "#455259",
    ghosttreeforest50: "#E9EAEB",
    ghosttreeforest100: "#C7CBCD",
    ghosttreeforest200: "#A2A9AC",
    ghosttreeforest300: "#7D868B",
    ghosttreeforest400: "#616C72",
    ghosttreeforest500: "#455259",
    ghosttreeforest600: "#3E4B51",
    ghosttreeforest700: "#364148",
    ghosttreeforest800: "#2E383E",
    ghosttreeforest900: "#1F282E",
  },
  space: {
    "4xs": "var(--space-4xs)",
    "3xs": "var(--space-3xs)",
    "2xs": "var(--space-2xs)",
    xs: "var(--space-xs)",
    sm: "var(--space-sm)",
    md: "var(--space-md)",
    lg: "var(--space-lg)",
    xl: "var(--space-xl)",
    "2xl": "var(--space-2xl)",
    "3xl": "var(--space-3xl)",
    "4xl": "var(--space-4xl)",
  },
  fonts: {
    heading: "Libre Franklin, sans-serif",
    body: "Libre Franklin, sans-serif",
    mono: "Libre Franklin, sans-serif",

    libre: "Libre Franklin, sans-serif",
    monument: "Monument Extended",
  },
  fontSizes: {
    xs: "var(--font-size-xs)",
    sm: "var(--font-size-sm)",
    md: "var(--font-size-md)",
    lg: "var(--font-size-lg)",
    xl: "var(--font-size-xl)",
    "2xl": "var(--font-size-2xl)",
    "3xl": "var(--font-size-3xl)",
    "4xl": "var(--font-size-4xl)",
    "5xl": "var(--font-size-5xl)",
    "6xl": "var(--font-size-6xl)",
    "7xl": "var(--font-size-7xl)",
  },
  fontWeights: {
    thin: 100,
    light: 300,
    book: 350,
    normal: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 970,
  },
  radii: {
    none: "0",
    sm: "2px",
    md: "4px",
    lg: "8px",
    xl: "12px",
    "2xl": "16px",
    "3xl": "24px",
    full: "9999px",
  },
  shadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
  },
  sizes: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
      xl: "1350px",
      full: "100%",
    },
  },
  zIndices: {
    pageBody: 1,
  },

};

export namespace Theme {
  export type ColorScheme = keyof typeof theme.colors | CSSProperties["color"];
  export type Space = keyof typeof theme.space | string | number;
  export type FontSize = keyof typeof theme.fontSizes | CSSProperties["fontSize"];
  export type FontFamily = keyof typeof theme.fonts | CSSProperties["fontFamily"];
  export type FontWeight = keyof typeof theme.fontWeights | CSSProperties["fontWeight"];
  export type LineHeight = keyof typeof theme.lineHeights | CSSProperties["lineHeight"];
  export type LetterSpacing = keyof typeof theme.letterSpacings | CSSProperties["letterSpacing"];
  export type Radius = keyof typeof theme.radii | CSSProperties["borderRadius"];
  export type Shadow = keyof typeof theme.shadows | CSSProperties["boxShadow"];
  export type SizeContainer = keyof typeof theme.sizes.container | string | number;
  export type BreakPoint = keyof typeof theme.breakpoints;

  export const color = (value: ColorScheme): CSSProperties["color"] =>
    theme.colors[value as never] ? `var(--color-${value})` : value;
  export const space = (value?: Space) =>
    theme.space[value as never] ? `var(--space-${value})` : cssUnitToString(value);
  export const fontSize = (value: FontSize) => (theme.fontSizes[value as never] ? `var(--font-size-${value})` : value);
  export const fontFamily = (value: FontFamily) =>
    theme.fonts[value as never] ? `var(--font-family-${value})` : value;
  export const fontWeight = (value: FontWeight): any =>
    theme.fontWeights[value as never] ? `var(--font-weight-${value})` : value;
  export const lineHeight = (value: LineHeight) =>
    theme.lineHeights[value as never] ? `var(--line-height-${value})` : value;
  export const letterSpacing = (value: LetterSpacing) =>
    theme.letterSpacings[value as never] ? `var(--letter-spacing-${value})` : value;
  export const radius = (value: Radius) => (theme.radii[value as never] ? `var(--radius-${value})` : value);
  export const shadow = (value: Shadow) => (theme.shadows[value as never] ? `var(--shadows-${value})` : value);
  export const sizeContainer = (value: SizeContainer) =>
    theme.sizes.container[value as never] ? `var(--size-container-${value})` : value;

  export const cssUnitToString = (value: number | string | any) =>
    typeof value === "number" ? value.toString() + "px" : value;

  /**
   * https://elad.medium.com/the-new-responsive-design-evolution-2bfb9b504a4e
   * @param device
   */
  export const media = (device: BreakPoint) => {
    switch (device) {
      case "sm": {
        return `@media (max-width: ${theme.breakpoints["sm"]}px)`;
      }
      case "md": {
        return `@media (min-width: ${theme.breakpoints["sm"] + 1}px) and (max-width: ${theme.breakpoints["lg"]}px)`;
      }
      case "lg": {
        return `@media (min-width: ${theme.breakpoints["lg"] + 1}px)`;
      }
    }
  };
}

const cssSpace = css`
  --space-unit: 1rem;

  --space-4xs: calc(0.125 * var(--space-unit));
  --space-3xs: calc(0.25 * var(--space-unit));
  --space-2xs: calc(0.375 * var(--space-unit));
  --space-xs: calc(0.5 * var(--space-unit));
  --space-sm: calc(0.75 * var(--space-unit));
  --space-md: calc(1.25 * var(--space-unit));
  --space-lg: calc(2 * var(--space-unit));
  --space-xl: calc(3.25 * var(--space-unit));
  --space-2xl: calc(5.25 * var(--space-unit));
  --space-3xl: calc(8.5 * var(--space-unit));
  --space-4xl: calc(13.75 * var(--space-unit));

  @media (min-width: ${theme.breakpoints.md}px) {
    --space-unit: 1.25rem;
  }
`;

const cssFontSizes = css`
  --font-size-base-size: 1rem;
  --font-size-scale-ratio: 1.2;

  --font-size-xs: calc((var(--font-size-base-size) / var(--font-size-scale-ratio)) / var(--font-size-scale-ratio));
  --font-size-sm: calc(var(--font-size-xs) * var(--font-size-scale-ratio));
  --font-size-md: calc(var(--font-size-sm) * var(--font-size-scale-ratio) * var(--font-size-scale-ratio));
  --font-size-lg: calc(var(--font-size-md) * var(--font-size-scale-ratio));
  --font-size-xl: calc(var(--font-size-lg) * var(--font-size-scale-ratio));
  --font-size-2xl: calc(var(--font-size-xl) * var(--font-size-scale-ratio));
  --font-size-3xl: calc(var(--font-size-2xl) * var(--font-size-scale-ratio));
  --font-size-4xl: calc(var(--font-size-3xl) * var(--font-size-scale-ratio));
  --font-size-5xl: calc(var(--font-size-4xl) * var(--font-size-scale-ratio));
  --font-size-6xl: calc(var(--font-size-5xl) * var(--font-size-scale-ratio));
  --font-size-7xl: calc(var(--font-size-6xl) * var(--font-size-scale-ratio));

  @media (min-width: ${theme.breakpoints.md}px) {
    --font-size-base-size: 1.25rem;
  }
`;

const createCssVariables = (prefix: string, values: { [key: string]: string | number }) => {
  const results = Object.keys(values).map((key: string) => {
    const value = values[key];
    return `--${prefix}-${key}:${value} `;
  });
  return results.join(";");
};

export const themeCssVariable = css`
  :root {
  ${cssSpace};
  ${cssFontSizes};
  ${createCssVariables("font-family", theme.fonts)};
  ${createCssVariables("color", theme.colors)};
  ${createCssVariables("font-weight", theme.fontWeights)};
  ${createCssVariables("line-height", theme.lineHeights)};
  ${createCssVariables("letter-spacing", theme.letterSpacings)};
  ${createCssVariables("radius", theme.radii)};
  ${createCssVariables("shadows", theme.shadows)};
  ${createCssVariables("size-container", theme.sizes.container)};
  }
`;
