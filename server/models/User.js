const mongoose = require("mongoose");
const { Schema} = mongoose;

const UserSchema = new Schema({
  name: String,
  email: {
    unique: true,
    type: string,
  },
  password: String,
});


const User = mongoose.model("users", UserSchema);
module.export = User;
