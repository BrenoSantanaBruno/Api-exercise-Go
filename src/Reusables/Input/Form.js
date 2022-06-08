import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import { MaxWidth } from "../../Defaults/MaxWidth";
import { Border } from "../../Defaults/Border";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: ${Color.primary};
  flex-direction: column;
  gap: 3rem;

  h2 {
    color: ${Color.secondary};
    font-weight: bold;
    font-size: ${Font.size[5] + "px"};
    text-transform: uppercase;
  }

  .gray {
    color: ${Color.gray7};
  }

  .sectionFlex {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 2rem;
  }
  section {
    width: 100%;
  }

  .buttonDiv {
    display: flex;
    gap: 1rem;
  }

  @media only screen and (max-width: ${MaxWidth.tablet}) {
    grid-template-columns: 1fr;
  }
`;
