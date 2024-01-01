// Package bootstrap is a package for setup application
package bootsrtrap

import (
	"os"
	"time"

	"github.com/held-m/media/app/router"

	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
)

// NewApp is a constructor for gin.Engine
func NewApp() *gin.Engine {

	app := gin.Default()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     []string{os.Getenv("CORS_ALLOW_ORIGINS")},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
		AllowCredentials: true,
		AllowWildcard:    true,
		MaxAge:           12 * time.Hour,
	}))
	router.InitRouter(app)
	return app
}
