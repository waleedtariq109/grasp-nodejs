const http = require("http");
const url = require("url");

const PORT = 8000;

const homePageHtml = `
<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
  <style>
    body{
      width:100vw;
      height:100vh;
      background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
      display: grid;
      place-items: center;
      overflow: hidden;
    }
    h1{
      font-size: 55px;
      color: #f5f5f5;
    }
  </style>
</head>
<body>
  <h1>This is Home page</h1>
</body>
</html>
`;

const friendLists = [
  {
    id: 1,
    name: "Waleed",
  },
  {
    id: 2,
    name: "Hafiz saab",
  },
  {
    id: 3,
    name: "Zeeshan",
  },
  {
    id: 4,
    name: "Watto",
  },
  {
    id: 5,
    name: "Zaid",
  },
  {
    id: 6,
    name: "Hassan",
  },
];

const server = http.createServer((req, res) => {
  const { path } = url.parse(req?.url);
  const method = req?.method;
  if (path === "/" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(homePageHtml);
    res.end();
  } else if (path === "/friends" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(friendLists));
  } else if (path === "/friends" && method === "POST") {
    console.log("Inside Post");
    req.on("data", (data) => {
      const friendData = data.toString();
      console.log(`Request Data: ${friendData}`);
      friendLists.push(JSON.parse(friendData));
    });
  } else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Page not found!</h1>");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
