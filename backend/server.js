const connectDB = require('./config/db');
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/api', (req, res) => {
    // res.json('API is running...');
    
});

const port = process.env.PORT || 8765;
app.listen(port,()=>console.log(`App works in http://localhost:${port}`)
)