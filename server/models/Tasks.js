const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({

description:String,
userId: String,
status : int,
dueDate: date,
startDate :date,
priority :int
});


const Task =mongoose.model("tasks", TaskSchema);
module.export = Task

// {
//   [uuid()]: {
// name: 'Todo'
// },
// {
//   [uuid()]: {
// name: 'In progress'
// },
// };
// 3. Four routes (`GET`, `POST`, `UPDATE` and `DELETE` requests)

//https://betterprogramming.pub/build-a-notes-app-with-google-authentication-in-node-js-e0c3dea761e1