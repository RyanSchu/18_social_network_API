const { Thought } = require('../models')
const User = require('../models/User')

module.exports = {
    createFriend(req,res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends:req.body.id}},
            {new:true}
        )
        .then((user) => 
            !user
                ? res.status(404).json({message:'No user by that ID'})
                : res.json(user)
        )
        .catch((err) =>res.status(500).json(err))
    },
    deleteFriend(req,res) {
        User.findOneAndUpdate(
            {friends: req.params.userId},
            {$pull: {friends: {$eq: req.body.friendId}}},
            {new: true}
        )
        .then((user) => 
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) =>res.status(500).json(err))
    }
}