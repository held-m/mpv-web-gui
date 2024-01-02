import {
  ClientResponse,
  clientGet,
  clientWebsocket,
} from "@share/utils/client";

interface API {
  Play: (src: string) => Promise<ClientResponse>;
  Pause: () => Promise<ClientResponse>;
  Unpause: () => Promise<ClientResponse>;
  Stop: () => Promise<ClientResponse>;
  Next: () => Promise<ClientResponse>;
  Prev: () => Promise<ClientResponse>;
  ListSongs: (data: (e: MessageEvent | null) => void) => void;
}

const play = async (src: string) => {
  return await clientGet("player/play?src=" + src);
};

const pause = async () => {
  return await clientGet("player/pause");
};

const unpause = async () => {
  return await clientGet("player/unpause");
};

const stop = async () => {
  return await clientGet("player/stop");
};

const next = async () => {
  return await clientGet("player/next");
};

const prev = async () => {
  return await clientGet("player/prev");
};

const listSongs = async (data: (e: MessageEvent | null) => void) => {
  clientWebsocket("player/playlist", data);
};

export const API: API = {
  Play: play,
  Pause: pause,
  Unpause: unpause,
  Stop: stop,
  Next: next,
  Prev: prev,
  ListSongs: listSongs,
};
