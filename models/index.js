const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

// table variables, require statement, (sequelize, Model, DataTypes)
const Excuse = require('./Excuse.js')(sequelize, Model, DataTypes)
const Event = require('./Event.js')(sequelize, Model, DataTypes)
const User = require('./User.js')(sequelize, Model, DataTypes)

// associations
User.hasMany(Event, {
  foreignKey: {
    name: 'user_id',
    type: DataTypes.STRING
  },
  sourceKey: 'google_id'
})
Event.belongsTo(User, {
  foreignKey: {
    name: 'user_id',
    type: DataTypes.STRING
  },
  sourceKey: 'google_id'
})

Excuse.hasMany(Event, {
  foreignKey: 'excuse_id',
  sourceKey: 'id'
})
Event.belongsTo(Excuse, {
  foreignKey: 'excuse_id',
  sourceKey: 'id'
})

// module.exports = { table variables }
module.exports = { Excuse, Event, User }