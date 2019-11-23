const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

// table variables, require statement, (sequelize, Model, DataTypes)
const Excuse = require('./Excuse.js')(sequelize, Model, Datatypes)

// associations if necessary

// module.exports = { table variables }
module.exports = { Excuse }