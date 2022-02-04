require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

// IMPORT YOUR SCHEMAS HERE
const apiRout = require("./models/Notes"); //This is just an example. Don't forget to delete this

const app = express();

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true, //using useNewUrlparserwont ge duplication error
});

app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('Hello world!')
// )
const task = require("./routes/tasksRoutes")(app); 

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
