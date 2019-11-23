// user id, username

module.exports = (sequelize, Model, DataTypes) => {
    class User extends Model { }

    User.init({
        userId: DataTypes.INTEGER,
        username: DataTypes.STRING,
        }, { sequelize, modelName: 'user' })

    return User
}