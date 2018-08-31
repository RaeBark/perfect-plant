var express = require('express');
var router = express.Router();
var plantsCtrl = require('../../controllers/plants');

/*---------- Public Routes ----------*/
router.get('/', plantsCtrl.index);
router.post('/filter', checkAuth, plantsCtrl.matchPlants);
router.post('/cart', checkAuth, plantsCtrl.addPlant);
router.delete('/cart/:id', checkAuth, plantsCtrl.removePlant);

/*---------- Protected Routes ----------*/

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
  }



module.exports = router;