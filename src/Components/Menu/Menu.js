import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import { MaxWidth } from "../../Defaults/MaxWidth";

export default function Menu({
  setUserIsLoggedIn,
  areaStudentOrADM,
  setScreen,
}) {
  let listItems;

  function logOff() {
    setUserIsLoggedIn(false);
  }

  if (areaStudentOrADM === "adm") {
    listItems = (
      <>
        <Link className="Link" to="/cadastro-cursos">
          Cadastro de cursos
        </Link>
        <Link className="Link" to="/pagamentos">
          Pagamentos
        </Link>
        <Link className="Link" to="/cadastro-alunos">
          Alunos
        </Link>
        <Link className="Link" to="/upload-arquivos">
          Upload de arquivos
        </Link>
        <Link className="Link" to="/cadastro-usuarios">
          Usuários
        </Link>
        <Link className="Link" to="/" onClick={logOff}>
          Sair
        </Link>
        <Link className="Link" to="/ajuda">
          Ajuda <span>?</span>
        </Link>
      </>
    );
  }

  if (areaStudentOrADM === "student") {
    listItems = (
      <>
        <Link className="Link" to="/aluno-curso-arquivos">
          Arquivos do curso
        </Link>
        <Link className="Link" to="/aluno-meus-arquivos">
          Meus Arquivos
        </Link>
        <Link className="Link" to="/" onClick={logOff}>
          Sair
        </Link>
        <Link className="Link" to="/ajuda">
          Ajuda <span>?</span>
        </Link>
      </>
    );
  }

  return (
    <Container>
      <Ul>{listItems}</Ul>
      <footer>
        <p>VERSÃO 19.05.2022</p>
        <p>
          DESENVOLVIDO POR{" "}
          <AnchorLink href="https://devstorm.io/">DEVSTORM.IO</AnchorLink> TODOS
          OS DIREITOS RESERVADOS
        </p>
      </footer>
    </Container>
  );
}

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  gap: 0.7rem;
  font-size: ${Font.size[4] + "px"};

  .Link {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    text-decoration: none;
    width: 100%;
    font-weight: bold;
    padding-bottom: 0.7rem;
    text-transform: uppercase;
    border-bottom: 2px dotted ${Color.gray6};
    cursor: pointer;
  }

  .Link:hover {
    color: ${Color.primaryHover};
  }
  .Link:active {
    color: ${Color.primaryClick};
  }
  .Link:visited {
    color: ${Color.primary};
  }

  @media only screen and (max-width: ${MaxWidth.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    font-size: ${Font.size[3] + "px"};

    footer {
      display: none;
    }
  }

  @media only screen and (max-width: ${MaxWidth.smartphone}) {
    display: flex;
    gap: 0.7rem;
  }

  span {
    background-color: ${Color.primary};
    padding: 0 0.4rem;
    font-size: ${Font.size[2] + "px"};
    border-radius: 50rem;
    color: ${Color.white};
  }
  li:last-child {
    margin-top: 2rem;
    border: none;

    @media only screen and (max-width: ${MaxWidth.tablet}) {
      margin-top: 0rem;
    }
  }
`;

const AnchorLink = styled.a`
  &,
  &:link,
  &:visited {
    color: ${Color.gray7};
  }
  &:hover,
  &:active {
    color: ${Color.gray6};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem;
  width: 100%;

  footer {
    align-self: flex-start;
    font-size: ${Font.size[2] + "px"};
    font-weight: bold;
    color: ${Color.gray6};

    p:first-child {
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: ${MaxWidth.tablet}) {
    justify-content: center;
    margin: 1.5rem;

    footer {
      display: none;
    }
  }
`;
