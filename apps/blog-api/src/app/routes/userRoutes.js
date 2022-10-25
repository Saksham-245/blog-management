const {listBlogs,getBlogId} = require("../controllers/userController");

const router = require('express').Router();

router.get('/list-blogs',listBlogs);
router.get('/get-blog/:id',getBlogId);


module.exports = router;
