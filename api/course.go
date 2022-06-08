package api

import (
	db "backend/db/sqlc"
	"database/sql"
	"github.com/gin-gonic/gin"
	"net/http"
)

type createCurso struct {
	NomeCurso  string `json:"nome_curso" binding:"required"`
	ValorCurso int64  `json:"valor_curso" binding:"required"`
}

func (server *Server) createCurso(ctx *gin.Context) {
	var req createCurso
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

//GetAccountRequest struct
type getCadastroCursos struct {
	Idcurso int64 `uri:"idcurso" binding:"required,min=1"`
}

//GetCadastroCursos returns per id the accounts

func (server *Server) getCadastroCursos(ctx *gin.Context) {
	var req getCadastroCursos
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

func (server *Server) ListCourses(ctx *gin.Context) {
	var req ListCourseRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.ListCoursesParams{
		Limit:  req.PageSize,
		Offset: (req.PageID - 1) * req.PageSize,
	}

	accounts, err := server.store.ListCursos(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, accounts)
}

// Deletecurso struct
type DeleteCurso struct {
	Idcurso int64 `uri:"idcurso" binding:"required,min=1"`
}

//DeleteCurso delete input from database per ID
func (server *Server) DeleteCurso(ctx *gin.Context) {
	var req DeleteCurso
	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}
	accounts, err := server.store.DeleteCurso(ctx, req.Idcurso)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}
	ctx.JSON(http.StatusOK, accounts)
}
