const express = require('express')
const path = require('path')

const friendsRouter = require('./router/friends.router')
const messagesRouter = require('./router/messages.router')

const PORT = 3000

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Node',
    caption: 'Node App'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Node',
    about: 'This is about'
  })
})

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
