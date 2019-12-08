// user id, excuse id, event

module.exports = (sequelize, Model, DataTypes) => {
    class Event extends Model { }

    Event.init({
        // userId and excuseId pulled from User.js and Excuse.js
        // ^ works with associations in models/index.js
        // userId: DataTypes.INTEGER,
        // excuseId: DataTypes.INTEGER,
        event: DataTypes.STRING,
        start: DataTypes.STRING,
        end: DataTypes.STRING,
        calendar_id: DataTypes.STRING
    }, { sequelize, modelName: 'event' })

    return Event
}