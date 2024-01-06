"use client";
import { useWebSocket } from "@src/lib/zustand/websocket";
import { useEffect } from "react";

export const ListSongs = () => {
  const songs = useWebSocket((state) => state.listSongs);
  const status = useWebSocket((state) => state.status);
  const play = useWebSocket((state) => state.play);

  useEffect(() => {
    play();
  }, []);

  return (
    <div className="flex flex-col">
      <div>Status: {status}</div>

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
