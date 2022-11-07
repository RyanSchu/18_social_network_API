const { User, Thought } = require('../models');

module.exports = {
  getPosts(req, res) {
    Thought.find()
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json(err));
  },
  getSinglePost(req, res) {
    Thought.findOne({ _id: req.params.postId })
      .then((post) =>
        !post
          ? res.status(404).json({ message: 'No post with that ID' })
          : res.json(post)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new post
  createPost(req, res) {
    Thought.create(req.body)
      .then((post) => {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: post._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Post created, but found no user with that ID' })
          : res.json('Created the post 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update a thought
};
