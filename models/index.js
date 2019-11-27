const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

// table variables, require statement, (sequelize, Model, DataTypes)
const Excuse = require('./Excuse.js')(sequelize, Model, DataTypes)
const Event = require('./Event.js')(sequelize, Model, DataTypes)
const User = require('./User.js')(sequelize, Model, DataTypes)

// associations
User.hasMany(Event)
Event.belongsTo(User)

Event.hasOne(Excuse)
Excuse.belongsTo(Event)

// module.exports = { table variables }
module.exports = { Excuse, Event, User }