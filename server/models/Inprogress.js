const mongoose = require("mongoose");
const { Schema } = mongoose;

const InprogressSchema = new Schema({

description:String,
userId: String,
status : Number,
dueDate: Date,
startDate :Date,
priority :Number
});

//Task Schema or Document structure
const Inprogress =mongoose.model("inprogress", InprogressSchema);

module.export = Inprogress
