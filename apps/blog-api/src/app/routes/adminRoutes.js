const { createBlog, login, signup } = require("../controllers/adminController");

const router = require("express").Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/create-blog", createBlog);

module.exports = router;
