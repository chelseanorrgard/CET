const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  price:Number,
  createdAt:{
    type:Date,
    default:Date.now,
  }
  

},{
  timestamps:true,
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;