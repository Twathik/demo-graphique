"use client";
import { useAppStore } from "@/stores/AppStore";
import { useEffect, useMemo, useState } from "react";
import useWebSocket from "react-use-websocket";
import RootMessageHandler from "./HandleMessages/RootMessageHandler";
import { WebSocketMessageInterface } from "./interfaces/WebSocketMessageInterface";

export const WebsocketProvider = () => {
  //Public API that will echo messages sent to it back to the client
  const setSocket = useAppStore((s) => s.setSocket);
  const [message, setMessage] = useState<WebSocketMessageInterface | null>(
    null
  );
  const [connected, setConnected] = useState(false);
  const {
    getWebSocket,
    lastJsonMessage,
    readyState,
    sendJsonMessage,
    sendMessage,
  } = useWebSocket("ws://localhost:5555", {
    onOpen: () => {
      setConnected(true);
      console.log("opened");
    },
    onError: () => {
      setSocket(null);
    },
    onClose: () => {
      setSocket(null);
    },

    onMessage: (event) => {
      const m = JSON.parse(event.data) as WebSocketMessageInterface;

      setMessage(m);
    },
    queryParams: {},
    //heartbeat: true,

    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent: WebSocketEventMap["close"]) => {
      console.log({ closeEvent });
      setSocket(null);
      return true;
    },
  });
  useEffect(() => {
    if (connected)
      setSocket({
        getWebSocket,
        lastJsonMessage,
        readyState,
        sendJsonMessage,
        sendMessage,
      });
  }, [
    connected,
    getWebSocket,
    lastJsonMessage,
    readyState,
    sendJsonMessage,
    sendMessage,
    setSocket,
  ]);

  const response = useMemo(
    () => (message ? <RootMessageHandler message={message} /> : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [message?.id]
  );

  return response;
};
