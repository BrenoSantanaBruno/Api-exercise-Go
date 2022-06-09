-- name: GetAdmin :one
SELECT * FROM tb_admin
WHERE id = $1 LIMIT 1;

-- name: ListAdmin :many
SELECT * FROM tb_admin
ORDER BY id;

-- name: CreateAdmin :one
INSERT INTO tb_admin (
   nome, email, endereco, cpf, nivel, telefone
) VALUES (
             $1, $2, $3, $4, $5, $6
         )
RETURNING *;

-- name: DeleteAdmin :exec
DELETE FROM tb_admin
WHERE id = $1;

-- name: UpdateAccountAdmin :one
UPDATE tb_admin
SET nome = $2,
    email = $3,
    telefone = $4,
    endereco = $5,
    cpf = $6,
    nivel= $7

WHERE id = $1
RETURNING *;