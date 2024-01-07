import { useWebSocket } from "@src/lib/zustand/websocket";
import { useEffect, useState } from "react";
import { API } from "../../api";

type Props = {
  src: string;
  isStopped: boolean;
  setIsStopped: (isStopped: boolean) => void;
};

export const PlayPauseButton = (props: Props) => {
  const connect = useWebSocket((state) => state.play);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (props.isStopped) {
      setIsPlaying(false);
    }
  }, [props.isStopped]);

  const playHandler = async () => {
    if (!isPlaying && !props.isStopped) {
      await API.Unpause();
      setIsPlaying(true);
      return;
    }
    if (props.src == "") {
      return;
    }
    await API.Play(props.src);
    setIsPlaying(true);
    props.setIsStopped(false);
    connect();
  };

  const pauseHandler = async () => {
    await API.Pause();
    setIsPlaying(false);
  };
  return (
    <div className="w-32">
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
    </div>
  );
};
