const express = require("express");

const app = express();

const PORT = 3000;

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // do nothing
  }
}

//* Non-blocking route
app.get("/", (_, res) => {
  res.send(`Hello World: ${process.pid}`);
});

//* Blocking Route
app.get("/timer", (_, res) => {
  // The delay function completely blocked the Event Loop
  delay(9000);
  res.send(`Server responded: ${process.pid}`);
});

console.log("Server.js started...");
console.log("Worker Process started...");
app.listen(PORT);
