const { createBlog,login } = require('../controllers/adminController');

const router = require('express').Router();

router.post('/login',login);

router.post('/signup');

router.post('/create-blog',createBlog);

module.exports = router;