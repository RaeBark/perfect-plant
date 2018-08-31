var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  plant: { type: Schema.Types.ObjectId, ref: 'Plant' },
  quantity: { type: Number, default: 1 }
});

var orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [itemSchema],
  paid: { type: Boolean, default: false }
}, {
    timestamps: true
  });

orderSchema.methods.addPlant = function (plantId, cb) {
  var order = this;
  var item = order.items.find(item => item.plant.equals(plantId));
  if (item) {
    item.quantity += 1;
  } else {
    order.items.push({ plant: plantId });
  }
  order.save().then(() => {
    order.populate('items.plant').execPopulate().then(order => cb(order));
  });
}

orderSchema.methods.removePlant = function (plantId, cb) {
  var order = this;
  var item = order.items.find(item => item.plant.equals(plantId));
  if (item.quantity > 1) {
      item.quantity -= 1;
  } else {
      order.items.remove(item._id);
  }
  order.save().then(() => {
      order.populate('items.plant').execPopulate().then(order => cb(order));
  });
} 

orderSchema.statics.cartForUser = function (userId, cb) {
  // 'this' is the Order model
  this.findOne({ paid: false, user: userId }).populate('items.plant')
    .then(order => {
      if (order) return cb(order);
      this.create({ user: userId }).then(order => { return cb(order) });
    })
}

module.exports = mongoose.model('Order', orderSchema);
