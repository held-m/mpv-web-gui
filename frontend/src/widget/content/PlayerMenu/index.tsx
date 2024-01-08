"use client";

import { PlayerModul } from "@media/player";

import { useState } from "react";

export const PlayerMenu = () => {
  const [src, setSrc] = useState("");
  const [stopped, setStopped] = useState(false);

  const stopHandler = () => {
    PlayerModul.API.Stop();
    setStopped(true);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-1 text-center">
        <div
          onClick={() => {
            PlayerModul.API.Prev();
          }}
          className="p-2 mx-2 border border-green-500 border-solid cursor-pointer"
        >
          Back
        </div>
        <PlayerModul.UI.PlayPauseButton
          src={src}
          isStopped={stopped}
          setIsStopped={setStopped}
        />
        <div
          onClick={() => {
            PlayerModul.API.Next();
          }}
          className="p-2 mx-2 border border-green-500 border-solid cursor-pointer"
        >
          Next
        </div>
        <div
          onClick={stopHandler}
          className="p-2 mx-2 border border-green-500 border-solid cursor-pointer"
        >
          Stop
        </div>
      </div>
      <PlayerModul.UI.VolumeRange />
      <div>
        <input
          type="text"
          className="m-2 w-full bg-gray-800"
          name="src"
          onChange={(e) => {
            setSrc(e.target.value);
          }}
          value="https://music.youtube.com/playlist?list=OLAK5uy_kcW9BewDi65mQJqrU1FMtuJDOWvLj2jLA&si=HASWsP9ECi8-brtK"
        />
      </div>
    </div>
  );
};
