import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Border } from "../../Defaults/Border";
import { Font } from "../../Defaults/Font";
import { MaxWidth } from "../../Defaults/MaxWidth";

export const InputDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media only screen and (max-width: ${MaxWidth.tablet}) {
    flex-direction: column;
  }

  input {
    font-size: ${Font.size[3] + "px"};
    padding: 0.3rem;
    margin-left: auto;
    width: 100%;
    border-radius: ${Border.radiusFields};
    border: 1px solid ${Color.gray6};
  }

  .selectHorizontalButtons.invalid,
  textarea.invalid,
  select.invalid,
  input.invalid {
    border: 1px solid ${Color.invalidBorder};
    background-color: ${Color.invalidBackground};
  }

  select {
    font-size: ${Font.size[3] + "px"};
    padding: 0.3rem;
    width: 100%;
    color: ${Color.primary};
    text-align: center;
    border: none;
    border-radius: ${Border.radiusFields};
  }

  option {
    color: ${Color.primary};
  }

  textarea {
    border-radius: ${Border.radiusFields};
    border: 1px solid ${Color.gray6};
    padding: 0.3rem;
    height: 6rem;
  }

  .grayButton {
    color: ${Color.primary};
    border: none;
    border-radius: ${Border.radiusFields};
    max-width: 200px;
    padding: 0.3rem;
  }

  .headerWithInfo {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .selectHorizontalButtons {
    display: flex;
    border-radius: ${Border.radiusFields};
    border: 1px solid ${Color.gray6};
    overflow: hidden;
    width: fit-content;

    button {
      border: none;
      background-color: ${Color.white};
      padding: 0.5rem 0.8rem;
      border-right: 1px dotted ${Color.gray6};
      color: ${Color.primary};
      font-weight: bold;
      font-size: ${Font.size[1] + "px"};
    }

    .moduleActive {
      background-color: ${Color.primary};
      color: ${Color.white};
    }
  }
`;
