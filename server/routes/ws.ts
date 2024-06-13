import { Server as WebSocketServer } from "rpc-websockets";
const server = new WebSocketServer({
  port: 8080,
  host: "localhost",
});

export default defineEventHandler({
  handler: async (event) => {
    return "Hello Nitro";
  },
  websocket: {
    open: () => {
      // wsServer.
    },
    close: () => {
      wsServer.close();
    },
    message: (event) => {
      // wsServer.
    },
  },
});
