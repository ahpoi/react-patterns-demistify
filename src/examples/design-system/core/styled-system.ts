// noinspection JSUnfilteredForInLoop
import React from "react";
import { Theme } from "./app.theme";

type SystemResponsiveProps<T> = T | { sm?: T; md?: T; lg?: T };

export type SystemTypography = Partial<{
  fontSize: SystemResponsiveProps<Theme.FontSize>;
  fontFamily: SystemResponsiveProps<Theme.FontFamily>;
  fontWeight: SystemResponsiveProps<Theme.FontWeight>;
  lineHeight: SystemResponsiveProps<Theme.LineHeight>;
  letterSpacing: SystemResponsiveProps<Theme.LetterSpacing>;
  textAlign: SystemResponsiveProps<React.CSSProperties["textAlign"]>;
  fontStyle: SystemResponsiveProps<React.CSSProperties["fontStyle"]>;
  textTransform: SystemResponsiveProps<React.CSSProperties["textTransform"]>;
  overflowWrap: SystemResponsiveProps<React.CSSProperties["overflowWrap"]>;
}>;

const typographyProperties = {
  fontSize: { properties: ["fontSize"], scale: Theme.fontSize },
  fontFamily: { properties: ["fontFamily"], scale: Theme.fontFamily },
  fontWeight: { properties: ["fontWeight"], scale: Theme.fontWeight },
  lineHeight: { properties: ["lineHeight"], scale: Theme.lineHeight },
  letterSpacing: { properties: ["letterSpacing"], scale: Theme.letterSpacing },
  textAlign: { properties: ["textAlign"] },
  fontStyle: { properties: ["fontStyle"] },
  textTransform: { properties: ["textTransform"] },
  overflowWrap: { properties: ["overflowWrap"] },
};

export const typography = (system: SystemTypography) =>
  toProperties(
    pick(system, [
      "fontSize",
      "fontFamily",
      "fontWeight",
      "lineHeight",
      "letterSpacing",
      "textAlign",
      "fontStyle",
      "textTransform",
      "overflowWrap",
    ]),
    typographyProperties
  );

export type SystemSpace = Partial<{
  m: SystemResponsiveProps<Theme.Space>;
  mt: SystemResponsiveProps<Theme.Space>;
  mr: SystemResponsiveProps<Theme.Space>;
  mb: SystemResponsiveProps<Theme.Space>;
  ml: SystemResponsiveProps<Theme.Space>;
  mx: SystemResponsiveProps<Theme.Space>;
  my: SystemResponsiveProps<Theme.Space>;
  p: SystemResponsiveProps<Theme.Space>;
  pt: SystemResponsiveProps<Theme.Space>;
  pr: SystemResponsiveProps<Theme.Space>;
  pb: SystemResponsiveProps<Theme.Space>;
  pl: SystemResponsiveProps<Theme.Space>;
  px: SystemResponsiveProps<Theme.Space>;
  py: SystemResponsiveProps<Theme.Space>;
}>;

const spaceProperties = {
  m: { properties: ["margin"], scale: Theme.space },

  mx: { properties: ["marginLeft", "marginRight"], scale: Theme.space },
  my: { properties: ["marginTop", "marginBottom"], scale: Theme.space },

  mt: { properties: ["marginTop"], scale: Theme.space },
  mr: { properties: ["marginRight"], scale: Theme.space },
  mb: { properties: ["marginBottom"], scale: Theme.space },
  ml: { properties: ["marginLeft"], scale: Theme.space },

  p: { properties: ["padding"], scale: Theme.space },

  px: { properties: ["paddingLeft", "paddingRight"], scale: Theme.space },
  py: { properties: ["paddingTop", "paddingBottom"], scale: Theme.space },

  pt: { properties: ["paddingTop"], scale: Theme.space },
  pr: { properties: ["paddingRight"], scale: Theme.space },
  pb: { properties: ["paddingBottom"], scale: Theme.space },
  pl: { properties: ["paddingLeft"], scale: Theme.space },
};

export const space = (system: SystemSpace) =>
  toProperties<SystemSpace>(
    pick(system, ["m", "mx", "my", "mt", "mr", "mb", "ml", "p", "px", "py", "pt", "pr", "pb", "pl"]),
    spaceProperties
  );

