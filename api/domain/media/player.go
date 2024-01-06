package media

type Player interface {
	AddPlayList(pl PlayList)
	RemovePlayList(pl PlayList)
	Play(pl PlayList)
	Stop()
	Pause()
	Next()
	Previous()
	Volume(volume int8)
}

// type Player struct {
// 	Name     string
// 	PlayList []PlayList
// 	Volume   int
// }
//
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
//
// func (p *Player) Play(pl PlayList) {}
//
// func (p *Player) Stop() {}
//
// func (p *Player) Pause() {}
//
// func (p *Player) Next() {}
//
// func (p *Player) Previous() {}
//
// func (p *Player) VolumeUp() {}
//
// func (p *Player) VolumeDown() {}
