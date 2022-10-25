import {Sequelize} from 'sequelize';

module.exports = new Sequelize('blogs','root','saksham25@',{
    host: 'localhost',
    dialect: 'mysql'
});