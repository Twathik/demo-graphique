import { CategoriesChartMessageInterface } from "@/components/Websockets/interfaces/CategoriesChartMessageInterface";
import { TimeSeriesMessageInterface } from "@/components/Websockets/interfaces/TimeSeriesMessageInterface";
import type { ReadyState } from "react-use-websocket";
import type {
  SendJsonMessage,
  SendMessage,
  WebSocketLike,
} from "react-use-websocket/dist/lib/types";

export type WebsocketConnectionType = {
  getWebSocket: () => WebSocketLike | null;
  lastJsonMessage: unknown;
  readyState: ReadyState;
  sendJsonMessage: SendJsonMessage;
  sendMessage: SendMessage;
};

export type WebsocketConnectionSlice = {
  socket: WebsocketConnectionType | null;
  setSocket: (socket: WebsocketConnectionType | null) => void;
};

export type CategoryChartSlice = {
  categoryChartData: CategoriesChartMessageInterface["data"];
  setCategoryChartData: (data: CategoriesChartMessageInterface["data"]) => void;
};

export type TimeSeries = { Date: Date; rate: number };

export type TimeSeriesChartSlice = {
  timeSeriesData: TimeSeries[];
  pushTimeSeriesData: (data: TimeSeries) => void;
};

export type appStoreType = WebsocketConnectionSlice &
  CategoryChartSlice &
  TimeSeriesChartSlice;