export type SystemFlex = Partial<{
  alignItems: SystemResponsiveProps<React.CSSProperties["alignItems"]>;
  alignContent: SystemResponsiveProps<React.CSSProperties["alignContent"]>;
  justifyItems: SystemResponsiveProps<React.CSSProperties["justifyItems"]>;
  justifyContent: SystemResponsiveProps<React.CSSProperties["justifyContent"]>;
  flexWrap: SystemResponsiveProps<React.CSSProperties["flexDirection"]>;
  flexDirection: SystemResponsiveProps<React.CSSProperties["flexDirection"]>;
  flex: SystemResponsiveProps<React.CSSProperties["flex"]>;
  flexGrow: SystemResponsiveProps<React.CSSProperties["flexGrow"]>;
  flexShrink: SystemResponsiveProps<React.CSSProperties["flexShrink"]>;
  flexBasis: SystemResponsiveProps<React.CSSProperties["flexBasis"]>;
  justifySelf: SystemResponsiveProps<React.CSSProperties["justifySelf"]>;
  placeItems: SystemResponsiveProps<React.CSSProperties["placeItems"]>;
  order: SystemResponsiveProps<React.CSSProperties["order"]>;
}>;

export const flex = (system: SystemFlex) =>
  toBasicProperties(
    pick(system, [
      "alignItems",
      "alignContent",
      "justifyItems",
      "justifyContent",
      "flexWrap",
      "flexDirection",
      "flex",
      "flexGrow",
      "flexShrink",
      "flexBasis",
      "justifySelf",
      "placeItems",
      "order",
    ])
  );

export type SystemGrid = Partial<{
  gridGap: SystemResponsiveProps<Theme.Space>;
  gridColumnGap: SystemResponsiveProps<Theme.Space>;
  gridRowGap: SystemResponsiveProps<Theme.Space>;
  gridColumn: SystemResponsiveProps<React.CSSProperties["gridColumn"]>;
  gridRow: SystemResponsiveProps<React.CSSProperties["gridRow"]>;
  gridAutoFlow: SystemResponsiveProps<React.CSSProperties["gridAutoFlow"]>;
  gridAutoColumns: SystemResponsiveProps<React.CSSProperties["gridAutoColumns"]>;
  gridAutoRows: SystemResponsiveProps<React.CSSProperties["gridAutoRows"]>;
  gridTemplate: SystemResponsiveProps<React.CSSProperties["gridTemplate"]>;
  gridTemplateColumns: SystemResponsiveProps<React.CSSProperties["gridTemplateColumns"]>;
  gridTemplateRows: SystemResponsiveProps<React.CSSProperties["gridTemplateRows"]>;
  gridTemplateAreas: SystemResponsiveProps<React.CSSProperties["gridTemplateAreas"]>;
  gridArea: SystemResponsiveProps<React.CSSProperties["gridArea"]>;
  placeItems: SystemResponsiveProps<React.CSSProperties["placeItems"]>;
  placeContent: SystemResponsiveProps<React.CSSProperties["placeContent"]>;
  placeSelf: SystemResponsiveProps<React.CSSProperties["placeSelf"]>;
}>;

export const grid = (system: SystemGrid) =>
  toProperties(
    pick(system, [
      "gridGap",
      "gridColumnGap",
      "gridRowGap",
      "gridColumn",
      "gridRow",
      "gridAutoFlow",
      "gridAutoColumns",
      "gridAutoRows",
      "gridTemplate",
      "gridTemplateColumns",
      "gridTemplateRows",
      "gridTemplateAreas",
      "gridArea",
      "placeItems",
      "placeContent",
      "placeSelf",
    ]),
    gridProperties
  );

const gridProperties = {
  gridGap: { properties: ["gridGap"], scale: Theme.space },
  gridColumnGap: { properties: ["gridColumnGap"], scale: Theme.space },
  gridRowGap: { properties: ["gridRowGap"], scale: Theme.space },

  gridColumn: { properties: ["gridColumn"] },
  gridRow: { properties: ["gridRow"] },
  gridAutoFlow: { properties: ["gridAutoFlow"] },
  gridAutoColumns: { properties: ["gridAutoColumns"] },
  gridAutoRows: { properties: ["gridAutoRows"] },

  gridTemplate: { properties: ["gridTemplate"] },
  gridTemplateColumns: { properties: ["gridTemplateColumns"] },
  gridTemplateRows: { properties: ["gridTemplateRows"] },
  gridTemplateAreas: { properties: ["gridTemplateAreas"] },
  gridArea: { properties: ["gridArea"] },

  placeItems: { properties: ["placeItems"] },
  placeContent: { properties: ["placeContent"] },
  placeSelf: { properties: ["placeSelf"] },
};

