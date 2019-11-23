const Sequelize = require('sequelize')

module.exports = new Sequelize('mysql://root:groot@localhost/flake_db')