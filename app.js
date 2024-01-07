const http = require("node:http");

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer(async (req, res) => {
  try {
    res.statusCode = 200;
    res.setHeader("Set-Content", "plain/text");
    res.end(`Hello World From: ${req.url}`);
  } catch {}
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
