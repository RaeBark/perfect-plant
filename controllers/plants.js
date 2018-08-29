var Plant = require('../models/plant');
var Order = require('../models/order');


function index(req,res) {
    Plant.find({}, function(err, plant) {
        if(err) return res.status(400).json(err);
        res.json(plant);
    });
}


function addPlant(req, res) {
    Order.cartForUser(req.user._id, function (cart) {
        cart.addPlant(req.body.plantId, function (cart) {
            res.json(cart);
        });
    });
}

module.exports = {
    index,
    addPlant
}
