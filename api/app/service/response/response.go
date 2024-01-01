// Package response is a package to return response
package response

import "github.com/gin-gonic/gin"

// Response is a struct to return response
type Response struct {
	Status int
	Msg    string
	Data   any
}

// Error is a struct to return error response
type Error struct {
	Status int
	Msg    string
	Data   any
}

// JSON is a function to return response in json format
func JSON(response Response, ctx *gin.Context) {
	ctx.JSON(response.Status, gin.H{
		"status":  response.Status,
		"message": response.Msg,
		"data":    response.Data,
	})
}

// JSONError is a function to return error response
func JSONError(responseErr Error, ctx *gin.Context) {
	ctx.JSON(responseErr.Status, gin.H{
		"status":  responseErr.Status,
		"message": responseErr.Msg,
		"data":    responseErr.Data,
	})
}
