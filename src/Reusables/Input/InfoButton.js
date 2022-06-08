import React from "react";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";

export default function InfoButton({ children }) {
  return (
    <Div>
      <div className="blueContainer">
        <p>i</p>
      </div>

      <div className="messageDiv">{children}</div>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  width: fit-content;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  .blueContainer {
    background-color: ${Color.primary};
    width: fit-content;
    color: ${Color.white};
    padding: 0.6rem 0.6rem;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    position: absolute;
  }

  .messageDiv {
    display: none;
    bottom: 0;
    left: 1.5rem;
    min-width: 7rem;
    position: absolute;
    background-color: ${Color.white};
    border: 1px dotted ${Color.gray7};
    color: ${Color.gray7};
    font-size: ${Font.size[2] + "px"};

    .guideImg {
      width: 18rem;
    }
  }

  &:hover {
    .messageDiv {
      display: block;
    }
  }
`;
