const express = require('express');
const { list, signIn, signUp, data } = require('../controllers/user');
const router = express.Router();

router.get('/sign-in', signIn);

router.get('/sign-up', signUp);

router.get('/list', list);

router.get('/data', data);

module.exports = router;
