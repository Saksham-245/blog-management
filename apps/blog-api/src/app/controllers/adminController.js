const Blog = require('../models/Blog');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const { email, password } = req.body;

    try {
      if (!email || !password) {
        return res.status(400).json({
          message: 'Please fill all the fields',
        });
      }

      User.findOne({ email }).then((user) => {
        if (!user) {
          return res.status(400).json({
            message: 'User does not exist',
          });
        }

        const isMatch = bcrypt.compareSync(password, user?.password);

        if (!isMatch) {
          return res.status(400).json({
            message: 'Invalid password',
          });
        }

        res.status(200).json({
          message: 'User logged in successfully',
          user : {
            id: user.id,
            name: user.firstName + ' ' + user.lastName,
            email: user.email,
          },
        });
      });
    } catch (e) {
      res.status(400).json({
        message: e.message,
      });
    }
  
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({
      message: 'Empty Field',
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  await User.create({
    firstName,
    lastName,
    email,
    password: hash,
  })
    .then(() => {
      res.status(200).json({
        message: 'Signup Successful',
      });
    })
    .catch((e) => {
      console.error(e);
    });
};

const createBlog = async (req, res) => {
  const { blog } = req.body;

  if (!blog) {
    res.status(400).json({
      message: 'Empty Field',
    });
  }

  await Blog.create({
    blog,
  })
    .then((r) => {
      console.log(r);
    })
    .catch((e) => {
      console.error(e);
    });
};

module.exports = {
  login,
  signup,
  createBlog,
};
