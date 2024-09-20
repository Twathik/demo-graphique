import { WebSocketMessageInterface } from "../../messagesInterfaces/WebSocketMessageInterface";
import { Socket } from "../../socketInterface";
import { v4 as uuid } from "uuid";
import messageBroker from "../messageBroker";

function getRandomNumber() {
  return Math.random() * 50 + 30;
}

export const CategoryChartRandomData = ({ peers }: { peers: Set<Socket> }) => {
  const randomData = () => {
    const message: WebSocketMessageInterface = {
      id: uuid(),
      type: "categoryChart",
      destination: ["categoryChart"],
      data: [
        {
          framework: "Angular",
          rate: getRandomNumber(),
        },
        {
          framework: "CakePHP",
          rate: getRandomNumber(),
        },
        {
          framework: "Laravel",
          rate: getRandomNumber(),
        },
        {
          framework: "React",
          rate: getRandomNumber(),
        },
        {
          framework: "SolidJs",
          rate: getRandomNumber(),
        },
        {
          framework: "Svelte",
          rate: getRandomNumber(),
        },
        {
          framework: "Vue",
          rate: getRandomNumber(),
        },
      ],
    };

    messageBroker({ message, peers });
  };

  return setInterval(randomData, 5000);
};
