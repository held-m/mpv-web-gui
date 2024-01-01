package mpv

import "encoding/json"

// PlayList is the playlist
type PlayList struct {
	Name   string
	Songs  []Song
	Source string
	Client
}

// Command is the command to send to mpv
type Command struct {
	Command []string `json:"command"`
}

// GetSongs get the songs from the playlist
func (pl *PlayList) GetSongs() (string, error) {

	cmd := &Command{
		Command: []string{"get_property", "playlist"},
	}

	cmdString, err := json.Marshal(cmd)

	if err != nil {
		return "", err
	}

	return pl.Request(string(cmdString))
}
