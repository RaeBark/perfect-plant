var express = require('express');
var router = express.Router();
var plantsCtrl = require('../../controllers/plants');

/*---------- Public Routes ----------*/
router.get('/', plantsCtrl.index);
router.post('/filter', plantsCtrl.matchPlants);
router.post('/cart', plantsCtrl.addPlant);
router.delete('/cart/:id', plantsCtrl.removePlant);

/*---------- Protected Routes ----------*/





module.exports = router;