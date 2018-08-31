var Plant = require('../models/plant');
var Order = require('../models/order');
var mongoose = require('mongoose');


function index(req,res) {
    Plant.find({}, function(err, plants) {
        if(err) return res.status(400).json(err);
        res.json(plants);
    });
}


function addPlant(req, res) {
    Order.cartForUser(req.user._id, function (cart) {
        cart.addPlant(req.body.plantId, function (cart) {
            res.json(cart);
        });
    });
}

function removePlant(req, res) {
    Order.cartForUser(req.user._id, function (cart) {
        cart.removePlant(req.params.id, function (cart) {
            res.json(cart);
        });
    });
}

function matchPlants (req, res) {

    Plant.find({}, function(err, plant) {
        if(err) return res.status(400).json(err);
        var plants = plant.filter(function(p) {
            return p.maintenance === req.body.maintenance &&
            p.sunlight === req.body.sunlight &&
            p.moisture === req.body.moisture &&
            p.humidity === req.body.humidity &&
            p.size === req.body.size &&
            p.expertiseLevel === req.body.expertiseLevel 
        }) 
        console.log(plants);
        return res.json(plants);
    })
}

module.exports = {
    index,
    addPlant,
    matchPlants,
    removePlant
}
