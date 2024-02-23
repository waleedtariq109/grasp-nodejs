const express = require('express')
const messagesController = require('./controller/messages.controller')
const friendsController = require('./controller/friends.controller')

const PORT = 3000

const app = express()

app.use((req, res, next) => {
  const requestStartTime = Date.now()
  next()
  const delta = Date.now() - requestStartTime
  console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.json())

app.get('/friends', friendsController.getFriends)
app.post('/friends', friendsController.postFriend)
app.get('/friends/:id', friendsController.getFriend)

app.get('/messages', messagesController.getMessages)
app.post('/messages', messagesController.postMessages)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
