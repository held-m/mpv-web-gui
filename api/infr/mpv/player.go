package mpv

import (
	"os/exec"
)

// Player is the player of mpv
type Player struct {
	Props  PlayerProps
	Status string
}

// InitPlayer create a new player
func InitPlayer() (Player, error) {
	p := Player{}

	p.Props = InitPlayerProps()

	//
	return p, nil
}

// Play the source
func (p *Player) Play(source string) error {
	p.Stop()
	isVideo := "--vid=no"
	ipcServer := "--input-ipc-server=/tmp/mpvsocket"
	cmd := exec.Command("mpv", isVideo, ipcServer, source)
	if err := cmd.Start(); err != nil {
		return err
	}
	return nil
}

// Pause the next song
func (p *Player) Pause() error {
	if _, err := new(Client).Request("{\"command\": [\"set_property\", \"pause\", true]}"); err != nil {
		return err
	}
	return nil
	// if _, err := new(Client).RequestSetProperty("pause", "true"); err != nil {
	// 	return err
	// }
	// return nil
}

// Unpause the next song
func (p *Player) Unpause() error {
	if _, err := new(Client).Request("{\"command\": [\"set_property\", \"pause\", false]}"); err != nil {
		return err
	}
	return nil
}

// Stop the player
func (p *Player) Stop() error {
	if _, err := new(Client).Request("stop"); err != nil {
		return err
	}
	return nil
}

// Next play the next song
func (p *Player) Next() error {
	if _, err := new(Client).Request("playlist_next"); err != nil {
		return err
	}
	return nil
}

// Previous play the previous song
func (p *Player) Previous() error {
	if _, err := new(Client).Request("playlist_prev"); err != nil {
		return err
	}
	return nil
}

// SetVolume set a volume
func (p *Player) SetVolume(volume string) error {
	if _, err := new(Client).Request("set volume " + volume); err != nil {
		return err
	}
	return nil
}
