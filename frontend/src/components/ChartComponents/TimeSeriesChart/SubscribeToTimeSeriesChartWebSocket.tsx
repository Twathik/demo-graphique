"use client";

import { WebSocketMessageInterface } from "@/components/Websockets/interfaces/WebSocketMessageInterface";
import { useAppStore } from "@/stores/AppStore";
import { useEffect } from "react";
import { ReadyState } from "react-use-websocket";
import { v4 as uuid } from "uuid";

function SubscribeToTimeSeriesChartWebSocket() {
  const socket = useAppStore((s) => s.socket);
  useEffect(() => {
    if (socket?.readyState === ReadyState.OPEN) {
      const message: WebSocketMessageInterface = {
        id: uuid(),
        type: "subscribe",
        payload: { operation: "subscribeTo", SubscribeTo: [] },
        destination: ["timeSeries"],
      };
      socket.sendJsonMessage(message, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket?.readyState]);
  return null;
}

export default SubscribeToTimeSeriesChartWebSocket;
