// Package mediaconttroller endpoints for media
package mediaconttroller

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"github.com/held-m/media/infr/mpv"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

// Player controller
type Player struct {
	Status string
}

// Init initialize the media routes
func (c Player) Init(playerGroup *gin.RouterGroup) {
	playerGroup.GET("/play", c.Play)
	playerGroup.GET("/pause", c.Pause)
	playerGroup.GET("/unpause", c.Unpause)
	playerGroup.GET("/stop", c.Stop)
	playerGroup.GET("/playlist", c.GetPlayList)
	playerGroup.GET("/next", c.Next)
	playerGroup.GET("/prev", c.Previous)
	// playerGroup.GET("/volumeup", c.VolumeUp)
	// playerGroup.GET("/volumedown", c.VolumeDown)
}

// Play play a song
func (c *Player) Play(ctx *gin.Context) {

	// source := "https://www.youtube.com/watch?v=gy-x3uwf0sw"
	// source := "https://www.youtube.com/watch?v=1iYNBEr3IdU"

	player := mpv.Player{}

	// source := "https://www.youtube.com/watch?v=UXhHNGpXMK8"

	src := ctx.Query("src")
	println("src: ", src)

	if err := player.Play(src); err != nil {
		println("error play: ", err.Error())
	}
	c.Status = "playing"

	ctx.JSON(200, gin.H{
		"message": "pong",
	})
}

// Pause pause the player
func (c *Player) Pause(ctx *gin.Context) {
	player := mpv.Player{
		Status: "paused",
	}
	player.Pause()
	c.Status = "paused"
	ctx.JSON(200, gin.H{
		"message": "pong",
	})
}

// Unpause unpause the player
func (c *Player) Unpause(ctx *gin.Context) {
	player := mpv.Player{
		Status: "playing",
	}
	player.Unpause()
	c.Status = "playing"
	ctx.JSON(200, gin.H{
		"message": "pong",
	})
}

// Stop stop the player
func (c *Player) Stop(ctx *gin.Context) {
	player := mpv.Player{
		Status: "stopped",
	}

	player.Stop()
	c.Status = "stopped"
	ctx.JSON(200, gin.H{
		"message": "pong",
	})
}

// Next play the next song
func (c *Player) Next(ctx *gin.Context) {
	player := mpv.Player{}

	player.Next()
	ctx.JSON(200, gin.H{
		"message": "pong",
	})
}

// Previous play the previous song
func (c *Player) Previous(ctx *gin.Context) {
	player := mpv.Player{}

	player.Previous()
	ctx.JSON(200, gin.H{
		"message": "pong",
	})
}

// GetPlayList get the playlist
func (c *Player) GetPlayList(ctx *gin.Context) {
	var stopSend = make(chan bool)

	upgrader.CheckOrigin = func(r *http.Request) bool { return true }

	conn, err := upgrader.Upgrade(ctx.Writer, ctx.Request, nil)
	if err != nil {
		println("error upgrade: ", err.Error())
	}
	defer conn.Close()
	go func() {
		_, _, err := conn.ReadMessage()
		if err != nil {
			println("error read message: ", err.Error())
			close(stopSend)
		}
	}()

	for {
		if c.Status == "stopped" || c.Status == "" {
			break
		}
		select {
		case <-stopSend:
			println("stop send")
			return
		default:
			println("status: ", c.Status)
			time.Sleep(1 * time.Second)
			playlist := mpv.PlayList{}
			out, err := playlist.GetSongs()
			if err != nil {
				println("warning get playlist: ", err.Error())
				continue
			}
			var outJSON interface{}
			json.Unmarshal([]byte(out), &outJSON)
			conn.WriteJSON(outJSON)
			println("get playlist")
		}
	}
}
