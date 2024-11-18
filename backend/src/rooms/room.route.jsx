const express = require('express');
const { postRoom,getAllRoom,getSingleRoom,updateRoomData,deleteRoomData } = require('./room.controller.jsx');
const router = express.Router();

router.post('/create-room',postRoom) 

router.get('/',getAllRoom) 

router.get('/:id',getSingleRoom)

router.put('/edit/:id',updateRoomData)
router.delete('/:id',deleteRoomData)

module.exports = router;