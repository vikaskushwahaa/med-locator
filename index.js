const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');


// load env variable
dotenv.config({path : './config/config.env'});

// connet database
connectDB();

const app = express();

//body parser
app.use(express.json());

// enable cors
app.use(cors());

const PORT = process.env.PORT || 7000;



app.get('/',(req , res)=>{
    res.send("Hi  there");
});


//routes
app.use('/api/stores', require('./routes/stores'));
app.use('/api/medicines', require('./routes/medicines'));
app.use('/api/medicineStocks', require('./routes/medicineStocks'));



app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})