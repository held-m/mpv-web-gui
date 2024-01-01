package maincontroller

import "github.com/gin-gonic/gin"

func GetHome(c *gin.Context) {
	c.String(200, "Home Page")
}
