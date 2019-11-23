// excuse id, excuse, severity

module.exports = (sequelize, Model, DataTypes) => {
    class Excuse extends Model { }

    Excuse.init({
        // excuse id automatically generated
        excuse: DataTypes.STRING(1234),
        severity: DataTypes.INTEGER,
    }, { sequelize, modelName: 'excuse' })

    return Excuse
}