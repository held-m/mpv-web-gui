"use client";
import { Player } from "@media/player";
import { Song } from "@media/song";
import { useEffect, useState } from "react";

export const ListSongs = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const listMessageHandler = (data: MessageEvent | null) => {
    if (data == null) {
      setSongs([]);
      return;
    }
    const res = JSON.parse(data.data);
    if (res != null) {
      setSongs(res.data);
    } else {
      setSongs([]);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      Player.API.ListSongs(listMessageHandler);
      Player.API.ListSongs(listMessageHandler);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="flex flex-col">
      {loading && <div>Loading...</div>}
      {!loading && (
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
