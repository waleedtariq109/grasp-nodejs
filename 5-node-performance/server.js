const cluster = require("cluster");
const express = require("express");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // event loop is blocked
  }
}

app.get("/", (req, res) => {
  res.send(`Performance Example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Server responded ${process.pid}`);
});

console.log("Running Server.js");
if (cluster.isPrimary) {
  console.log("Master Process Started...");
  cluster.fork();
  cluster.fork();
} else {
  console.log("Worker Process Started...");
  app.listen(3000);
}
