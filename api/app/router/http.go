package router

import (
	maincontroller "github.com/held-m/media/app/controller/main"

	"github.com/gin-gonic/gin"
)

// HTTPRouter is router for http
type HTTPRouter struct {
}

// InitRouter is init for http router
func (h HTTPRouter) InitRouter(app *gin.Engine) {
	group := app.Group("")
	group.GET("/", maincontroller.GetHome)
}

// NewHTTPRouter is constructor for http router
func NewHTTPRouter() *HTTPRouter {
	return &HTTPRouter{}
}
