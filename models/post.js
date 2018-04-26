module.exports = (sequelize, DataTypes) => {

    var Post = sequelize.define("post", {
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },

        description: {
            type: DataTypes.TEXT,
        },

        category: {
            type: DataTypes.STRING,
            allowNull: false
        },

        comments: {
            type: DataTypes.TEXT,
            validate: {
                len: [1, 140]
            }
        },

        likes: {
            type: DataTypes.INTEGER
        }

    });

    Post.associate = (models) => {
        Post.belongsTo(models.Creator, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Post;
}