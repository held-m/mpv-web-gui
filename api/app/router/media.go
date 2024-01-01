// Package router is a package for router
package router

import (
	"github.com/gin-gonic/gin"
	mediaconttroller "github.com/held-m/media/app/controller/media/v1"
)

// MediaAPIRouter is router for media
type MediaAPIRouter struct {
}

// NewMediaAPIRouter is constructor for MediaApiRouter
func NewMediaAPIRouter() *MediaAPIRouter {
	return &MediaAPIRouter{}
}

// InitRouter is init for media router
func (h MediaAPIRouter) InitRouter(app *gin.Engine) {
	api := app.Group("v1")

	mediaconttroller.Player{}.Init(api.Group("/player"))

	// mediacontroller.AuthController{}.Init(api.Group("/auth"))

}
