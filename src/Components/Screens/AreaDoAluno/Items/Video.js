import React from "react";
import styled from "styled-components";
import { Font } from "../../../../Defaults/Font";
import { Color } from "../../../../Defaults/Color";
import VideoThumbnail from "./VideoThumbnail.png";

export default function Video({ name }) {
  return (
    <Div>
      <VideoImage width={100} src={VideoThumbnail}></VideoImage>
      <P>{name}</P>
    </Div>
  );
}

const VideoImage = styled.img`
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
