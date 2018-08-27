var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plantSchema = new Schema ({
    name: String,
    plant_image: String,
    scientific_name: String,
});