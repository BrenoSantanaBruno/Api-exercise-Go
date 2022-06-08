// Code generated by sqlc. DO NOT EDIT.

package db

import (
	"database/sql"
)



type TbAlunos struct {
	Idaluno      int64         `json:"idaluno"`
	Desnome      string        `json:"desnome"`
	Email        string        `json:"email"`
	Telefone     int64         `json:"telefone"`
	Endereco     string        `json:"endereco"`
	Matricula    sql.NullInt64 `json:"matricula"`
	Turma        string        `json:"turma"`
	DtCadastro   sql.NullTime  `json:"dt_cadastro"`
	ModificadoEm sql.NullTime  `json:"modificado_em"`
}

type TbNotas struct {
	Idaluno        int64 `json:"idaluno"`
	NotaPortugues  int32 `json:"nota_portugues"`
	NotaMatematica int32 `json:"nota_matematica"`
	NotaFisica     int32 `json:"nota_fisica"`
	NotaIngles     int32 `json:"nota_ingles"`
}
