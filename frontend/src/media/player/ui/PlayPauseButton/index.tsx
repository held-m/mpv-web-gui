import { useEffect, useState } from "react";
import { API } from "../../api";
import { usePlayerState } from "@src/lib/zustand/player";

type Props = {
  src: string;
  isStopped: boolean;
  setIsStopped: (isStopped: boolean) => void;
};

export const PlayPauseButton = (props: Props) => {
  const connect = usePlayerState((state) => state.play);
  const playerStatus = usePlayerState((state) => state.status);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (props.isStopped || playerStatus !== "playing") {
      setIsPlaying(false);
    }
  }, [props.isStopped, playerStatus]);

  const playHandler = async () => {
    // if (!isPlaying && !props.isStopped) {
    if (playerStatus === "paused") {
      console.log("Unpause");
      const resp = await API.Unpause();
      if (resp.status !== 200) {
        console.log("Error", resp);
        return;
      }
      setIsPlaying(true);
      return;
    }
    if (props.src == "") {
      return;
    }
    const resp = await API.Play(props.src);
    console.log("Play", resp.status);
    if (resp.status !== 200) {
      console.log("Error", resp);
      return;
    }
    connect();
    setIsPlaying(true);
    props.setIsStopped(false);
  };

  const pauseHandler = async () => {
    await API.Pause();
    setIsPlaying(false);
  };

  console.log("isplaying", isPlaying);
  return (
    <div className="w-32">
      <div
        onClick={playHandler}
        className={`p-2 mx-2 border border-green-500 border-solid cursor-pointer ${isPlaying ? "hidden" : ""
          }`}
      >
        Play
      </div>
      <div
        onClick={pauseHandler}
        className={`p-2 mx-2 border border-green-500 border-solid cursor-pointer ${isPlaying ? "" : "hidden"
          }`}
      >
        Pause
      </div>
    </div>
  );
};
