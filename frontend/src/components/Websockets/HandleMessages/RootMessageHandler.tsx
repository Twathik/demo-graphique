import { useMemo } from "react";
import { WebSocketMessageInterface } from "../interfaces/WebSocketMessageInterface";
import CategoryChartHandler from "./Handlers/CategoryChartHandler";
import TimeSeriesChartHandler from "./Handlers/TimeSeriesChartHandler";

function RootMessageHandler({
  message,
}: {
  message: WebSocketMessageInterface;
}) {
  const component = useMemo(() => {
    switch (message.type) {
      case "categoryChart":
        return <CategoryChartHandler message={message} />;
      case "timeSeries":
        return <TimeSeriesChartHandler message={message} />;
      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);

  return component;
}

export default RootMessageHandler;
