const Blog = require('../models/Blog');

const listBlogs = async (req, res) => {
  await Blog.findAll().then(response => {
    if (response) {
      res.status(200).json({
        blogs: response
      })
    } else {
      res.status(400).json({
        message: 'No blogs found'
      })
    }
  })
}

const getBlogId = async (req, res) => {
  const {id} = req.params;
  await Blog.findOne({
    where: {
      id
    }
  }).then(response => {
    if (response) {
      res.status(200).json({
        blog: response
      })
    } else {
      res.status(400).json({
        message: 'Blog not found'
      })
    }
  })
}

module.exports = {
  listBlogs,
  getBlogId
}
