const http = require("http");

const HOSTNAME = "127.0.0.1";
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "plain/text");
  res.end("Hello's everyone");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`The server is running on http://${HOSTNAME}:${PORT}`);
});
