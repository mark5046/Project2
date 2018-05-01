module.exports = (sequelize, DataTypes) => {

    var Post = sequelize.define("Post", {
        
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
        },

        repo_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        comments: {
            type: DataTypes.TEXT,
            validate: {
                len: [1, 140]
            }
        },

        likes: {
            type: DataTypes.INTEGER
        },

    });

    return Post;
}