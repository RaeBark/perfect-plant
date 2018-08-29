var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plantSchema = new Schema ({
    name: String,
    plantImage: String,
    scientificName: String,
    price: Number,
    quantityAvail: Number,
    description: String,
    sunlight: {type: String, enum: ['none', 'parsed', 'direct']},
    maintenance: {type: String, enum: ['low', 'medium', 'high']},
    size: {type: String, enum: ['small', 'medium', 'large']},
    moisture: {type: String, enum: ['low', 'medium', 'high']},
    humidity: {type: String, enum: ['dry', 'normal', 'humid']},
    expertiseLevel: {type: String, enum: ['beginner', 'intermediate', 'expert']}
}); 

module.exports = mongoose.model('Plant', plantSchema);