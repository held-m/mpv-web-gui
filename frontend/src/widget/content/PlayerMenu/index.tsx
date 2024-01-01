"use client";

import { Player } from "@media/player";
import { useState } from "react";

export const PlayerMenu = () => {
  const [src, setSrc] = useState("");
  const playHandler = () => {
    if (src == "") {
      return;
    }
    Player.API.Play(src);
  };
  const nextHandler = () => {
    Player.API.Next();
  };
  const backHandler = () => {
    Player.API.Prev();
  };
  const stopHandler = () => {
    Player.API.Stop();
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
          className="p-2 mx-2 border border-green-500 border-solid cursor-pointer"
        >
          Play
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
