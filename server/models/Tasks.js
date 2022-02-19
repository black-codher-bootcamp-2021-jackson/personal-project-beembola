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


//   [uuid()]: {
// name: 'In progress'
// },
// };
// 3. Four// {
//   [uuid()]: {
// name: 'Todo'
// },
// { routes (`GET`, `POST`, `UPDATE` and `DELETE` requests)

//https://betterprogramming.pub/build-a-notes-app-with-google-authentication-in-node-js-e0c3dea761e1