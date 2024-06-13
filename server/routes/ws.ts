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
    open: (event) => {
      console.log("open");
    },
    close: (event) => {
      console.log("close");
    },
    message: (event) => {
      console.log("message", event);
    },
  },
});
