// Package mpv is the package to interact with mpv
package mpv

import (
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
		return "", err
	}
	return string(out), nil
}

// RequestGetProperty send a command to mpv
func (c *Client) RequestGetProperty(property string) (string, error) {
	cmd := "{\"command\": [\"get_property\", \"" + property + "\"] }"
	out, err := c.Request(cmd)
	if err != nil {
		return "", err
	}
	return string(out), nil
}

// RequestSetProperty send a command to mpv
func (c *Client) RequestSetProperty(property string, value string) (string, error) {
	cmd := "{\"command\": [\"set_property\", \"" + property + "\", \"" + value + "\"] }"
	out, err := c.Request(cmd)
	if err != nil {
		return "", err
	}
	return string(out), nil
}
