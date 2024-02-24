const express = require('express')
const path = require('path')

const friendsRouter = require('./router/friends.router')
const messagesRouter = require('./router/messages.router')

const PORT = 3000

const app = express()

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
