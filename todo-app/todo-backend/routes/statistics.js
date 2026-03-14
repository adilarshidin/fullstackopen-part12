const express = require('express');
const router = express.Router();
const redis = require('../redis');

router.get('/', async (req, res) => {
  res.json({ added_todos: Number(await redis.getAsync('todosCounter')) })
});

module.exports = router;
