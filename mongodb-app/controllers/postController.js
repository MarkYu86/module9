const Models = require("../../models"); // Adjust path as needed

const getUserPosts = (req, res) => {
  // Finds all posts for a user and populates with user details
  Models.Post.find({ userId: req.params.uid })
    .populate({ path: "userId" })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUserPosts,
};
