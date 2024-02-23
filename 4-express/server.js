const express = require("express");

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Worls");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
