import React from "react";
import { Form } from "../../Reusables/Input/Form";
import { InputDiv } from "../../Reusables/Input/InputDiv";

export default function Ajuda() {
  return (
    <Form>
      <div className="singleForm">
        <h2>Entre em contato</h2>
        <InputDiv>
          <p>ESCOLA</p>
          <a href="mailto:tech@devstorm.io">emaildaescola@escola.com</a>
        </InputDiv>
        <InputDiv>
          <p>DEVSTORM</p>
          <a href="mailto:tech@devstorm.io">tech@devstorm.io</a>
        </InputDiv>
      </div>
    </Form>
  );
}
