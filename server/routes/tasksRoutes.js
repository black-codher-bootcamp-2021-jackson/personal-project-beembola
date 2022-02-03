const mongoose = require("mongoose");
const tasks = mongoose.model("notes");

const tasksRoutes = (app) => {

  app.get(`/`, async (req, res) => {
    tasks.find()
    // const profiles = await Profile.find();

    // return res.status(200).send(profiles);
  });

  app.post(`/api/notes`, async (req, res) => {
    // const profile = await Profile.create(req.body);

    // return res.status(201).send({
    //   error: false,
    //   profile,
    // });
  });

  app.put(`/api/notes/:id`, async (req, res) => {
    // const { id } = req.params;

    // const profile = await Profile.findByIdAndUpdate(id, req.body);

    // return res.status(202).send({
    //   error: false,
    //   profile,
    // });
  });

  app.delete(`/api/notes/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const profile = await Profile.findByIdAndDelete(id);

  //   return res.status(202).send({
  //     error: false,
  //     profile,
  //   });
  });
};

module.exports = tasksRoutes;
//https://www.studytonight.com/post/notepad-app-using-nodejs-mongodb-and-express
// https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/