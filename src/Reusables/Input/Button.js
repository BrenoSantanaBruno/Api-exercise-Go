import React from "react";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Border } from "../../Defaults/Border";
import { Font } from "../../Defaults/Font";

export default function Button({ onClick, type, children }) {
  return (
    <ButtonStyled onClick={onClick} type={type}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: ${Color.secondary};
  border: 0px solid;
  border-radius: ${Border.radiusFields};
  margin-top: 1rem;
  padding: 0.2rem 0.8rem;
  /* align-self: flex-start; */
  font-weight: bold;
  color: ${Color.white};
  font-size: ${Font.size[3] + "px"};

  &:hover {
    background-color: ${Color.secondaryHover};
  }
  &:active {
    background-color: ${Color.secondaryClick};
  }
`;
