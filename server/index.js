require('dotenv').config()
const express = require('express')
const cors = require('cors')
var cookieParser = require('cookie-parser')
const { connectDB } = require('./config/database.js')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true
}))

const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
      app.listen(PORT, () => {
        console.log(`connect at port ${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();