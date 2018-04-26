var bcrypt = require("bcrypt-nodejs")

module.exports = (sequelize, DataTypes) => {

    var Creator = sequelize.define("creator", {
        
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [6, 14]
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6, 14]
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

    Creator.associate = (models) => {

        Creator.hasMany(models.Post, {
            onDelete: "CASCADE"
        });
    };

    Creator.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };

      Creator.hook("beforeCreate", function(creator) {
        creator.password = bcrypt.hashSync(creator.password, bcrypt.genSaltSync(10), null);
      });

    return Creator;
}