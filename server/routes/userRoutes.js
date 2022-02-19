const mongoose = require("mongoose");
// const express = require('body-parser');
// const jwt = require('jsonwebtoken');
//complie schema into model
const User = mongoose.model("User");

const UserRoute = (app) => {
  // created method to get all notes
//api is path of getting information from an external server/resources
  app.get(`/signup`, (req, res) => {

    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });
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
  }
  // app.get(`/`, async (req, res) => {});

  // app.post(`/`, async (req, res) => {});

  // app.delete(`/`, async (req, res) => {});
module.exports = UserRoute;
