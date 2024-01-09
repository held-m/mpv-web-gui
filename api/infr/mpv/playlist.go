package mpv

// PlayList is the playlist
type PlayList struct {
	Client
	Songs string
}

func (p *PlayList) getPlaylist() error {
	playlist, err := p.RequestGetProperty("playlist")
	if err != nil {
		return err
	}
	p.Songs = playlist
	return nil
}
