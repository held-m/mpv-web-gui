package main

import (
	"log"
	"os"

	"github.com/held-m/media/app/bootsrtrap"
	"github.com/held-m/media/infr/env"

	"github.com/gin-gonic/gin"
)

// @title media API
// @version 1.0
// @description API of "media"
// @host localhost:3000
// @BasePath /v1/
func main() {
	var app *gin.Engine

	env.SetupEnvFile()

	if os.Getenv("APP_ENV") == "development" {
		app = bootsrtrap.NewAppDev()
	} else {
		app = bootsrtrap.NewApp()
	}

	if err := app.Run(":3000"); err != nil {
		log.Fatal(err)
	}
}
