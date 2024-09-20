import { CategoriesChartMessageInterface } from "./CategoriesChartMessageInterface";
import { SubscribeMessageInterface } from "./SubscribeMessageInterface";
import { TimeSeriesMessageInterface } from "./TimeSeriesMessageInterface";

export type WebSocketMessageInterface =
  | TimeSeriesMessageInterface
  | CategoriesChartMessageInterface
  | SubscribeMessageInterface;
