import React from "react";
import styled from "styled-components";
import Video from "../Items/Video";

export default function BodyVideos() {
  return (
    <Div>
      <Video name="Título do Vídeo"></Video>
      <Video name="Título do Vídeo"></Video>
      <Video name="Título do Vídeo"></Video>
      <Video name="Título do Vídeo"></Video>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
