const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/post-food', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  password:String
});


let foodSchema = new mongoose.Schema({
  numpost:Number,
  name: String,
  description: String,
  booking: Boolean,
});



let userdata = mongoose.model('userdata', userSchema);
let fooddata = mongoose.model('fooddata', foodSchema);




module.exports = {

userdata,
fooddata
}
