const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const PORT = 3000;
const HOSTNAME = "127.0.0.1";

const template = fs.readFileSync("./src/views/index.ejs", "utf-8");

const data = {
  message: "Hello, EJS without Express!",
};

const compiledTemplate = ejs.compile(template);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(compiledTemplate(data));
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
