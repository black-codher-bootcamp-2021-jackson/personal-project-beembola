const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({

description:String,
userId: String,
status : Number,
dueDate: Date,
startDate :Date,
priority :Number
});

//Task Schema or Document structure
const Task =mongoose.model("tasks", TaskSchema);
module.export = Task


