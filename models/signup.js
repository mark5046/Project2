module.exports = (sequelize, DataTypes) => {

    var Signup = sequelize.define("Signup", {
        
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {}
        }
    })
}