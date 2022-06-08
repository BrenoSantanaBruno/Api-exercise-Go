package api

import (
	"database/sql"
	db "github.com/LinuxLoverCoder/Escola_Projeto/db/sqlc"
	"github.com/gin-gonic/gin"
	"net/http"
)

//CreateAccountRequest generates struct for request
type CreateAccountRequest struct {
	Desnome  string `json:"desnome" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Telefone int64  `json:"telefone" binding:"required"`
	Endereco string `json:"endereco" binding:"required"`
	Turma    string `json:"turma" binding:"required"`
}

func (server *Server) CreateAccount(ctx *gin.Context) {
	var req CreateAccountRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}
	arg := db.CreateAccountParams{
		Desnome:  req.Desnome,
		Email:    req.Email,
		Telefone: req.Telefone,
		Endereco: req.Endereco,
		Turma:    req.Turma,
	}

	account, err := server.store.CreateAccount(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}
	ctx.JSON(http.StatusOK, account)
}

//GetAccountRequest struct
type GetAccountRequest struct {
	Idaluno int64 `uri:"idaluno" binding:"required,min=1"`
}

//GetAccount returns per id the accounts

func (server *Server) GetAccount(ctx *gin.Context) {
	var req GetAccountRequest
	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	account, err := server.store.GetAccount(ctx, req.Idaluno)
	if err != nil {
		if err == sql.ErrNoRows {
			ctx.JSON(http.StatusNotFound, errorResponse(err))
			return
		}

		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}
	ctx.JSON(http.StatusOK, account)

}

// ListAccountRequest struct generates the struct for Request API
type ListAccountRequest struct {
	PageID   int32 `form:"page_id" binding:"required,min=1"`
	PageSize int32 `form:"page_size" binding:"required,min=5,max=10"`
}

func (server *Server) ListAccounts(ctx *gin.Context) {
	var req ListAccountRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.ListAccountsParams{
		Limit:  req.PageSize,
		Offset: (req.PageID - 1) * req.PageSize,
	}

	accounts, err := server.store.ListAccounts(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, accounts)
}
