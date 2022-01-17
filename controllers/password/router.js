const express = require('express');
const encript = require('./encript');

const router = express.Router({ mergeParams: true });

router.post('/', encript);

module.exports = router;