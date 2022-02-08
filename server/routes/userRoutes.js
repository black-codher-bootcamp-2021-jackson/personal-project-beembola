const mongoose = require("mongoose");
const user = mongoose.model("user");

const UserRoute = (app) => {
  // created method to get all notes

  app.get(`/signup`, (req, res) => {
    const newUser = new user({
      email: req.body.email,
      password: req.body.password,
    });

    newUser.save((err) => {
      if (err) {
        return (
          res.status(400),
          json({
            messaage: "error",
            error: "Email in use",
          })
        );
      }
      return res.status(200).json({
        messaage: "user sucessfully added",
      });
    });
  });
  app.get(`/`, async (req, res) => {});

  app.post(`/`, async (req, res) => {});

  app.delete(`/`, async (req, res) => {});
};
module.exports = UserRoute;
