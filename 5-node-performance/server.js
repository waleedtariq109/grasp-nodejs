const cluster = require("cluster");
const os = require("os"); // -> Operating System

const express = require("express");

const app = express();

cluster.schedulingPolicy = cluster.SCHED_RR;

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

/**
 * os.cpus() returns an array and on eact array element
 * we have an object which contains information about
 * each core
 * [{COR_1},{COR_2},{COR_3},{COR_4}]
 */

if (cluster.isMaster) {
  const TOTAL_WORKERS = os.cpus().length;
  for (let i = 0; i < TOTAL_WORKERS; i++) {
    cluster.fork();
  }
  console.log("Master Process has been started");
} else {
  console.log("Worker Process has been started");
  app.listen(PORT);
}
