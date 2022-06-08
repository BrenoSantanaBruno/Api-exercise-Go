import React, { useState } from "react";
import styled from "styled-components";

import { Border } from "../../Defaults/Border";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import { A } from "../../Reusables/Anchor";
import Button from "../../Reusables/Input/Button";
import { H3, H2 } from "../../Reusables/Text/Headers";
import { P } from "../../Reusables/Text/Paragraph";

export default function Login({
  areaStudentOrADM,
  setAreaStudentOrADM,
  setUserIsLoggedIn,
}) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function logIn(e) {
    e.preventDefault();

    // check credentials in back-end
    setUserIsLoggedIn(true);
  }

  function switchUser(e) {
    e.preventDefault();

    setAreaStudentOrADM((old) => (old === "student" ? "adm" : "student"));
  }

  return (
    <DivContainer>
      <DivFormContainer>
        <LoginContainer onSubmit={logIn}>
          <LoginTitle>
            <H2>
              Login{" "}
              {areaStudentOrADM === "adm" ? "do Administrador" : "do Aluno"}
            </H2>
          </LoginTitle>
          <InputDiv>
            <H2>Usuário</H2>
            <input onChange={(v) => setUser(v)} type={"text"}></input>
          </InputDiv>
          <InputDiv>
            <H2>Senha</H2>
            <input onChange={(v) => setPassword(v)} type={"password"}></input>
          </InputDiv>
          <DivCenterButton>
            <Button type="submit">Entrar</Button>
          </DivCenterButton>
        </LoginContainer>
        <Button onClick={switchUser}>
          Fazer Login como{" "}
          {areaStudentOrADM === "adm" ? "Aluno" : "Administrador"}
        </Button>
        <A href="#">Esqueci minha senha</A>
      </DivFormContainer>
      <Footer>
        <P>ESCOLA TÉCNICA ARTEC - TODOS OS DIREITOS RESERVADOS</P>
      </Footer>
    </DivContainer>
  );
}

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const DivFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const LoginContainer = styled.form`
  background-color: ${Color.gray2};
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: ${Border.radius};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const InputDiv = styled.div`
  display: flex;
  color: ${Color.gray7};
  gap: 1rem;

  input {
    margin-left: auto;
    width: 100%;
    max-width: 250px;
    background-color: ${Color.gray2};
    border-radius: ${Border.radiusFields};
    border: 1px solid ${Color.gray6};
  }
`;

const DivCenterButton = styled.div`
  display: flex;
  gap: 1rem;
  height: fit-content;
  width: fit-content;
  margin-left: auto;
`;

const Footer = styled.footer`
  text-align: center;
  margin-bottom: 1rem;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
`;
