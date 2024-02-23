const express = require('express');

const PORT = 3000;

const app = express();

const friends = [
  {
    id: 0,
    name: 'Ahmed Shabir'
  },
  {
    id: 1,
    name: 'Umair Asif'
  }
];

app.use((req, res, next) => {
  const requestStartTime = Date.now();
  next();
  const delta = Date.now() - requestStartTime;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
  if (!req.body?.name) {
    res.status(400).json({
      error: 'Missing Friend name'
    });
    return;
  }

  const newFriend = {
    id: friends.length,
    name: req.body?.name
  };
  friends.push(newFriend);
  res.status(200).json(newFriend);
});

app.get('/friends/:id', (req, res) => {
  const friendsId = req.params?.id;
  const friend = friends[friendsId];

  if (!friend)
    res.status(404).json({
      error: 'Friend not found'
    });

  res.status(200).json(friend);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
