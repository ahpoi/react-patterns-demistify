import {
  border,
  color,
  composeSystem,
  flex,
  grid,
  layout,
  position,
  shadow,
  space,
  SystemBorder,
  SystemColor,
  SystemFlex,
  SystemGrid,
  SystemLayout,
  SystemPosition,
  SystemShadow,
  SystemSpace,
} from "../core/styled-system";
import styled from "@emotion/styled";

export type BoxProps = SystemFlex &
  SystemGrid &
  SystemLayout &
  SystemSpace &
  SystemColor &
  SystemPosition &
  SystemBorder &
  SystemShadow;

export const Box = styled.div<BoxProps>((props) => ({
  ...composeSystem(
    position(props),
    layout(props),
    flex(props),
    grid(props),
    space(props),
    color(props),
    border(props),
    shadow(props)
  ),
}));

export const Flex = styled.div<SystemFlex & SystemLayout & SystemSpace>((props) => ({
  display: "flex",
  ...composeSystem(
      flex(props),
      layout(props)
  ),
}));

export const Grid = styled.div<SystemGrid & SystemLayout & SystemPosition>((props) => ({
  display: "grid",
  ...composeSystem(grid(props), layout(props), position(props)),
}));

export const Position = styled.div<SystemPosition>((props) => ({
  ...position({ ...props }),
}));
