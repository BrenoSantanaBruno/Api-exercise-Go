-- name: getCadastro_cursos :one
SELECT * FROM tb_cadastro_cursos
WHERE idcurso = $1 LIMIT 1;

-- name: ListCursos :many
SELECT * FROM tb_cadastro_cursos
ORDER BY nome_curso;

-- name: CreateCurso :one
INSERT INTO tb_cadastro_cursos (
    nome_curso, valor_curso
) VALUES (
             $1, $2
         )
RETURNING *;

-- name: DeleteCurso :exec
DELETE FROM tb_cadastro_cursos
WHERE idcurso = $1;