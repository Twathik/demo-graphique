import { RootMessageInterface } from "./RootMessageInterface";

export interface TimeSeriesMessageInterface extends RootMessageInterface {
  type: "timeSeries";
  data: { date: Date; rate: number };
}
