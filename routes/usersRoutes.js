const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  signup,
  login,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');

router.get('/', getAllUsers);
router.post('/signup', signup);
router.post('/login', login);
router.put('/update', updateUser);
router.delete('/delete', deleteUser);

module.exports = router;
