import { API } from "@src/media/player/api";
import { Song } from "@src/media/song";
import { create } from "zustand";

interface PlayerStore {
  clientStatus: "connecting" | "online" | "disconnected";
  status: "playing" | "stoped" | "paused";
  play: () => void;
  playlist: Song[];
}

export const usePlayerState = create<PlayerStore>((set) => ({
  clientStatus: "disconnected",
  status: "stoped",
  playlist: [],
  play: () => {
    const socket = API.ListSongs();
    socket.onopen = () => set({ clientStatus: "online" });
    socket.onclose = () => set({ clientStatus: "disconnected" });
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      set({
        clientStatus: "online",
        playlist: data.data,
      });
    };
  },
}));
