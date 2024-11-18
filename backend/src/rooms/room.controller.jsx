const Room = require('./room.model.jsx');

const postRoom =  async(req,res) =>{
  try {
    const newRoom = await Room({...req.body});
    await newRoom.save();
    res.status(200).send({message: "Room posted successfully",room: newRoom})
  } catch (error) {
    console.error("Error creating room",error)
    res.status(500).send({message: "Room posted Failed",error})
  } 
}

const getAllRoom =  async(req,res) =>{
  try {
    const rooms = await Room.find().sort({createdAt: -1});
    res.status(200).send(rooms)
  } catch (error) {
    console.error("Error fetching room",error)
    res.status(500).send({message: "Room fetch Failed",error})
  } 
}

const getSingleRoom =  async(req,res) =>{
  try {
    const {id} = req.params;
    const room = await Room.findById(id);
    if(!room) {
      res.status(404).send({message: "Room not found"})
    }
    res.status(200).send(room)
  } catch (error) {
    console.error("Error fetching room",error)
    res.status(500).send({message: "Room fetch Failed",error})
  } 
}

const updateRoomData =  async(req,res) =>{
  try {
    const {id} = req.params;
    const updateRoom = await Room.findByIdAndUpdate(id,req.body,{new:true});
    if(!updateRoom){
      res.status(404).send({message: "Room not found"})
    }
    
    res.status(200).send({message: "Room updated successfully",room: updateRoom})
  } catch (error) {
    console.error("Error update room",error)
    res.status(500).send({message: "Room update Failed",error})
  } 
}

const deleteRoomData =  async(req,res) =>{
  try {
    const {id} = req.params;
    const deleteRoom = await Room.findByIdAndDelete(id);
    if(!deleteRoom){
      res.status(404).send({message: "Room not found"})
    }
    
    res.status(200).send({message: "Room delete successfully",room: deleteRoom})
  } catch (error) {
    console.error("Error delete room",error)
    res.status(500).send({message: "Room delete Failed",error})
  } 
}
module.exports = {
  postRoom,
  getAllRoom,
  getSingleRoom,
  updateRoomData,
  deleteRoomData,
}