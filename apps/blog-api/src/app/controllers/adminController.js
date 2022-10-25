const Blog = require("../models/Blog");
const User = require("../models/User");
const bcrypt = require('bcrypt');


const login = async(req,res) => {
  const {email,password} = req.body;

  if(!email || !password){
    res.status(400).json({
      message: 'Empty Field'
    })
  }

  await User.findOne({
    where: {
      email
    }
  }).then(r => {
    if(r){
      bcrypt.compare(password,r.password).then(r => {
        if(r){
          res.status(200).json({
            message: 'Login Successful'
          })
        }else{
          res.status(400).json({
            message: 'Invalid Password'
          })
        }
      })
    }else{
      res.status(400).json({
        message: 'Invalid Email'
      })
    }
  })
}

const signup = async (req,res) => {
  const {name,email,password} = req.body;

  if(!name || !email || !password){
    res.status(400).json({
      message: 'Empty Field'
    })
  }
}

const createBlog = async (req, res) => {
  const {blog} = req.body;

  if (!blog) {
    res.status(400).json({
      message: 'Empty Field'
    })
  }

  await Blog.create({
    blog
  }).then(r => {
    console.log(r)
  }).catch(e => {
    console.error(e)
  })
};

module.exports = {
  login,
  signup,
  createBlog,
}
