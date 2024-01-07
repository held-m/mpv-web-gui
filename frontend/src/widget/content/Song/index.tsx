"use client";
import { usePlayerState } from "@src/lib/zustand/player";
import { useEffect } from "react";

export const ListSongs = () => {
  const songs = usePlayerState((state) => state.playlist);
  const clientStatus = usePlayerState((state) => state.clientStatus);
  const play = usePlayerState((state) => state.play);

  useEffect(() => {
    play();
  }, []);

  return (
    <div className="flex flex-col">
      <div>Status: {clientStatus}</div>

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
