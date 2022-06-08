import React, { useState } from "react";
import Header from "./Header/Header";
import { InputDiv } from "../../../Reusables/Input/InputDiv";
import styled from "styled-components";
import { Color } from "../../../Defaults/Color";

import BodyPDF from "./Body/BodyPDF";
import BodyVideos from "./Body/BodyVideos";
import pdfDownload from "../../Icons/pdf-download.svg";
import YoutubeLogo from "../../Icons/youtube-brands.svg";

export default function ArquivosView({ title }) {
  let curso = "TÉCNICO EM ELETRÔNICA";

  const [selectedView, setSelectedView] = useState("arquivos");

  return (
    <>
      <section>
        <h2>{title}</h2>
        <InputDiv>
          <p>CURSO: {curso}</p>
        </InputDiv>

        <SelectArquivesOrVideos></SelectArquivesOrVideos>
        <Header>
          <HeaderDivButton>
            <img width={20} src={pdfDownload}></img>
            <button
              className={selectedView === "arquivos" ? "bold" : ""}
              onClick={(e) => {
                e.preventDefault();
                setSelectedView("arquivos");
              }}
            >
              ARQUIVOS
            </button>
          </HeaderDivButton>
          <HeaderDivButton>
            <img width={20} src={YoutubeLogo}></img>

            <button
              className={selectedView === "videos" ? "bold" : ""}
              onClick={(e) => {
                e.preventDefault();
                setSelectedView("videos");
              }}
            >
              VÍDEOS
            </button>
          </HeaderDivButton>
        </Header>
        {selectedView === "arquivos" && <BodyPDF></BodyPDF>}
        {selectedView === "videos" && <BodyVideos></BodyVideos>}
      </section>
    </>
  );
}

const SelectArquivesOrVideos = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  button {
    color: ${Color.primary};
    border: none;
    background-color: ${Color.white};
    border-right: 1px dashed ${Color.gray6};
    padding-right: 1rem;
  }

  button:last-child {
    border: none;
  }
`;

const HeaderDivButton = styled.div`
  display: flex;
  gap: 0.3rem;
`;
