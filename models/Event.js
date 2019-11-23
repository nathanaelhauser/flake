// user id, excuse id, event

module.exports = (sequelize, Model, DataTypes) => {
    class Event extends Model { }

    Event.init({
        // userId and excuseId pulled from User.js and Excuse.js
        userId: DataTypes.INTEGER,
        excuseId: DataTypes.INTEGER,
        event: DataTypes.STRING
    }, { sequelize, modelName: 'event' })

    return Event
}