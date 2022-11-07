const router = require('express').Router();

const {
  createReaction
} = require('../../controllers/reactionControllers');

router.route('/:postId').put(createReaction);

module.exports = router;