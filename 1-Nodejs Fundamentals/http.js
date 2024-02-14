const { get, createServer } = require("http");

const HOSTNAME = "127.0.0.1";
const PORT = 8000;

const server = createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  get("http://www.google.com", (res1) => {
    res1.on("data", (response) => {
      res.end(response);
    });
    res1.on("end", () => {
      console.log("Requested Completed");
    });
  });
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`The server is running on http://${HOSTNAME}:${PORT}`);
});
