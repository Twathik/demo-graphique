import { WebSocketMessageInterface } from "../../messagesInterfaces/WebSocketMessageInterface";
import { Socket } from "../../socketInterface";
import { CategoryChartRandomData } from "../../utils/RandomDataGenerators/CategoryChartRandomData";
import { TimeSeriesRandomData } from "../../utils/RandomDataGenerators/TimeSeriesRandomData";

export const sendRandomDataHandler = ({ peers }: { peers: Set<Socket> }) => {
  const categoryInterval = CategoryChartRandomData({ peers });
  const TimeSeriesInterval = TimeSeriesRandomData({ peers });

  return [categoryInterval, TimeSeriesInterval];
};
