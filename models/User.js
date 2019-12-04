// user id, username

module.exports = (sequelize, Model, DataTypes) => {
    class User extends Model { }

    User.init({
        // user id automatically generated
        username: DataTypes.STRING,
        accessToken: DataTypes.STRING,
        refreshToken: DataTypes.STRING
    }, { sequelize, modelName: 'user' })

    return User
}