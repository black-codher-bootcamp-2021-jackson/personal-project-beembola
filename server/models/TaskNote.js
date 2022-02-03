const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: {
    type: "String",
    required: true,
},
description: {
    type: "String",
},
});


const tasks =mongoose.model("notes", TaskSchema);
module.export = tasks

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