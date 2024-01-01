// Package mpv is the package to interact with mpv
package mpv

import (
	"fmt"
	"os/exec"
)

// Client is the client to send commands to mpv
type Client struct{}

// Request send a command to mpv
func (c *Client) Request(command string) (string, error) {
	cmd := exec.Command("echo", command)
	socat := exec.Command("socat", "-", "/tmp/mpvsocket")
	pipe, _ := cmd.StdoutPipe()
	defer pipe.Close()

	socat.Stdin = pipe
	cmd.Start()
	out, err := socat.Output()
	if err != nil {
		fmt.Println("error socat: ", err)
		println("error socat: ", err.Error())
		println("out socat: ", string(out))
		return "", err
	}
	return string(out), nil
}
