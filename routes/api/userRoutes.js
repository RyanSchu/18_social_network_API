const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser
} = require('../../controllers/userControllers');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser)

module.exports = router;