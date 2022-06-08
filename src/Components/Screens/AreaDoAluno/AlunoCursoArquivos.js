import React from "react";
import { Form } from "../../../Reusables/Input/Form";
import ArquivosView from "./ArquivosView";

export default function AlunoCursoArquivos() {
  return (
    <Form>
      <ArquivosView title={"Arquivos do curso"} />
    </Form>
  );
}
