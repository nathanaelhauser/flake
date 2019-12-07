const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

// table variables, require statement, (sequelize, Model, DataTypes)
const Excuse = require('./Excuse.js')(sequelize, Model, DataTypes)
const Event = require('./Event.js')(sequelize, Model, DataTypes)
const User = require('./User.js')(sequelize, Model, DataTypes)

// associations
User.hasMany(Event, {
  foreignKey: 'google_id'
})
Event.belongsTo(User, {
  foreignKey: 'google_id',
  as: 'user_id'
})

Excuse.hasMany(Event, {
  foreignKey: 'id'
})
Event.belongsTo(Excuse, {
  foreignKey: 'id',
  as: 'excuse_id'
})

// module.exports = { table variables }
module.exports = { Excuse, Event, User }