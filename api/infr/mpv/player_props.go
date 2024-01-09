package mpv

import "log"

type PlayerProps struct {
	Name     string
	Volume   string
	Playlist string
}

func InitPlayerProps() PlayerProps {
	p := PlayerProps{}

	// Get Name of the player
	p.getName()

	// Get Volume of the player
	p.getVolume()

	// Get Playlist of the player
	p.getPlaylist()

	return p
}

func (p *PlayerProps) getName() {
	name, err := new(Client).RequestGetProperty("name")
	if err != nil {
		log.Fatalln(err)
	}
	p.Name = name
}

func (p *PlayerProps) getVolume() {
	volume, err := new(Client).RequestGetProperty("volume")
	if err != nil {
		log.Fatalln(err)
	}
	p.Volume = volume
}

func (p *PlayerProps) getPlaylist() {
	playlist, err := new(Client).RequestGetProperty("playlist")
	if err != nil {
		log.Fatalln(err)
	}
	p.Playlist = playlist
}
