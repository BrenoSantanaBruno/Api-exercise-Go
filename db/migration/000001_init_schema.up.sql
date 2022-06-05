CREATE TABLE "tb_alunos" (
                             "idaluno" bigserial,
                             "desnome" VARCHAR NOT NULL,
                             "email" VARCHAR NOT NULL,
                             "telefone" BIGINT NOT NULL,
                             "endereco" VARCHAR NOT NULL,
                             "matricula" bigserial,
                             "turma" VARCHAR,
                             "dt_cadastro" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                             "modificado_em" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                             CONSTRAINT PK_alunos PRIMARY KEY (idaluno)
);

CREATE TABLE "tb_notas" (
                            "idaluno" bigserial NOT NULL,
                            "nota_portugues" INT NOT NULL,
                            "nota_matematica" INT NOT NULL,
                            "nota_fisica" INT NOT NULL,
                            "nota_ingles" INT NOT NULL,
                            CONSTRAINT PK_notas PRIMARY KEY (idaluno),
                            CONSTRAINT PK_alunos_notas FOREIGN KEY (idaluno) REFERENCES tb_alunos (idaluno)
);
