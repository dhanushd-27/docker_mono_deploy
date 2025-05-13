import prisma from "@repo/db/client";

Bun.serve({
  port: 8080,
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return; // do not return a Response
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    message(ws, message) {
        async function createUser() {
          await prisma.user.create({
            data: {
              email: Math.random().toString(),
              password: Math.random().toString()
            }
          })
        }
        createUser();
        ws.send("User created");
    },
    open(ws) {
      ws.send("Hello from the server!");
    },
    close(ws) {
      ws.send("Hello from the server!");
    },
  },
});