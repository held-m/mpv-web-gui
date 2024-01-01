package router

import (
	_ "github.com/held-m/media/docs"

	"github.com/gin-gonic/gin"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// TestRouter is router for test
type TestRouter struct {
}

// InitRouter is init for test router
func (h TestRouter) InitRouter(app *gin.Engine) {
	test := app.Group("test")

	test.GET("/docs/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))
}

// NewTestRouter is constructor for TestRouter
func NewTestRouter() *TestRouter {
	return &TestRouter{}
}
