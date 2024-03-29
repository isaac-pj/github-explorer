import styled from "styled-components";
import colors from "../../../theme/colors";

export const Container = styled.nav`
  display: flex;
  min-height: 60px;
  position: relative;
  z-index: 90;
  box-shadow: 0 2px 5px #00000030;
  align-items: center;
  transition: background-color 0.3s ease;

  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
  `}

  ${({ color = colors.primaryColor }) =>
    `
    background-color: ${color};
  `}

  ${({ height }) =>
    height &&
    `
    height: ${height};
  `}

  ${({ padding }) =>
    padding &&
    `
    padding: ${padding};
  `}
`;

export const Start = styled.section`
  /* background-color: green; */
  position: absolute;
  left: 0;
  padding: 1em;
`;

export const Content = styled.section`
  flex-grow: 1;
  /* background-color: yellow; */
  padding: 1em;
`;

export const End = styled.section`
  /* background-color: red; */
  position: absolute;
  right: 0;
  padding: 1em;
`;
