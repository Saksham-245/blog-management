const Sequelize = require('sequelize');
const db = require('../db/db');

const Blog = db.define('blog',{
    article: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Blog.sync()

module.exports = Blog;