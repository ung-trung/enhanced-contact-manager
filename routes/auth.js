const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in a user
// @access  Private
router.get('/', (req, res) => res.send('Get a user'));

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Private
router.post('/', (req, res) => res.send('Log in user'));

module.exports = router;
