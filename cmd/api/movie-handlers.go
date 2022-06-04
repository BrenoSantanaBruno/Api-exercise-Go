package main

import (
	"errors"
	"github.com/julienschmidt/httprouter"
	"net/http"
	"strconv"
)

func (app *application) getOneMovie(w http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())
	id, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		app.logger.Print(errors.New("Invalid ID Parameter"))
		app.errorJSON(w, err)
		return
	}
	app.logger.Println("id is ", id)

	movie, err := app.models.DB.Get(id)
	//movie := models.Movie{
	//	ID:          id,
	//	Title:       "Some movie",
	//	Description: "Some description",
	//	Year:        2021,
	//	ReleaseDate: time.Date(2021, 01, 01, 01, 0, 0, 0, time.Local),
	//	Runtime:     100,
	//	Rating:      5,
	//	MPAARating:  "PG-13",
	//	CreatedAt:   time.Now(),
	//	UpdateAt:    time.Now(),
	//}
	err = app.writeJSON(w, http.StatusOK, movie, "movie")

}

func (app *application) getAllMovies(w http.ResponseWriter, r *http.Request) {

}
