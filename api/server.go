package api

import (
	db "github.com/LinuxLoverCoder/Escola_Projeto/db/sqlc"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type Server struct {
	store  *db.Store
	router *gin.Engine
}

//NewServer creates a new HTTP server and setup routing
func NewServer(store *db.Store) *Server {
	server := &Server{store: store}
	router := gin.Default()

	router.POST("/accounts", server.CreateAccount)

	router.GET("/accounts/:idaluno", server.GetAccount)

	router.GET("/accounts", server.ListAccounts)

	router.POST("/course", server.CreateCurso)

	router.GET("/course/:idcurso", server.GetCadastroCursos)

	router.GET("/course", server.ListCursos)

	//router.DELETE("/course/:Idcurso", server.DeleteCurso)

	server.router = router
	return server
}

//Start runs the http server on a specific address.
func (server *Server) Start(address string) error {
	return server.router.Run(address)
}

func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}
