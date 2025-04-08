"use strict";
const Models = require("../models");

const getComments = (res) => {
  Models.Comment.findAll({}).then(data => {
    res.send({ result: 200, data: data });
  }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};

const createComment = (data, res) => {
  Models.Comment.create(data).then(data => {
    res.send({ result: 200, data: data });
  }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};

module.exports = {
  getComments,
  createComment
};
