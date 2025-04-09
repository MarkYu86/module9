"use strict";
let Models = require("../models"); 

const getLikes = (res) => {
    Models.Like.find({}).populate('userId').populate('postId')
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    });
};

const addLike = (data, res) => {
    new Models.Like(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    });
};

module.exports = {
    getLikes,
    addLike
};