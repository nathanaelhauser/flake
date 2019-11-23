// user id, event, excuse id

module.exports = (sequelize, Model, DataTypes) => {
    class Event extends Model { }

    Event.init({
        userId: DataTypes.INTEGER,
        excuseId: DataTypes.INTEGER,
        event: DataTypes.STRING
        }, { sequelize, modelName: 'event' })

    return Event
}