import styled from "styled-components";
import colors from "../../../theme/colors";

export const Button = styled.button`
  height: 40px;
  border-radius: 20px;
  padding: 0 40px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;

  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
  `}

  ${({ fill, theme = "dark", color = colors.secondaryColor }) =>
    fill === "solid" &&
    `
    color: ${theme === "clear" ? colors.textDark : colors.textLight};
    background-color: ${color};
    border: none;
  `}

  ${({ fill, theme = "dark", color = colors.secondaryColor }) =>
    fill === "outline" &&
    `
    color: ${color};
    background-color: transparent;
    border: solid 2px ${color};
  `}

  ${({ fill, theme = "dark", color = colors.secondaryColor }) =>
    fill === "clear" &&
    `
    color: ${theme === "clear" ? colors.textLight : color};
    background-color: transparent;
    border: none;

    &:hover:not(:disabled) {
      background-color: #00000010;
    }
  `}
  
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }

  ${({ block }) =>
    block &&
    `
    width: 100%;
  `}
`;

export const ButtonIcon = styled.button`
  min-width: 30px;
  height: 50px;
  width: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  border-radius: 50%;
  font-size: 12pt;
  text-transform: uppercase;
  background-color: ${colors.secondaryColor};
  color: ${colors.textLight};
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;

  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
  `}

  ${({ size }) =>
    size &&
    `
      width: ${size}px;
      height: ${size}px;
  `}

  ${({ size }) =>
    size < 40 &&
    `
      font-size: 10pt;
  `}

  ${({ color }) =>
    color &&
    `
      background-color: ${color};
  `}

  ${({ theme }) =>
    theme === "clear" &&
    `
      color: ${colors.accent};
      background-color: ${colors.shadeMedium};
  `}

  &:focus {
    outline: initial;
  }

  &:hover:not(:disabled):before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    opacity: 0.1;
  }

  &:active:not(:disabled):before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    opacity: 0.25;
  }

  &:disabled {
    opacity: 0.5;
  }

  ${({ fill, theme = "dark", color = colors.secondaryColor }) =>
    fill === "clear" &&
    `
    color: ${theme === "clear" ? colors.textLight : color};
    background-color: transparent;
    border: none;

    &:hover:not(:disabled) {
      background-color: #00000010;
    }
  `}
`;
