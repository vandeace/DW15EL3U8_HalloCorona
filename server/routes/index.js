const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/auth');
const {
  create: createArticle,
  index: showArticle,
} = require('../controllers/article');

//========MIDDLEWARE=======================
const { protected } = require('../middlewares/auth');

//========USER ACTION=======================
router.post('/login', login);
router.post('/register', register);

//========ARTICLE ACTION=======================
router.post('/article', protected, createArticle);
router.get('/article', showArticle);

module.exports = router;
