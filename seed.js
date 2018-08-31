var Plant = require('./models/plant');
var Order = require('./models/order');
var plants = require('./plants');


require('dotenv').config();
require('./config/database');

Promise.all([Plant.remove({}), Order.remove({})]).then(() => {
    Plant.create(plants).then(() => {
        process.exit();
    });
}) 