const router = require('express').Router();

const {
  createReaction,
  deleteReaction
} = require('../../controllers/reactionControllers');

router.route('/:postId').put(createReaction).delete(deleteReaction);

module.exports = router;