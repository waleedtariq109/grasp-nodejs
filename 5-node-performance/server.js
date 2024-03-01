const cluster = require("cluster"); // Required only for windows OS

const express = require("express");

const app = express();

cluster.schedulingPolicy = cluster.SCHED_RR; // Just windows OS things

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
  delay(100);
  res.send(`Server responded: ${process.pid}`);
});

console.log("Server.js started...");
console.log("Worker Process started...");
app.listen(PORT);
