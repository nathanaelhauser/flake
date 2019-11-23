const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

// table variables, require statement, (sequelize, Model, DataTypes)
const Excuse = require('./Excuse.js')(sequelize, Model, Datatypes)
const Event = require('./Event.js')(sequelize, Model, DataTypes)
const User = require('./User.js')(sequelize, Model, DataTypes)

// associations if necessary
User.hasMany(Event)
Event.hasOne(Excuse)

// module.exports = { table variables }
module.exports = { Excuse, Event, User }