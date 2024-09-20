import { WebSocket } from "ws";
import { WebSocketMessageInterface } from "./messagesInterfaces/WebSocketMessageInterface";

export interface Socket extends WebSocket {
  isAlive: boolean;
  id: string;
  subscriptionIds?: string[];
  destination?: WebSocketMessageInterface["destination"];
}

export interface TopicRoom {
  topic: string;
  subscriptionId: string;
  subscribedSocketId: string[];
}

export type TopicSocket = { [key: string]: TopicRoom };

export type TopicStore = {
  patientStore: TopicSocket;
};
