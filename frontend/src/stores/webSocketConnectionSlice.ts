import type { StateCreator } from "zustand";
import type { appStoreType, WebsocketConnectionSlice } from "./AppStoreType";

const createWebSocketConnection: StateCreator<
  appStoreType,
  [["zustand/immer", never], never],
  [],
  WebsocketConnectionSlice
> = (set) => ({
  socket: null,
  setSocket: (socket) => {
    set((s) => {
      s.socket = socket;
    });
  },
});

export default createWebSocketConnection;
