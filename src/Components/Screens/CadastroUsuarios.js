import React, { useState } from "react";
import { InputDiv } from "../../Reusables/Input/InputDiv";
import Button from "../../Reusables/Input/Button";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import { Form } from "../../Reusables/Input/Form";
import Pencil from "../Icons/pencil-solid.svg";
import Delete from "../Icons/circle-xmark-solid.svg";

export default function CadastroUsuários() {
  const [userName, setUserName] = useState("");
  const [userNameInvalid, setUserNameInvalid] = useState(false);
  const [surName, setSurName] = useState("");
  const [surNameInvalid, setSurNameInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  async function sendToBack() {
    const bodyForBackend = {
      nome: userName,
      sobrenome: surName,
      email: email,
      // está faltando o email na base de dados do backend
      senha: password,
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

  function verifyForm(e) {
    e.preventDefault();
    if (userName.length === 0) {
      setUserNameInvalid(true);
    } else {
      setUserNameInvalid(false);
    }
    if (surName.length === 0) {
      setSurNameInvalid(true);
    } else {
      setSurNameInvalid(false);
    }
    if (email.length === 0) {
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }
    if (password.length === 0) {
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
    }

    if (
      !userNameInvalid &&
      !surNameInvalid &&
      !emailInvalid &&
      !passwordInvalid
    ) {
      sendToBack();
    }
  }
  function editUser(e) {
    e.preventDefault();
  }
  function deleteUser(e) {
    e.preventDefault();
  }

  return (
    <Form>
      <section>
        <h2>CADASTRO DE USUÁRIOS</h2>
        <InputDiv>
          <p>NOME*</p>
          <input
            onChange={(v) => setUserName(v.target.value)}
            className={userNameInvalid ? "invalid" : ""}
            type="text"
          />
        </InputDiv>
        <InputDiv>
          <p>SOBRENOME*</p>
          <input
            onChange={(v) => setSurName(v.target.value)}
            className={surNameInvalid ? "invalid" : ""}
            type="text"
          />
        </InputDiv>
        <InputDiv>
          <p>E-MAIL*</p>
          <input
            onChange={(v) => setEmail(v.target.value)}
            className={emailInvalid ? "invalid" : ""}
            type="email"
          />
        </InputDiv>
        <InputDiv>
          <p>SENHA*</p>
          <input
            onChange={(v) => setPassword(v.target.value)}
            className={passwordInvalid ? "invalid" : ""}
            type="password"
          />
        </InputDiv>
        <Button onClick={(e) => verifyForm(e)}>CADASTRAR</Button>
      </section>
      <section>
        <h2>EDITAR USUÁRIOS</h2>
        <Ul>
          <li>
            <div className="wrapper">
              LUIZ CARNEIRO
              <div>
                <button onClick={(e) => editUser(e)}>
                  <img src={Pencil} alt="Edit" />
                </button>
                <button onClick={(e) => deleteUser(e)}>
                  <img src={Delete} alt="Delete" />
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="wrapper">
              Usuário 2
              <div>
                <button onClick={(e) => editUser(e)}>
                  <img src={Pencil} alt="Edit" />
                </button>
                <button onClick={(e) => deleteUser(e)}>
                  <img src={Delete} alt="Delete" />
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="wrapper">
              Usuário 3
              <div>
                <button onClick={(e) => editUser(e)}>
                  <img src={Pencil} alt="Edit" />
                </button>
                <button onClick={(e) => deleteUser(e)}>
                  <img src={Delete} alt="Delete" />
                </button>
              </div>
            </div>
          </li>
        </Ul>
      </section>
    </Form>
  );
}

const Ul = styled.ul`
  list-style: none;
  text-transform: uppercase;
  margin-top: 1rem;

  li {
    margin-top: 0.3rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid ${Color.gray7};
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    border: none;
    padding-left: 0.7rem;
    background-color: ${Color.white};
  }
  img {
    height: 1.3rem;
  }
`;
