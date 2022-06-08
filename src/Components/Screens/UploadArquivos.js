import React, { useState } from "react";
import { InputDiv } from "../../Reusables/Input/InputDiv";
import Button from "../../Reusables/Input/Button";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import { Form } from "../../Reusables/Input/Form";
import InfoButton from "../../Reusables/Input/InfoButton";
import Image1 from "../../Images/youtube-share1.png";
import Image2 from "../../Images/youtube-share2.png";

export default function UploadArquivos() {
  const [course, setCourse] = useState("");
  const [courseInvalid, setCourseInvalid] = useState(false);
  const [moduleNumber, setmoduleNumber] = useState(1);
  const [moduleNumberInvalid, setmoduleNumberInvalid] = useState(false);
  const [studentNameFile, setStudentNameFile] = useState("");
  const [titleFile, setTitleFile] = useState("");
  const [titleFileInvalid, setTitleFileInvalid] = useState(false);
  const [titleVideo, setTitleVideo] = useState("");
  const [titleVideoInvalid, setTitleVideoInvalid] = useState(false);
  const [videoLink, setVideoLink] = useState("");

  function selectModule(e, value) {
    e.preventDefault();
    setmoduleNumber(value);
  }

  async function sendToBack() {
    const bodyForBackend = {
      curso: course,
      modulo: moduleNumber,
      Aluno: studentNameFile,
      titulo1: titleFile,
      arquivo: "precisa implementar",
      titulo2: titleVideo,
      video_link: videoLink,
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

  function checkValues(e) {
    e.preventDefault();

    if (course.length === 0) {
      setCourseInvalid(true);
    } else {
      setCourseInvalid(false);
    }
    if (moduleNumber.length === 0) {
      setmoduleNumberInvalid(true);
    } else {
      setmoduleNumberInvalid(false);
    }
    if (titleFile.length === 0) {
      setTitleFileInvalid(true);
    } else {
      setTitleFileInvalid(false);
    }
    if (titleVideo.length === 0) {
      setTitleVideoInvalid(true);
    } else {
      setTitleVideoInvalid(false);
    }

    if (
      !courseInvalid &&
      !moduleNumberInvalid &&
      !titleFileInvalid &&
      !titleVideoInvalid
    ) {
      sendToBack();
    }
  }

  return (
    <Form onSubmit={checkValues}>
      <section>
        <h2>UPLOAD DE ARQUIVOS</h2>
        <InputDiv>
          <p>CURSO*</p>
          <select
            onChange={(v) => setCourse(v.target.value)}
            className={courseInvalid ? "invalid" : ""}
          >
            <option value="" defaultValue hidden>
              ESCOLHA
            </option>
            <option value="Técnico em Eletrônica">Técnico em Eletrônica</option>
            <option value="Curso 2">Curso 2</option>
            <option value="Curso 3">Curso 3</option>
            <option value="Curso 4">Curso 4</option>
          </select>
        </InputDiv>
        <InputDiv>
          <div className="headerWithInfo">
            <p>MÓDULO*</p>
            <InfoButton>Obrigatório para Cursos Técnicos</InfoButton>
          </div>
          <div
            className={`selectHorizontalButtons ${
              moduleNumberInvalid ? "invalid" : ""
            }`}
          >
            <button
              className={moduleNumber === 1 ? "moduleActive" : ""}
              onClick={(e) => selectModule(e, 1)}
            >
              1
            </button>
            <button
              className={moduleNumber === 2 ? "moduleActive" : ""}
              onClick={(e) => selectModule(e, 2)}
            >
              2
            </button>
            <button
              className={moduleNumber === 3 ? "moduleActive" : ""}
              onClick={(e) => selectModule(e, 3)}
            >
              3
            </button>
          </div>
        </InputDiv>
        <InputDiv>
          <p>ARQUIVO PARA UM ALUNO</p>
          <input
            onChange={(v) => setStudentNameFile(v.target.value)}
            type="text"
            placeholder="Nome"
          />
        </InputDiv>
      </section>
      <section>
        <InputDiv>
          <p>TÍTULO*</p>
          <input
            onChange={(v) => setTitleFile(v.target.value)}
            className={titleFileInvalid ? "invalid" : ""}
            type="text"
            placeholder="Título"
          />
        </InputDiv>
        <InputDiv>
          <div className="headerWithInfo">
            <p>ARQUIVO</p>
            <InfoButton>Arquivos Aceitos JPG e PDF</InfoButton>
          </div>
          <button className="grayButton">ANEXAR</button>
          <Button>UPLOAD</Button>
        </InputDiv>
        <InputDiv>
          <p>TÍTULO*</p>
          <input
            onChange={(v) => setTitleVideo(v.target.value)}
            className={titleVideoInvalid ? "invalid" : ""}
            type="text"
            placeholder="Título"
          />
        </InputDiv>
        <InputDiv>
          <p>VÍDEO (Link do Youtube)</p>
          <input
            onChange={(v) => setVideoLink(v.target.value)}
            type="text"
            placeholder="Link"
          />
          <InfoButton>
            Instruções
            <img className="guideImg" src={Image1} />
            <img className="guideImg" src={Image2} />
          </InfoButton>
        </InputDiv>
        <Button onClick={checkValues}>SALVAR</Button>
      </section>
    </Form>
  );
}