export type SystemLayout = Partial<{
  display: SystemResponsiveProps<React.CSSProperties["display"]>;

  w: SystemResponsiveProps<React.CSSProperties["width"] | Theme.SizeContainer>;
  width: SystemResponsiveProps<React.CSSProperties["width"] | Theme.SizeContainer>;
  minW: SystemResponsiveProps<React.CSSProperties["minWidth"] | Theme.SizeContainer>;
  minWidth: SystemResponsiveProps<React.CSSProperties["minWidth"] | Theme.SizeContainer>;
  maxW: SystemResponsiveProps<React.CSSProperties["maxWidth"] | Theme.SizeContainer>;
  maxWidth: SystemResponsiveProps<React.CSSProperties["maxWidth"] | Theme.SizeContainer>;

  h: SystemResponsiveProps<React.CSSProperties["height"]>;
  height: SystemResponsiveProps<React.CSSProperties["height"]>;
  minH: SystemResponsiveProps<React.CSSProperties["minWidth"]>;
  minHeight: SystemResponsiveProps<React.CSSProperties["minHeight"]>;
  maxH: SystemResponsiveProps<React.CSSProperties["maxHeight"]>;
  maxHeight: SystemResponsiveProps<React.CSSProperties["maxHeight"]>;

  overflow: SystemResponsiveProps<React.CSSProperties["overflow"]>;
  overflowX: SystemResponsiveProps<React.CSSProperties["overflowX"]>;
  overflowY: SystemResponsiveProps<React.CSSProperties["overflowY"]>;
}>;

const layoutProperties = {
  display: { properties: ["display"] },

  w: { properties: ["width"], scale: Theme.sizeContainer },
  width: { properties: ["width"], scale: Theme.sizeContainer },
  minW: { properties: ["minWidth"], scale: Theme.sizeContainer },
  minWidth: { properties: ["minWidth"], scale: Theme.sizeContainer },
  maxW: { properties: ["maxWidth"], scale: Theme.sizeContainer },
  maxWidth: { properties: ["maxWidth"], scale: Theme.sizeContainer },

  h: { properties: ["height"] },
  height: { properties: ["height"] },
  minH: { properties: ["minHeight"] },
  minHeight: { properties: ["minHeight"] },
  maxH: { properties: ["maxHeight"] },
  maxHeight: { properties: ["maxHeight"] },

  overflow: { properties: ["overflow"] },
  overflowX: { properties: ["overflowX"] },
  overflowY: { properties: ["overflowY"] },
};

export const layout = (system: SystemLayout) =>
  toProperties(
    pick(system, [
      "display",
      "w",
      "width",
      "minW",
      "minWidth",
      "maxW",
      "maxWidth",
      "h",
      "height",
      "minH",
      "minHeight",
      "maxW",
      "maxWidth",
      "overflow",
      "overflowX",
      "overflowY",
    ]),
    layoutProperties
  );

export type SystemColor = Partial<{
  color: React.CSSProperties["color"] | Theme.ColorScheme;
  bg: React.CSSProperties["backgroundColor"] | Theme.ColorScheme;
  backgroundColor: React.CSSProperties["backgroundColor"] | Theme.ColorScheme;
}>;

const colorProperties = {
  color: { properties: ["color"] },
  bg: { properties: ["backgroundColor"], scale: Theme.color },
  backgroundColor: { properties: ["backgroundColor"], scale: Theme.color },
};

export const color = (system: SystemColor) =>
  toProperties(pick(system, ["color", "bg", "backgroundColor"]), colorProperties);

export const position = (system: SystemPosition) =>
  toBasicProperties(pick(system, ["position", "zIndex", "top", "right", "bottom", "left", "isolation"]));

export type SystemPosition = Partial<{
  position: SystemResponsiveProps<React.CSSProperties["position"]>;
  zIndex: SystemResponsiveProps<React.CSSProperties["zIndex"]>;
  top: SystemResponsiveProps<React.CSSProperties["top"]>;
  right: SystemResponsiveProps<React.CSSProperties["right"]>;
  bottom: SystemResponsiveProps<React.CSSProperties["bottom"]>;
  left: SystemResponsiveProps<React.CSSProperties["left"]>;
  isolation: SystemResponsiveProps<React.CSSProperties["isolation"]>;
}>;

