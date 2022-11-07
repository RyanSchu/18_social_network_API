const Thought = require('../models/Thought')

module.exports = {
  createReaction(req,res) {
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
  },
  deleteReaction(req,res) {
    Thought.findOneAndUpdate(
      {"reactions._id": req.params.postId},
      {$pull: {reactions: { _id: {$eq : req.params.postId}}}},
      {new: true}
    )
    .then((thought) => 
      !thought
        ? res.status(404).json({ message: 'No reaction with that ID' })
        : res.json(thought)
    )
    .catch((err) =>res.status(500).json(err))
  }
}