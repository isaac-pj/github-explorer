import styled from "styled-components";
import { Field } from "formik";
import colors from "../../theme/colors";
import { MEDIA } from "../../enums/general.enum";

export const Search = styled(Field)`
  height: 40px;
  padding: 0 30px;
  color: ${colors.textDark};
  font-size: 12px;
  font-weight: bold;
  background-color: ${colors.shadeMedium};
  border: none;
  border: solid 2px #00000020;
  border-radius: 20px;

  &:focus {
    outline: none;
    border: solid 2px ${colors.secondaryColor};
  }

  &::placeholder {
    font-weight: normal;
    color: ${colors.dinamic};
  }

  ${({ block }) =>
    block &&
    `
    width: 100%;
  `}

  ${({ width }) =>
    width &&
    `
    width: ${width};
  `}

  @media (max-width: ${MEDIA.SM}) {
    width: 100%;
  }
`;
