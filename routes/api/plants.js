var express = require('express');
var router = express.Router();
var plantsCtrl = require('../../controllers/plants');

/*---------- Public Routes ----------*/
router.get('/', plantsCtrl.index);
router.post('/cart', plantsCtrl.addPlant);

/*---------- Protected Routes ----------*/





module.exports = router;