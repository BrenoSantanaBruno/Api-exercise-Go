import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { MaxWidth } from "../../Defaults/MaxWidth";
import Ajuda from "../Screens/Ajuda";
import AlunoCursoArquivos from "../Screens/AreaDoAluno/AlunoCursoArquivos";
import AlunoMeusArquivos from "../Screens/AreaDoAluno/AlunoMeusArquivos";
import CadastroAlunos from "../Screens/CadastroAlunos";
import CadastroCursos from "../Screens/CadastroCursos";
import CadastroUsuarios from "../Screens/CadastroUsuarios";
import Pagamentos from "../Screens/Pagamentos";
import UploadArquivos from "../Screens/UploadArquivos";

export default function ContentSelector({ areaStudentOrADM }) {
  const landingPage =
    areaStudentOrADM === "adm" ? <CadastroCursos /> : <AlunoCursoArquivos />;

  return (
    <MarginContainer>
      <Routes>
        <Route path="*" element={landingPage} />

        {areaStudentOrADM === "adm" && (
          <>
            <Route path="/cadastro-cursos" element={<CadastroCursos />} />
            <Route path="/pagamentos" element={<Pagamentos />} />
            <Route path="/cadastro-alunos" element={<CadastroAlunos />} />
            <Route path="/upload-arquivos" element={<UploadArquivos />} />
            <Route path="/cadastro-usuarios" element={<CadastroUsuarios />} />
          </>
        )}

        {areaStudentOrADM === "student" && (
          <>
            <Route
              path="/aluno-curso-arquivos"
              element={<AlunoCursoArquivos />}
            />
            <Route
              path="/aluno-meus-arquivos"
              element={<AlunoMeusArquivos />}
            />
            <Route path="/ajuda" element={<Ajuda />} />
          </>
        )}
      </Routes>
    </MarginContainer>
  );
}

const MarginContainer = styled.section`
  margin: 3rem;
  max-width: 800px;

  @media only screen and (max-width: ${MaxWidth.smartphone}) {
    margin: 1rem;
  }
`;
