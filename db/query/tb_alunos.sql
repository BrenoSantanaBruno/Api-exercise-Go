

-- name: CreateAccount :one
INSERT INTO tb_alunos  (
    desnome,
    email,
    telefone,
    endereco,
    turma) VALUES ($1, $2, $3, $4, $5)
RETURNING *;

-- name: GetAccount :one
SELECT * FROM tb_alunos
WHERE idaluno = $1 LIMIT 1;

-- name: ListAccounts :many
SELECT * FROM tb_alunos
ORDER BY id
LIMIT $1
    OFFSET $2;

-- name: UpdateAccount :one
UPDATE tb_alunos
SET desnome = $2,
email = $3,
telefone = $4,
endereco = $5,
turma = $6

WHERE idaluno = $1
RETURNING *;

-- name: DeleteAccount :exec
DELETE FROM tb_alunos
WHERE idaluno = $1;