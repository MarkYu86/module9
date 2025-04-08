'use strict';
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Like = require('./like');

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);
User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Like);
Like.belongsTo(Post);
User.hasMany(Like);
Like.belongsTo(User);

async function init() {
    try {
        await User.sync();
        await Post.sync();
        await Comment.sync();
        await Like.sync();
        console.log("Models synchronized successfully.");
    } catch (error) {
        console.error("Error syncing models:", error);
    }
}

init();

module.exports = {
    User,
    Post,
    Comment,
    Like
};
