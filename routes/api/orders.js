var express = require('express');
var router = express.Router();
var ordersCtrl = require('../../controllers/orders');

router.get('/cart', checkAuth,  ordersCtrl.getCart);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
  }

module.exports = router; 