const express = require('express');
const { calc, pair, about, user, home } = require('../controllers');
const router = express.Router();

// Rotas são caminhos que o usuário pode utilizar na aplicação WEB
router.get('/user', user);

router.get('/about', about);

router.get('/calc', calc);

// Passagem de parâmetros via URL
router.get('/pair/:num', pair);

router.get('/', home);

module.exports = router;
