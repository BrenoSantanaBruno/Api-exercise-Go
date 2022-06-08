package db

import (
	"context"
	"github.com/stretchr/testify/require"
	"testing"
)

func TestQueries_CreateAccount(t *testing.T) {
	arg := CreateAccountParams{
		Desnome:  "Breno Santana",
		Email:    "brenosantana@devstorm.io",
		Telefone: 21976133473,
		Endereco: "Rua qualquer",
		Turma:    "901",
	}

	account, err := testQueries.CreateAccount(context.Background(), arg)
	require.NoError(t, err)
	require.NotEmpty(t, account)
	require.Equal(t, arg.Desnome, account.Desnome)
	require.Equal(t, arg.Email, account.Email)
	require.Equal(t, arg.Telefone, account.Telefone)
	require.Equal(t, arg.Endereco, account.Endereco)
	require.Equal(t, arg.Turma, account.Turma)

	require.NotZero(t, account.Idaluno)
	require.NotZero(t, account.DtCadastro)
	require.NotZero(t, account.ModificadoEm)

}
