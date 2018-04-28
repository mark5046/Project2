var bcrypt = require("bcrypt-nodejs")

module.exports = (sequelize, DataTypes) => {

    var User = sequelize.define("User", {
        
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [6]
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        profile_pic: {
            type: DataTypes.STRING,
        },

        github_link: {
            type: DataTypes.STRING,
            unique: true
        },

        bio: {
            type: DataTypes.TEXT,
        },

    });

    User.associate = function (models) {

        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return User;
}