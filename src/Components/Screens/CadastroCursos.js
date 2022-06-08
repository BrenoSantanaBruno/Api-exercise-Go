import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../../Defaults/Color";
import { Font } from "../../Defaults/Font";
import Button from "../../Reusables/Input/Button";
import { InputDiv } from "../../Reusables/Input/InputDiv";
import { Form } from "../../Reusables/Input/Form";

export default function CadastroCursos() {
  const [courseType, setCourseType] = useState("");
  const [courseTypeInvalid, setCourseTypeInvalid] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseNameInvalid, setCourseNameInvalid] = useState(false);
  const [coursePrice, setCoursePrice] = useState("");
  const [coursePriceInvalid, setCoursePriceInvalid] = useState(false);

  async function sendToBack() {
    const bodyForBackend = {
      curso: Number(courseType),
      nomeCurso: courseName,
      mensalidade: Number(coursePrice),
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
    if (courseType.length === 0) {
      setCourseTypeInvalid(true);
    } else {
      setCourseTypeInvalid(false);
    }
    if (courseName.length === 0) {
      setCourseNameInvalid(true);
    } else {
      setCourseNameInvalid(false);
    }
    if (coursePrice.length === 0 || Number(coursePrice) <= 0) {
      setCoursePriceInvalid(true);
    } else {
      setCoursePriceInvalid(false);
    }

    if (!courseTypeInvalid && !courseNameInvalid && !coursePriceInvalid) {
      sendToBack();
    }
  }

  return (
    <Form onSubmit={checkValues}>
      <div className="singleForm">
        <h2>Cadastro de cursos</h2>
        <InputDiv>
          <p>CURSO*</p>
          <select
            onChange={(v) => setCourseType(v.target.value)}
            className={courseTypeInvalid ? "invalid" : ""}
          >
            <option value="" defaultValue hidden>
              ESCOLHA
            </option>
            <option value="1">TÉCNICO</option>
            <option value="2">PROFISSIONALIZANTE</option>
          </select>
        </InputDiv>
        <InputDiv>
          <p>NOME DO CURSO</p>
          <input
            onChange={(v) => setCourseName(v.target.value)}
            className={courseNameInvalid ? "invalid" : ""}
            type="text"
            placeholder="Nome"
          ></input>
        </InputDiv>
        <InputDiv>
          <p>VALOR DA MENSALIDADE DO CURSO</p>
          <input
            onChange={(v) => setCoursePrice(v.target.value)}
            className={coursePriceInvalid ? "invalid" : ""}
            type="number"
            placeholder="0"
          ></input>
        </InputDiv>
        <Button>Cadastrar</Button>
      </div>
    </Form>
  );
}
