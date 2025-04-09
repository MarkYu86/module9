const express = require('express');
const router = express.Router();
const monsterController = require('../controllers/monsterController');

router.get('/', monsterController.getAllMonsters);  
router.get('/:name', monsterController.getMonsterByName); 

module.exports = router;
