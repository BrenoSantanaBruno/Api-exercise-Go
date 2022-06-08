import styled from "styled-components";
import "./App.css";
import { Color } from "./Defaults/Color";
import logo from "./Images/logo-artec.png";
import bannerImage from "./Images/banner-background.png";
import menuIcon from "./Components/Icons/bars-solid.svg";
import Menu from "./Components/Menu/Menu";
import { useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import { MaxWidth } from "./Defaults/MaxWidth";
import { Font } from "./Defaults/Font";
import ContentSelector from "./Components/ContentSelector/ContentSelector";

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const [areaStudentOrADM, setAreaStudentOrADM] = useState("adm");

  const [showSidebar, setShowSidebar] = useState(true);

  const [currentScreen, setCurrentScreen] = useState("cadastroCursos");

  useEffect(() => {
    if (areaStudentOrADM === "adm") {
      setCurrentScreen("cadastroCursos");
    }
    if (areaStudentOrADM === "student") {
      setCurrentScreen("alunoCursoArquivos");
    }
  }, [areaStudentOrADM]);

  return (
    <DivAppGrid>
      <HeaderDiv>
        <img className="logo" src={logo} alt="logo artec" />

        <DivPainel>
          {areaStudentOrADM === "adm" ? <h2>PAINEL DE ADMINISTRAÇÃO</h2> : ""}
          {areaStudentOrADM === "student" ? <h2>ÁREA DO(A) ALUNO(A)</h2> : ""}
          <img className="banner" src={bannerImage} alt="logo artec" />
          {userIsLoggedIn && (
            <img
              onClick={() => setShowSidebar((e) => !e)}
              className="menu-bars"
              src={menuIcon}
              alt="logo artec"
            />
          )}
        </DivPainel>
      </HeaderDiv>
      {!userIsLoggedIn && (
        <DivLogin>
          <Login
            setAreaStudentOrADM={setAreaStudentOrADM}
            setUserIsLoggedIn={setUserIsLoggedIn}
            areaStudentOrADM={areaStudentOrADM}
          />
        </DivLogin>
      )}
      {userIsLoggedIn && (
        <>
          {showSidebar && (
            <DivMenu>
              <Menu
                setUserIsLoggedIn={setUserIsLoggedIn}
                areaStudentOrADM={areaStudentOrADM}
                setScreen={setCurrentScreen}
              />
            </DivMenu>
          )}
          <DivContent>
            <ContentSelector areaStudentOrADM={areaStudentOrADM} />
          </DivContent>
        </>
      )}
    </DivAppGrid>
  );
}

export default App;

const DivAppGrid = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 10rem 1fr;
  height: 100vh;
  @media only screen and (max-width: ${MaxWidth.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
  }
`;

const HeaderDiv = styled.header`
  grid-area: auto / span 2;
  position: relative;
  display: grid;
  grid-template-columns: 20rem 1fr;
  height: 100%;
  align-items: center;

  .logo {
    padding: 2rem;
    width: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: ${MaxWidth.tablet}) {
    grid-template-columns: 10rem 1fr;
    grid-template-rows: 5rem;

    .logo {
      padding: 1rem;
    }
  }
  @media only screen and (max-width: ${MaxWidth.smartphone}) {
    grid-template-columns: 6rem 1fr;
    grid-template-rows: 4rem;

    .logo {
      padding: 0.2rem;
    }
  }
`;

const DivPainel = styled.div`
  color: ${Color.white};
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  width: 100%;

  h2 {
    margin-left: 3rem;
    font-size: ${Font.size[6] + "px"};
  }
  .banner {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .menu-bars {
    display: none;
  }

  @media only screen and (max-width: ${MaxWidth.tablet}) {
    h2 {
      font-size: ${Font.size[3] + "px"};
      margin-left: 1rem;
    }

    .menu-bars {
      display: inline;
      margin-left: auto;
      margin-right: 1rem;
      width: 2rem;
    }
  }

  @media only screen and (max-width: ${MaxWidth.smartphone}) {
    h2 {
      font-size: ${Font.size[2] + "px"};
      margin-left: 1rem;
    }

    .menu-bars {
      display: inline;
      margin-left: auto;
      margin-right: 1rem;
      width: 1.7rem;
    }
    .menu-bars:hover {
    }
  }
`;

const DivMenu = styled.div`
  background-color: ${Color.gray2};
  color: ${Color.primary};
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${MaxWidth.tablet}) {
    grid-row: 2;
    grid-column: span 2;
  }
`;

const DivContent = styled.div`
  background-color: ${Color.white};
`;

const DivLogin = styled.div`
  margin: 0 1rem;
  grid-area: auto / span 2;
  background-color: ${Color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${MaxWidth.tablet}) {
    grid-area: span 2;
  }
`;
