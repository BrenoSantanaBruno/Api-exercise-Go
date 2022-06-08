import React from "react";
import styled from "styled-components";
import { Color } from "../../../../Defaults/Color";
import Pdf from "../Items/Pdf";
import { Font } from "../../../../Defaults/Font";

export default function Header({ children }) {
  return (
    <Container>
      <Div>{children}</Div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Div = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${Color.gray6};
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .bold {
    font-weight: 600;
  }

  button {
    font-size: ${Font.size[4] + "px"};
    color: ${Color.primary};
    background-color: ${Color.white};
    border: none;
    margin-right: 1rem;
  }
`;

const PDFImg = styled.img`
  display: inline-block;
`;
