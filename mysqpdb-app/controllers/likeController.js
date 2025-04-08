"use strict";
const Models = require("../models");

const getLikes = (res) => {
  Models.Like.findAll({}).then(data => {
    res.send({ result: 200, data: data });
  }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};

const addLike = (data, res) => {
  Models.Like.create(data).then(data => {
    res.send({ result: 200, data: data });
  }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};
module.exports = {
    getLikes,
    addLike
  };