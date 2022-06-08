import styled from "styled-components";
import { Color } from "../Defaults/Color";
import { Font } from "../Defaults/Font";

export const A = styled.a`
  margin-top: 0.5rem;
  user-select: none;
  font-weight: bold;
  font-size: ${Font.size[2] + "px"};
  text-transform: uppercase;
  color: ${Color.gray6};
  text-decoration: none;

  &:hover {
    color: ${Color.gray7};
  }
  &:active {
    color: ${Color.gray7};
  }
`;
