import { WebSocketMessageInterface } from "../../messagesInterfaces/WebSocketMessageInterface";
import { Socket } from "../../socketInterface";
import handleSubscriptionMessages from "./SubscriptionMessagesHandler";

export default function messageHandler({
  ws,
  peers,
}: {
  ws: Socket;
  peers: Set<Socket>;
}) {
  ws.on("message", async function message(data) {
    //
    if (data) {
      const message = JSON.parse(data.toString()) as WebSocketMessageInterface;

      if (message.type === "subscribe") {
        return handleSubscriptionMessages({
          message,
          ws,
          peers,
        });
      }
    }
  });
}
