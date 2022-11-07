const Thought = require('../models/Thought')

module.exports = {
  createReaction(req,res) {
    console.log(req.params)
    console.log(req.body)
    Thought.findOneAndUpdate(
      {_id: req.params.postId},
      {$addToSet: {reactions: req.body}},
      {new: true}
    )
    .then((thought) => 
      !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(thought)
    )
    .catch((err) =>res.status(500).json(err))
  }
}