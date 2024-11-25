const express = require('express');
const { postRoom,getAllRoom,getSingleRoom,updateRoomData,deleteRoomData } = require('./room.controller.jsx');
const verifyAdminToken = require('../middleware/verifyAdminToken.js');
const router = express.Router();

router.post('/create-room',verifyAdminToken,postRoom) 

router.get('/',getAllRoom) 

router.get('/:id',getSingleRoom)

router.put('/edit/:id',verifyAdminToken,updateRoomData)
router.delete('/:id',verifyAdminToken,deleteRoomData)

module.exports = router;