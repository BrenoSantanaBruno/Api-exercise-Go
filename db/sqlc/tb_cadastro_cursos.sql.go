// Code generated by sqlc. DO NOT EDIT.
// source: tb_cadastro_cursos.sql

package db

import (
	"context"
)

const createCurso = `-- name: CreateCurso :one
INSERT INTO tb_cadastro_cursos (
    nome_curso, valor_curso
) VALUES (
             $1, $2
         )
RETURNING idcurso, nome_curso, valor_curso, dt_cadastro, modificado_em
`

type CreateCursoParams struct {
	NomeCurso  string `json:"nome_curso"`
	ValorCurso int64  `json:"valor_curso"`
}

func (q *Queries) CreateCurso(ctx context.Context, arg CreateCursoParams) (TbCadastroCursos, error) {
	row := q.db.QueryRowContext(ctx, createCurso, arg.NomeCurso, arg.ValorCurso)
	var i TbCadastroCursos
	err := row.Scan(
		&i.Idcurso,
		&i.NomeCurso,
		&i.ValorCurso,
		&i.DtCadastro,
		&i.ModificadoEm,
	)
	return i, err
}

const deleteCurso = `-- name: DeleteCurso :exec
DELETE FROM tb_cadastro_cursos
WHERE idcurso = $1
`

func (q *Queries) DeleteCurso(ctx context.Context, idcurso int64) error {
	_, err := q.db.ExecContext(ctx, deleteCurso, idcurso)
	return err
}

const getCadastroCursos = `-- name: GetCadastroCursos :one
SELECT idcurso, nome_curso, valor_curso, dt_cadastro, modificado_em FROM tb_cadastro_cursos
WHERE idcurso = $1 LIMIT 1
`

func (q *Queries) GetCadastroCursos(ctx context.Context, idcurso int64) (TbCadastroCursos, error) {
	row := q.db.QueryRowContext(ctx, getCadastroCursos, idcurso)
	var i TbCadastroCursos
	err := row.Scan(
		&i.Idcurso,
		&i.NomeCurso,
		&i.ValorCurso,
		&i.DtCadastro,
		&i.ModificadoEm,
	)
	return i, err
}

const listCursos = `-- name: ListCursos :many
SELECT idcurso, nome_curso, valor_curso, dt_cadastro, modificado_em FROM tb_cadastro_cursos
ORDER BY nome_curso
`

func (q *Queries) ListCursos(ctx context.Context) ([]TbCadastroCursos, error) {
	rows, err := q.db.QueryContext(ctx, listCursos)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TbCadastroCursos
	for rows.Next() {
		var i TbCadastroCursos
		if err := rows.Scan(
			&i.Idcurso,
			&i.NomeCurso,
			&i.ValorCurso,
			&i.DtCadastro,
			&i.ModificadoEm,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}