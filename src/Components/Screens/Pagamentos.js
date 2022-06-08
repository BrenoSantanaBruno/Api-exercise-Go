import React, { useState } from "react";
import { InputDiv } from "../../Reusables/Input/InputDiv";
import Button from "../../Reusables/Input/Button";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import { Form } from "../../Reusables/Input/Form";

export default function Pagamentos() {
  const [deposit, setDeposit] = useState("");
  const [depositInvalid, setDepositInvalid] = useState(false);
  const [pix, setPix] = useState("");
  const [pixInvalid, setPixInvalid] = useState(false);

  async function sendToBack() {
    const bodyForBackend = {
      deposito: deposit,
      pixcnpj: pix,
    };

    console.log(bodyForBackend);

    try {
      const request = await fetch("127.0.0.1:8000/api/", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyForBackend),
      });

      const data = await request.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function checkValues() {
    if (deposit.length === 0) {
      setDepositInvalid(true);
    } else {
      setDepositInvalid(false);
    }
    if (pix.length === 0) {
      setPixInvalid(true);
    } else {
      setPixInvalid(false);
    }

    if (!depositInvalid && !pixInvalid) {
      sendToBack();
    }
  }
  return (
    <Form onSubmit={checkValues}>
      <div className="singleForm">
        <h2>Cadastro de pagamentos</h2>
        <InputDiv>
          <p>DEPÓSITO</p>
          <textarea
            onChange={(v) => setDeposit(v.target.value)}
            className={depositInvalid ? "invalid" : ""}
            placeholder={`Banco Exemplo
Ag.: 0000-0
Conta: 00000-0
CNPJ: 00.000.000/0000-00
Escola Técnica Artec Ltda.`}
          ></textarea>
        </InputDiv>
        <InputDiv>
          <p>PIX CNPJ</p>
          <textarea
            onChange={(v) => setPix(v.target.value)}
            className={pixInvalid ? "invalid" : ""}
            placeholder={`PIX CNPJ
CNPJ: 00.000.000/0000-00
Banco: Exemplo
Escola Técnica Artec Ltda.`}
          ></textarea>
        </InputDiv>

        <div className="buttonDiv">{/* <Button>EDITAR</Button> */}</div>
        <Button onClick={checkValues}>SALVAR</Button>
      </div>
    </Form>
  );
}
