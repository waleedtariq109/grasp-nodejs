const model = require('../models/friends.model')

function getFriends(req, res) {
  res.status(200).json(model)
}

function postFriend(req, res) {
  if (!req.body?.name) {
    res.status(400).json({
      error: 'Missing Friend name'
    })
    return
  }

  const newFriend = {
    id: model.length,
    name: req.body?.name
  }
  model.push(newFriend)
  res.status(200).json(newFriend)
}

function getFriend(req, res) {
  const friendsId = req.params?.id
  const friend = model[friendsId]

  if (!friend)
    res.status(404).json({
      error: 'Friend not found'
    })

  res.status(200).json(friend)
}

module.exports = {
  getFriends,
  postFriend,
  getFriend
}
