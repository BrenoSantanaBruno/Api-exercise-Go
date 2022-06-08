import React from "react";
import styled from "styled-components";
import Pdf from "../Items/Pdf";

export default function BodyBodyPDF() {
  return (
    <Div>
      <Pdf name="Nome do Arquivo"></Pdf>
      <Pdf name="Nome do Arquivo"></Pdf>
      <Pdf name="Nome do Arquivo"></Pdf>
      <Pdf name="Nome do Arquivo"></Pdf>
      <Pdf name="Nome do Arquivo"></Pdf>
      <Pdf name="Nome do Arquivo"></Pdf>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
