import React, { useState, useEffect } from "react";
import { InputDiv } from "../../Reusables/Input/InputDiv";
import Button from "../../Reusables/Input/Button";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import { Form } from "../../Reusables/Input/Form";

export default function CadastroAlunos() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState("");
  const [name, setName] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [surname, setSurname] = useState("");
  const [surnameInvalid, setSurnameInvalid] = useState("");
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState("");
  const [curso, setCurso] = useState("");
  const [cursoInvalid, setCursoInvalid] = useState("");

  async function sendToBack() {
    const bodyForBackend = {
      nome: name,
      sobrenome: surname,
      email: email,
      senha: generatedPassword,
      curso: curso,
    };

    console.log(bodyForBackend);

    try {
      const request = await fetch("127.0.0:8000/api/alunos", {
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

  const generatePassword = (e) => {
    e.preventDefault();

    const part1 = Math.random().toString(36).slice(2, 8);
    const part2 = Math.random().toString(36).slice(2, 8);
    const part3 = Math.random().toString(36).slice(2, 8);
    setGeneratedPassword(`${part1 + part2 + part3}`);
  };

  function checkValues(e) {
    e.preventDefault();
    if (name.length === 0) {
      setNameInvalid(true);
    } else {
      setNameInvalid(false);
    }
    if (surname.length === 0) {
      setSurnameInvalid(true);
    } else {
      setSurnameInvalid(false);
    }
    if (!email.includes("@")) {
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }
    if (generatedPassword.length === 0) {
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
    }
    if (curso.length === 0) {
      setCursoInvalid(true);
    } else {
      setCursoInvalid(false);
    }

    if (
      !passwordInvalid &&
      !nameInvalid &&
      !surnameInvalid &&
      !emailInvalid &&
      !cursoInvalid
    ) {
      sendToBack();
    }
  }

  return (
    <Form onSubmit={checkValues}>
      <div className="singleForm">
        <h2>Cadastro de Alunos</h2>
        <InputDiv>
          <p>NOME*</p>
          <input
            onChange={(v) => setName(v.target.value)}
            className={nameInvalid ? "invalid" : ""}
            type="text"
            placeholder="Nome"
          />
        </InputDiv>
        <InputDiv>
          <p>SOBRENOME*</p>
          <input
            onChange={(v) => setSurname(v.target.value)}
            className={surnameInvalid ? "invalid" : ""}
            type="text"
            placeholder="Sobrenome"
          />
        </InputDiv>
        <InputDiv>
          <p>E-MAIL*</p>
          <input
            onChange={(v) => setEmail(v.target.value)}
            className={emailInvalid ? "invalid" : ""}
            type="email"
            placeholder="email@exemplo.com"
          />
        </InputDiv>
        <InputDiv>
          <p>SENHA*</p>
          <input
            onChange={(v) => setGeneratedPassword(v.target.value)}
            className={passwordInvalid ? "invalid" : ""}
            type="text"
            value={generatedPassword}
          />
          <button onClick={generatePassword}>GERAR SENHA FORTE</button>
        </InputDiv>
        <InputDiv>
          <p>CURSO*</p>
          <select
            className={cursoInvalid ? "invalid" : ""}
            onChange={(v) => setCurso(v.target.value)}
          >
            <option value="" defaultValue hidden>
              ESCOLHA
            </option>
            <option value="Técnico em Eletrônica">Técnico em Eletrônica</option>
            <option value="Curso 2">Curso 2</option>
            <option value="_">Curso 3</option>
            <option value="_">Curso 4</option>
            <option value="_">Curso 5</option>
            <option value="_">Curso 6</option>
            <option value="_">Curso 7</option>
          </select>
        </InputDiv>

        <Button type="submit">CADASTRAR</Button>
      </div>
    </Form>
  );
}
