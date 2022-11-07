const router = require('express').Router();

const {
  getSinglePost,
  getPosts,
  createPost,
  updatePost,
  deletePost
} = require('../../controllers/thoughtControllers');

router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getSinglePost).put(updatePost).delete(deletePost);

module.exports = router;