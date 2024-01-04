"use client";
import { Player } from "@media/player";
import { Song } from "@media/song";
import { useWebSocket } from "@src/lib/zustand/websocket";
import { useEffect, useState } from "react";

export const ListSongs = () => {
  // const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const [status, setStatus] = useState<string>("loading");

  const songs = useWebSocket((state) => state.listSongs);
  const status = useWebSocket((state) => state.status);

  // const listSongs = () => {
  //   const ws = Player.API.ListSongs();
  //
  //   ws.onmessage = (messageEvent: MessageEvent) => {
  //     setSongs(JSON.parse(messageEvent.data).data as Song[]);
  //     setStatus(messageEvent.type);
  //   };
  //   ws.onclose = (event: CloseEvent) => {
  //     console.log("close", event);
  //     setSongs([]);
  //     setStatus(event.type);
  //   };
  //
  //   ws.onopen = (event: Event) => {
  //     console.log("open", event);
  //     setStatus(event.type);
  //   };
  // };

  useEffect(() => {
    // listSongs();
  }, []);

  return (
    <div className="flex flex-col">
      <div>Status: {status}</div>

      {loading && <div>Loading...</div>}
      {songs && (
        <div className="flex flex-col">
          {songs.map((song, index) => (
            <div key={index} className={song.current ? "bg-green-700" : ""}>
              <div className="flex flex-row">
                <div>{song.id} - </div>
                <div> {song.title}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