export type SystemBorder = Partial<{
  border: SystemResponsiveProps<React.CSSProperties["border"]>;
  borderRadius: SystemResponsiveProps<React.CSSProperties["borderRadius"] | Theme.Radius>;
}>;

const borderProperties = {
  border: { properties: ["border"] },
  borderRadius: { properties: ["borderRadius"], scale: Theme.radius },
};

export const border = (system: SystemBorder) =>
  toProperties(pick(system, ["border", "borderRadius"]), borderProperties);

export type SystemShadow = Partial<{
  boxShadow: React.CSSProperties["boxShadow"] | Theme.Shadow;
  textShadow: React.CSSProperties["textShadow"] | Theme.Shadow;
}>;

const shadowProperties = {
  boxShadow: { properties: ["boxShadow"], scale: Theme.shadow },
  textShadow: { properties: ["textShadow"], scale: Theme.shadow },
};

export const shadow = (system: SystemShadow) =>
  toProperties(pick(system, ["boxShadow", "textShadow"]), shadowProperties);

export const composeSystem = (...args: any[]) => {
  const resultSmallBp: any = {};
  const resultsMediumBp: any = {};
  const resultsLargeBp: any = {};
  const bpMdKey = Theme.media("md");
  const bpLgKey = Theme.media("lg");
  args.forEach((it) => {
    const { [bpMdKey]: _x, [bpLgKey]: _y, ...small } = it;
    const medium = it[bpMdKey];
    const large = it[bpLgKey];
    for (let key in small) {
      resultSmallBp[key] = small[key];
    }
    for (let key in medium) {
      resultsMediumBp[key] = medium[key];
    }
    for (let key in large) {
      resultsLargeBp[key] = large[key];
    }
  });
  return createCssProperties(resultSmallBp, resultsMediumBp, resultsLargeBp);
};

const toBasicProperties = <T>(system: T, scale?: (value: any) => any) => {
  const resultSmallBp: any = {};
  const resultsMediumBp: any = {};
  const resultsLargeBp: any = {};
  Object.keys(system)?.map((key) => {
    const value: string | number | any | { sm: any; md: any; lg: any } = system[key as never];
    if (typeof value === "string" || typeof value === "number") {
      resultSmallBp[key] = scale ? scale(value) : value;
    } else if (typeof value === "object") {
      if (value.sm) {
        resultSmallBp[key] = scale ? scale(value.sm) : value.sm;
      }
      if (value.md) {
        resultsMediumBp[key] = scale ? scale(value.md) : value.md;
      }
      if (value.lg) {
        resultsLargeBp[key] = scale ? scale(value.lg) : value.lg;
      }
    }
  });
  return createCssProperties(resultSmallBp, resultsMediumBp, resultsLargeBp);
};

const toProperties = <T>(
  system: T,
  properties: { [key: string]: { properties: string[]; scale?: (value: any) => any } }
) => {
  const resultSmallBp: any = {};
  const resultsMediumBp: any = {};
  const resultsLargeBp: any = {};
  Object.keys(system)?.map((key) => {
    const value: string | number | any | { sm: any; md: any; lg: any } = system[key as never];
    const cssProperties = properties[key];
    cssProperties?.properties?.forEach((property: any) => {
      if (typeof value === "string" || typeof value === "number") {
        resultSmallBp[property] = cssProperties.scale ? cssProperties.scale(value) : value;
      } else if (typeof value === "object") {
        if (value.sm) {
          resultSmallBp[property] = cssProperties.scale ? cssProperties.scale(value.sm) : value.sm;
        }
        if (value.md) {
          resultsMediumBp[property] = cssProperties.scale ? cssProperties.scale(value.md) : value.md;
        }
        if (value.lg) {
          resultsLargeBp[property] = cssProperties.scale ? cssProperties.scale(value.lg) : value.lg;
        }
      }
    });
  });
  return createCssProperties(resultSmallBp, resultsMediumBp, resultsLargeBp);
};

const createCssProperties = (sm: any, md: any, lg: any) => {
  return {
    ...sm,
    [Theme.media("md")]: {
      ...md,
    },
    [Theme.media("lg")]: {
      ...lg,
    },
  };
};

const pick = (obj: any, keys: string[]) =>
  Object.assign({}, ...keys.map((k: any) => (k in obj ? { [k]: obj[k] } : {})));
