const express = require('express');
const passwordEncript = require('../controllers/password/router')

const root = express.Router();

root.use('/encript', passwordEncript)

module.exports = root;