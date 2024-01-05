import { API } from "@src/media/player/api";
import { Song } from "@src/media/song";
import { create } from "zustand";

interface WebSocketStore {
  socket: WebSocket | null;
  status: "connecting" | "online" | "disconnected";
  play: () => void;
  listSongs: Song[];
}

export const useWebSocket = create<WebSocketStore>((set) => ({
  status: "disconnected",
  listSongs: [],
  socket: null,
  play: () => {
    const socket = API.ListSongs();
    socket.onopen = () => set({ socket, status: "online" });
    socket.onclose = () => set({ socket: null, status: "disconnected" });
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      set({
        status: "online",
        socket,
        listSongs: data.data,
      });
    };
  },
}));
