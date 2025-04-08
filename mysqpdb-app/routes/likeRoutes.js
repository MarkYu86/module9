let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
  Controllers.likeController.getLikes(res);
});

router.post('/create', (req, res) => {
  Controllers.likeController.addLike(req.body, res);
});

module.exports = router;
