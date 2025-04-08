let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// GET all likes
router.get("/", (req, res) => {
   Controllers.likeController.getLikes(res);
});

// POST create a new like
router.post("/create", (req, res) => {
   Controllers.likeController.createLike(req.body, res);
});

// DELETE a like by ID
router.delete("/:id", (req, res) => {
   Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
