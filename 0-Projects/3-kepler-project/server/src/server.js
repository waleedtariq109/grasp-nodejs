const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 8000;
const HOSTNAME = process.env.HOST || "127.0.0.1";

const server = http.createServer(app);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
