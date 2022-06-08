import React from "react";
import styled from "styled-components";
import pdfDownload from "../../../Icons/pdf-download.svg";
import { Font } from "../../../../Defaults/Font";
import { Color } from "../../../../Defaults/Color";

export default function Pdf({ name }) {
  return (
    <Div>
      <PDFImg width={75} src={pdfDownload}></PDFImg>
      <P>{name}</P>
    </Div>
  );
}

const PDFImg = styled.img`
  display: inline-block;
`;

const Div = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  color: ${Color.gray7};
  font-size: ${Font.size[2] + "px"};
`;
