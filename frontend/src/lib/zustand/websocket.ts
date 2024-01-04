import { API } from "@src/media/player/api";
import { Song } from "@src/media/song";
import { create } from "zustand";

interface WebSocketStore {
  socket: WebSocket | null;
  status: "connecting" | "online" | "disconnected";
  connect: () => void;
  listSongs: Song[];
}

export const useWebSocket = create<WebSocketStore>((set) => ({
  status: "connecting",
  listSongs: [],
  socket: null,
  connect: () => {
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
