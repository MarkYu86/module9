"use strict";
let Models = require("../models"); 

const getComments = (res) => {
    Models.Comment.find({}).populate('userId').populate('postId')
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    });
};

const createComment = (data, res) => {
    new Models.Comment(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    });
};

module.exports = {
    getComments,
    createComment
};
