"use client";
import { Player } from "@media/player";
import { Song } from "@media/song";
import { useEffect, useState } from "react";

export const ListSongs = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<WebSocket>();

  // const listMessageHandler = (data: MessageEvent | null) => {
  //   if (data == null) {
  //     setSongs([]);
  //     return;
  //   }
  //   const res = JSON.parse(data.data);
  //   if (res != null) {
  //     setSongs(res.data);
  //   } else {
  //     setSongs([]);
  //   }
  // };

  const listSongs = () => {
    setResponse(Player.API.ListSongs());
  };

  useEffect(() => {
    listSongs();
    // const fetch = async () => {
    //   setLoading(true);
    //   Player.API.ListSongs(listMessageHandler);
    //   Player.API.ListSongs(listMessageHandler);
    //   setLoading(false);
    // };
    // fetch();
  }, []);

  console.log(response?.readyState);
  console.log(response?.onmessage);

  return (
    <div className="flex flex-col">
      {response && response?.readyState === response?.OPEN && <div>OPEN</div>}
      {response && response?.readyState === response?.CLOSED && (
        <div>CLOSED</div>
      )}
      {response && response?.readyState === response?.CONNECTING && (
        <div>CONNECTING</div>
      )}
      {response && response?.readyState === response?.CLOSING && (
        <div>CLOSING</div>
      )}

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
