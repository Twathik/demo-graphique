import { IncomingMessage, Server, ServerResponse } from "http";
import { Server as WebsocketServer } from "ws";
import { Socket } from "../socketInterface";
import onSocketError from "../utils/onSocketError";
import { v4 as uuid } from "uuid";

const handleUpgrade = ({
  server,
  wss,
}: {
  server: Server<typeof IncomingMessage, typeof ServerResponse>;
  wss: WebsocketServer;
}) => {
  server.on("upgrade", async (request, socket, head) => {
    socket.on("error", onSocketError);

    try {
      socket.removeListener("error", onSocketError);
      wss.handleUpgrade(request, socket, head, async function done(ws) {
        const connection = ws as Socket;
        connection.id = uuid();

        wss.emit("connection", connection, request);
      });
    } catch (error) {
      socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
      socket.destroy();
      return;
    }

    // This function is not defined on purpose. Implement it with your own logic.
  });
};

export default handleUpgrade;
