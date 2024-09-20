import { useAppStore } from "@/stores/AppStore";
import { useEffect } from "react";
import { WebSocketMessageInterface } from "../../interfaces/WebSocketMessageInterface";

function TimeSeriesChartHandler({
  message,
}: {
  message: WebSocketMessageInterface;
}) {
  const pushTimeSeriesData = useAppStore((store) => store.pushTimeSeriesData);

  useEffect(() => {
    if (message.type === "timeSeries") {
      console.log({ message });
      pushTimeSeriesData(message.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default TimeSeriesChartHandler;
