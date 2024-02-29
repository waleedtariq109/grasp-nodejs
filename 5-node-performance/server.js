const express = require("express");
const cluster = require("cluster");

const app = express();

const PORT = 3000;

cluster.schedulingPolicy = cluster.SCHED_RR;

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

if (cluster.isMaster) {
  console.log("Master Process has been started");
  cluster.fork();
  cluster.fork();
} else {
  console.log("Worker Process has been started");
  app.listen(PORT);
}
