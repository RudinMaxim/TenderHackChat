package main

import (
	"log"

	"example.com/m/v2/database"
	"example.com/m/v2/internal/user"
	"example.com/m/v2/router"
)

func main() {
	db, err := database.InitDatabase()
	if err != nil {
		log.Fatalf("could not initialize database connection: %s", err)
	}

	userRep := user.NewRepository(db.GetDB())
	userSvc := user.NewService(userRep)
	userHandler := user.NewHandler(userSvc)

	//hub := ws.NewHub()
	//wsHandler := ws.NewHandler(hub)
	//go hub.Run()

	router.InitRouter(userHandler)

	router.Start("0.0.0.0:8080")

}
