package api

import (
	"database/sql"
	db "github.com/LinuxLoverCoder/Escola_Projeto/db/sqlc"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
	"net/http"
)

// CreateCurso struct generates the format of request
type CreateCurso struct {
	NomeCurso  string `json:"nome_curso" binding:"required"`
	ValorCurso int64  `json:"valor_curso" binding:"required"`
}

func (server *Server) CreateCurso(ctx *gin.Context) {
	var req CreateCurso
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}
	arg := db.CreateCursoParams{
		NomeCurso:  req.NomeCurso,
		ValorCurso: req.ValorCurso,
	}

	account, err := server.store.CreateCurso(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}
	ctx.JSON(http.StatusOK, account)
}

//GetCadastroCursos generates the struct of request API
type GetCadastroCursos struct {
	Idcurso int64 `uri:"idcurso" binding:"required,min=1"`
}

//getCadastroCursos returns per id the accounts

func (server *Server) GetCadastroCursos(ctx *gin.Context) {
	var req GetCadastroCursos
	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	account, err := server.store.GetCadastroCursos(ctx, req.Idcurso)
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

type ListCourseRequest struct {
	PageID   int32 `form:"page_id" binding:"required,min=1"`
	PageSize int32 `form:"page_size" binding:"required,min=5,max=10"`
}

func (server *Server) ListCursos(ctx *gin.Context) {
	var req ListCourseRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	//arg := db.ListCoursesParams{
	//	Limit:  req.PageSize,
	//	Offset: (req.PageID - 1) * req.PageSize,
	//}

	accounts, err := server.store.ListCursos(ctx)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, accounts)
}

//DeleteCurso creates the struct
//type DeleteCurso struct {
//	Idcurso int64 `uri:"idcurso" binding:"required,min=1"`
//}
//
//func (server *Server) DeleteCurso(ctx *gin.Context) {
//	var req DeleteCurso
//	if err := ctx.ShouldBindUri(&req); err != nil {
//		ctx.JSON(http.StatusBadRequest, errorResponse(err))
//		return
//	}
//
//	accounts, err := server.store.DeleteCurso(ctx)
//	if err != nil {
//		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
//		return
//	}
//	ctx.JSON(http.StatusOK, accounts)
//
//}
