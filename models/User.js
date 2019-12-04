// user id, username

module.exports = (sequelize, Model, DataTypes) => {
    class User extends Model { }

    User.init({
        // user id automatically generated
        username: DataTypes.STRING,
        google_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        picture: DataTypes.STRING,
        access_token: DataTypes.STRING,
        refresh_token: DataTypes.STRING,
        id_token: DataTypes.STRING(1200),
        expiry_date: DataTypes.STRING,
    }, { sequelize, modelName: 'user' })

    return User
}