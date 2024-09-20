import _ from "lodash";
import { WebSocketMessageInterface } from "../../messagesInterfaces/WebSocketMessageInterface";
import { Socket } from "../../socketInterface";
import ConnectToTopic from "../../utils/ConnectToTopic";

interface HandleMessages {
  message: WebSocketMessageInterface;
  ws: Socket;
  peers: Set<Socket>;
}
const handleSubscriptionMessages = ({ message, ws, peers }: HandleMessages) => {
  if (!ws.destination) ws.destination = [];

  if (message.type === "subscribe") {
    if (!_.isEqual(ws.destination, message.destination)) {
      ws.subscriptionIds = message.payload.SubscribeTo;
      ws.destination = message.destination;
    }
  }
};

export default handleSubscriptionMessages;
