var Plant = require('./models/plant');
var plants = require('./plants');


require('dotenv').config();
require('./config/database');

Plant.remove({}).then(() => {
    Plant.create(plants).then(() => {
        process.exit();
    });
}) 