import { WebSocketMessageInterface } from "../../messagesInterfaces/WebSocketMessageInterface";
import { Socket } from "../../socketInterface";
import { v4 as uuid } from "uuid";
import { addDays } from "date-fns";
import messageBroker from "../messageBroker";

const currentDateTime = () => {
  const currentDate = new Date();
  currentDate.setMilliseconds(0);

  return currentDate;
};

export const TimeSeriesRandomData = ({ peers }: { peers: Set<Socket> }) => {
  let i = 0;
  const randomData = () => {
    const now = currentDateTime();
    now.setSeconds(now.getSeconds() - i);
    i++;
    const message: WebSocketMessageInterface = {
      id: uuid(),
      type: "timeSeries",
      destination: ["timeSeries"],
      data: {
        date: now,
        rate: Math.ceil(Math.random()) * 100,
      },
    };

    messageBroker({ message, peers });
  };

  return setInterval(randomData, 2000);
};
