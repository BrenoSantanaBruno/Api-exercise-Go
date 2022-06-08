import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";

export const P = styled.p`
  font-weight: bold;
  font-size: ${Font.size[2] + "px"};
  text-transform: uppercase;
  color: ${Color.gray6};
`;
