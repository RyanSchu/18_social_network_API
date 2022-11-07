const router = require('express').Router();

const {
  createFriend,
  deleteFriend
} = require('../../controllers/friendControllers');

router.route('/:userId').put(createFriend).delete(deleteFriend);

module.exports = router;