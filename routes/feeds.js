const express = require('express');
const feedController = require('../controllers/feeds');

const router = express.Router();

router.get('/posts', feedController.getPosts);
router.post('/post', feedController.createPost);

module.exports = router;