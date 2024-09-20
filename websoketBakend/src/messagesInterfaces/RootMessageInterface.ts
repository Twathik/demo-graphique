export type MessageType = "categoryChart" | "timeSeries" | "subscribe";

export interface RootMessageInterface {
  title?: string;
  id: string;
  type: MessageType;
  destination: MessageType[];
  beginDate?: Date;
}
