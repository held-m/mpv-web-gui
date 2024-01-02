"use client";

import { Player } from "@media/player";
import { useState } from "react";

export const PlayerMenu = () => {
  const [src, setSrc] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const playHandler = async () => {
    if (isPaused) {
      await Player.API.Unpause();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }
    if (src == "") {
      return;
    }
    await Player.API.Play(src);
    setIsPaused(false);
    setIsPlaying(true);
  };
  const pauseHandler = async () => {
    await Player.API.Pause();
    setIsPaused(true);
    setIsPlaying(false);
  };
  const nextHandler = () => {
    Player.API.Next();
  };
  const backHandler = () => {
    Player.API.Prev();
  };
  const stopHandler = () => {
    Player.API.Stop();
    setIsPaused(false);
    setIsPlaying(false);
  };
  return (
    <div>
      <div className="grid grid-cols-4 gap-1 text-center">
        <div
          onClick={backHandler}
          className="p-2 mx-2 border border-green-500 border-solid cursor-pointer"
        >
          Back
        </div>
        <div
          onClick={playHandler}
          className={`p-2 mx-2 border border-green-500 border-solid cursor-pointer ${
            isPlaying ? "hidden" : ""
          }`}
        >
          Play
        </div>
        <div
          onClick={pauseHandler}
          className={`p-2 mx-2 border border-green-500 border-solid cursor-pointer ${
            isPlaying ? "" : "hidden"
          }`}
        >
          Pause
        </div>
        <div
          onClick={nextHandler}
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
      <div>
        <input
          type="text"
          className="m-2 w-full bg-gray-800"
          name="src"
          onChange={(e) => {
            setSrc(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
