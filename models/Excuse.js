module.exports = (sequelize, Model, DataTypes) => {
    class Excuse extends Model { }

    Excuse.init({
        theExcuse: DataTypes.STRING(1234),
        severity: DataTypes.INTEGER,
        used: DataTypes.BOOLEAN
        }, { sequelize, modelName: 'excuse' })

    return Excuse
}