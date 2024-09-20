import { WebSocketServer } from "ws";
import { Socket } from "../socketInterface";
import pongHandler from "./messageRootTypesHandlers/pongHandler";
import errorHandler from "./messageRootTypesHandlers/errorHandler";
import messageHandler from "./messageRootTypesHandlers/MessageHandler";

export default function handleConnections({
  peers,
  wss,
}: {
  peers: Set<Socket>;
  wss: WebSocketServer;
}) {
  wss.on("connection", function connection(ws: Socket) {
    ws.isAlive = true;
    pongHandler({ ws });
    errorHandler({ ws });
    messageHandler({ ws, peers });
  });
}
