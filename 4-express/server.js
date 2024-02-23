const express = require('express')

const friendsRouter = require('./router/friends.router')
const messagesRouter = require('./router/messages.router')

const PORT = 3000

const app = express()

app.use((req, res, next) => {
  const requestStartTime = Date.now()
  next()
  const delta = Date.now() - requestStartTime
  console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.json())

app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
