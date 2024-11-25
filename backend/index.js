const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose');
const port = process.env.PORT || 5000
require('dotenv').config()

app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true,
}))

const roomRoutes = require('./src/rooms/room.route.jsx');
const orderRoutes = require('./src/orders/order.route.jsx');
const userRoutes = require('./src/users/user.route.js');
const adminRoutes = require('./src/stats/admin.stats.js');


app.use("/api/rooms", roomRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);


async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use('/', (req, res) => {
    res.send('Welcome to my server')
  })
}

main().then(() => console.log('Mongdb is connecting')).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})