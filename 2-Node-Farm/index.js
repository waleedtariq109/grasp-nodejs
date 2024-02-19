const fs = require("fs");
const http = require("http");

const PORT = 8000;
const HOSTNAME = "127.0.0.1";

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const productData = JSON.parse(data); // TODO: Use it later

const server = http.createServer((req, res) => {
  // Get the request url
  const pathName = req.url;
  // Return response based on pathName
  if (pathName === "/overview" || pathName === "/") {
    res.end("This is the OVERVIEW page");
  } else if (pathName === "/product") {
    res.end("This is PRODUCT page");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
