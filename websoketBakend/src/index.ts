import { createServer } from "http";
import { WebSocketServer } from "ws";
import { Socket } from "./socketInterface";
import handleUpgrade from "./Handlers/handleUpgrade";
import handleConnections from "./Handlers/handleConnection";
import handleKeepAlive from "./Handlers/handleKeepAlive";
import { sendRandomDataHandler } from "./Handlers/messageRootTypesHandlers/sendRandomDataHandler";

async function main() {
  const server = createServer({
    keepAlive: true,
  });
  const wss = new WebSocketServer({ noServer: true });
  const peers = wss.clients as Set<Socket>;

  handleUpgrade({ server, wss });
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
