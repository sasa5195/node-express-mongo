const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv/config');

const PORT = process.env.PORT || 3000;

//Import routes
const postRoutes = require('./routes/posts');

//Middleware
app.use(bodyparser.json());
app.use("/posts", postRoutes);

//ROUTES
app.get("/", (req, res) => {
    res.send("We are at the home page We are at the home page We are at the home page We are at the home page");
})

mongoose.connect(process.env.DB_CONNECTION_URL,
    { useNewUrlParser: true },
     () => console.log('Connected to DB!'));

// How do we start listening to the server

app.listen(PORT, () => {
    console.log('App is started on Port - ', PORT);
})