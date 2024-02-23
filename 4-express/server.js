const express = require("express");

const PORT = 3000;

const app = express();

const friends = [
  {
    id: 0,
    name: "Ahmed Shabir",
  },
  {
    id: 1,
    name: "Umair Asif",
  },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.get("/friends/:id", (req, res) => {
  const friendsId = req.params?.id;
  const friend = friends[friendsId];

  if (!friend)
    res.status(404).json({
      error: "Friend not found",
    });

  res.status(200).json(friend);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
