import { useAppStore } from "@/stores/AppStore";
import { useEffect } from "react";
import { WebSocketMessageInterface } from "../../interfaces/WebSocketMessageInterface";

function CategoryChartHandler({
  message,
}: {
  message: WebSocketMessageInterface;
}) {
  const setCategoryChartData = useAppStore(
    (store) => store.setCategoryChartData
  );

  useEffect(() => {
    if (message.type === "categoryChart") {
      setCategoryChartData(message.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default CategoryChartHandler;
