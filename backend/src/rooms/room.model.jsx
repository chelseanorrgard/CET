const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
  room_type:{
    type:String,
    required:true,
  },
  amenities:{
    type:[String],
    required:true,
  },
  photos:{
    type:String,
    required:true,
  },
  price_per_night:Number,
  createdAt:{
    type:Date,
    default:Date.now,
  }
  

},{
  timestamps:true,
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;