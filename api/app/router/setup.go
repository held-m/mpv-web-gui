package router

import (
	"github.com/gin-gonic/gin"
)

// Router is interface for router
type Router interface {
	InitRouter(app *gin.Engine)
}

// InitRouter is init for router
func InitRouter(app *gin.Engine) {
	setup(app, NewMediaAPIRouter())
}

// InitRouterDev is init for router in dev mode
func InitRouterDev(app *gin.Engine) {
	setup(app, NewHTTPRouter(), NewMediaAPIRouter(), NewTestRouter())
}

func setup(app *gin.Engine, router ...Router) {
	for _, r := range router {
		r.InitRouter(app)
	}
}
