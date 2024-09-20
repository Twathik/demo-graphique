// src/index.ts
import { createServer } from "http";
import { WebSocketServer } from "ws";

// src/utils/onSocketError.ts
function onSocketError(err) {
  console.error(err);
}

// src/Handlers/handleUpgrade.ts
import { v4 as uuid } from "uuid";
var handleUpgrade = ({
  server,
  wss
}) => {
  server.on("upgrade", async (request, socket, head) => {
    socket.on("error", onSocketError);
    try {
      socket.removeListener("error", onSocketError);
      wss.handleUpgrade(request, socket, head, async function done(ws) {
        const connection = ws;
        connection.id = uuid();
        wss.emit("connection", connection, request);
      });
    } catch (error) {
      socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
      socket.destroy();
      return;
    }
  });
};
var handleUpgrade_default = handleUpgrade;

// src/Handlers/messageRootTypesHandlers/pongHandler.ts
function pongHandler({ ws }) {
  ws.on("pong", function() {
    this.isAlive = true;
  });
}

// src/Handlers/messageRootTypesHandlers/errorHandler.ts
function errorHandler({ ws }) {
  ws.on("error", console.error);
}

// src/Handlers/messageRootTypesHandlers/SubscriptionMessagesHandler.ts
import _ from "lodash";
var handleSubscriptionMessages = ({ message, ws, peers }) => {
  if (!ws.destination) ws.destination = [];
  if (message.type === "subscribe") {
    if (!_.isEqual(ws.destination, message.destination)) {
      ws.subscriptionIds = message.payload.SubscribeTo;
      ws.destination = message.destination;
    }
  }
};
var SubscriptionMessagesHandler_default = handleSubscriptionMessages;

// src/Handlers/messageRootTypesHandlers/MessageHandler.ts
function messageHandler({
  ws,
  peers
}) {
  ws.on("message", async function message(data) {
    if (data) {
      const message2 = JSON.parse(data.toString());
      if (message2.type === "subscribe") {
        return SubscriptionMessagesHandler_default({
          message: message2,
          ws,
          peers
        });
      }
    }
  });
}

// src/Handlers/handleConnection.ts
function handleConnections({
  peers,
  wss
}) {
  wss.on("connection", function connection(ws) {
    ws.isAlive = true;
    pongHandler({ ws });
    errorHandler({ ws });
    messageHandler({ ws, peers });
  });
}

// src/Handlers/handleKeepAlive.ts
function handleKeepAlive({ peers }) {
  const interval = setInterval(function ping() {
    peers.forEach(function each(ws) {
      if (ws.isAlive === false) {
        console.log("terminated");
        return ws.terminate();
      }
      ws.isAlive = false;
      ws.ping();
    });
  }, 3e3);
  return interval;
}

// src/utils/RandomDataGenerators/CategoryChartRandomData.ts
import { v4 as uuid2 } from "uuid";

// src/utils/DestinationHandler.ts
function destinationHandler({
  message,
  ws
}) {
  let send = false;
  ws.destination?.forEach((d) => {
    if (message.destination?.includes(d)) send = true;
  });
  return send;
}

// src/utils/messageBroker.ts
var messageBroker = ({
  message,
  peers
}) => {
  peers?.forEach((peer) => {
    if (message.destination?.length > 0) {
      const check = destinationHandler({ message, ws: peer });
      if (!check) return;
    }
    peer.send(JSON.stringify(message));
  });
};
var messageBroker_default = messageBroker;

// src/utils/RandomDataGenerators/CategoryChartRandomData.ts
function getRandomNumber() {
  return Math.random() * 50 + 30;
}
var CategoryChartRandomData = ({ peers }) => {
  const randomData = () => {
    const message = {
      id: uuid2(),
      type: "categoryChart",
      destination: ["categoryChart"],
      data: [
        {
          framework: "Angular",
          rate: getRandomNumber()
        },
        {
          framework: "CakePHP",
          rate: getRandomNumber()
        },
        {
          framework: "Laravel",
          rate: getRandomNumber()
        },
        {
          framework: "React",
          rate: getRandomNumber()
        },
        {
          framework: "SolidJs",
          rate: getRandomNumber()
        },
        {
          framework: "Svelte",
          rate: getRandomNumber()
        },
        {
          framework: "Vue",
          rate: getRandomNumber()
        }
      ]
    };
    messageBroker_default({ message, peers });
  };
  return setInterval(randomData, 5e3);
};

// src/utils/RandomDataGenerators/TimeSeriesRandomData.ts
import { v4 as uuid3 } from "uuid";
var currentDateTime = () => {
  const currentDate = /* @__PURE__ */ new Date();
  currentDate.setMilliseconds(0);
  return currentDate;
};
var TimeSeriesRandomData = ({ peers }) => {
  let i = 0;
  const randomData = () => {
    const now = currentDateTime();
    now.setSeconds(now.getSeconds() - i);
    i++;
    const message = {
      id: uuid3(),
      type: "timeSeries",
      destination: ["timeSeries"],
      data: {
        date: now,
        rate: Math.ceil(Math.random()) * 100
      }
    };
    messageBroker_default({ message, peers });
  };
  return setInterval(randomData, 2e3);
};

// src/Handlers/messageRootTypesHandlers/sendRandomDataHandler.ts
var sendRandomDataHandler = ({ peers }) => {
  const categoryInterval = CategoryChartRandomData({ peers });
  const TimeSeriesInterval = TimeSeriesRandomData({ peers });
  return [categoryInterval, TimeSeriesInterval];
};

// src/index.ts
async function main() {
  const server = createServer({
    keepAlive: true
  });
  const wss = new WebSocketServer({ noServer: true });
  const peers = wss.clients;
  handleUpgrade_default({ server, wss });
  handleConnections({ wss, peers });
  const intervals = sendRandomDataHandler({ peers });
  intervals.push(handleKeepAlive({ peers }));
  wss.on("close", function close() {
    console.log("closed");
    intervals.forEach((interval) => clearInterval(interval));
  });
  server.listen(5555);
}
main();
