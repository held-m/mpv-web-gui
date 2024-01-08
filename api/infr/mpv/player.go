package mpv

import "os/exec"

// Player is the player of mpv
type Player struct {
	Client
	Name   string
	Volume string
	Status string
}

// InitPlayer create a new player
func InitPlayer() (Player, error) {
	p := Player{}

	// Get Name of the player
	if err := p.getName(); err != nil {
		return p, err
	}

	// Get Volume of the player
	if err := p.getVolume(); err != nil {
		return p, err
	}

	return p, nil
}

func (p *Player) getName() error {
	name, err := p.Request("\"get_property\", \"name\"")
	if err != nil {
		return err
	}
	p.Name = name
	return nil
}

func (p *Player) getVolume() error {
	volume, err := p.Request("\"get_property\", \"volume\"")
	if err != nil {
		return err
	}
	p.Volume = volume
	return nil
}

// func (p *Player) AddPlayList(pl PlayList) {
// 	p.PlayList = append(p.PlayList, pl)
// }
//

// func (p *Player) RemovePlayList(pl PlayList) {
// 	for i, v := range p.PlayList {
// 		if v.Name == pl.Name {
// 			p.PlayList = append(p.PlayList[:i], p.PlayList[i+1:]...)
// 		}
// 	}
// }

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
	if _, err := p.Request("{\"command\": [\"set_property\", \"pause\", true]}"); err != nil {
		return err
	}
	return nil
}

// Unpause the next song
func (p *Player) Unpause() error {
	if _, err := p.Request("{\"command\": [\"set_property\", \"pause\", false]}"); err != nil {
		return err
	}
	return nil
}

// Stop the player
func (p *Player) Stop() error {
	if _, err := p.Request("stop"); err != nil {
		return err
	}
	return nil
}

// Next play the next song
func (p *Player) Next() error {
	if _, err := p.Request("playlist_next"); err != nil {
		return err
	}
	return nil
}

// Previous play the previous song
func (p *Player) Previous() error {
	if _, err := p.Request("playlist_prev"); err != nil {
		return err
	}
	return nil
}

// SetVolume set a volume
func (p *Player) SetVolume(volume string) error {
	if _, err := p.Request("set volume " + volume); err != nil {
		return err
	}
	return nil
}
