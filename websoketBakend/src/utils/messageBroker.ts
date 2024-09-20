import { Socket } from "../socketInterface";
import { WebSocketMessageInterface } from "../messagesInterfaces/WebSocketMessageInterface";
import destinationHandler from "./DestinationHandler";

const messageBroker = ({
  message,
  peers,
}: {
  message: WebSocketMessageInterface;
  peers?: Set<Socket>;
}) => {
  //console.log({ message });
  peers?.forEach((peer) => {
    if (message.destination?.length > 0) {
      const check = destinationHandler({ message, ws: peer });
      //console.log({ check });

      if (!check) return;
    }

    peer.send(JSON.stringify(message));
  });
};

export default messageBroker;
