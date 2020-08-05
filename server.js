const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const subscriberRouter = require('./routes/subscriber');

//PORT To listen

PORT = process.env.PORT || 5000;

//connect to db
mongoose.connect(process.env.DB_URL, {dbName: 'subscribers',useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to db"))
.catch(err => console.log(`Could not Connected to db ${process.env.DB_URL} `, err));

//middleware

app.use(express.json());
app.use('/subscribers', subscriberRouter);



//listening to app
app.listen(PORT, () => {
    console.log('Server Started');
});