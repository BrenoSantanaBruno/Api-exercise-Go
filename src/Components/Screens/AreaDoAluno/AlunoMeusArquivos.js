import React from "react";
import { Form } from "../../../Reusables/Input/Form";
import ArquivosView from "./ArquivosView";

export default function AlunoMeusArquivos() {
  return (
    <Form>
      <ArquivosView title={"Meus Arquivos"} />
    </Form>
  );
}
