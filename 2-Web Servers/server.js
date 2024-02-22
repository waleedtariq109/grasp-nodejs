const http = require("http");

const HOSTNAME = "127.0.0.1";
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

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(homePageHtml);
    res.end();
  } else if (req.url === "/profile-data") {
    res.end(
      JSON.stringify({
        profile_id: 1,
        name: "Waleed",
        national_id: 1982736567,
      })
    );
  } else {
    res.write("<h1>Page not found!");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`The server is running on http://${HOSTNAME}:${PORT}`);
});
