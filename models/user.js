var bcrypt = require("bcrypt-nodejs");

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

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
      
      User.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });

    return User;
}