const router = require('express').Router();

const {
  getSinglePost,
  getPosts,
  createPost,
  updatePost,
  createReaction
} = require('../../controllers/thoughtControllers');

router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getSinglePost).put(updatePost);

module.exports = router;