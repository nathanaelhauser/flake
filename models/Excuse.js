module.exports = (sequelize, Model, DataTypes) => {
    class Excuse extends Model { }

    Excuse.init({
        excuse: DataTypes.STRING(1234),
        severity: DataTypes.INTEGER,
        }, { sequelize, modelName: 'excuse' })

    return Excuse
}