const mongoose = require("mongoose");
const notes = mongoose.model("notes");

const NoteRoute = (app) => {
// created method to get all notes
  app.get(`/`, async (req, res) => {
    const results = await notes.find()
    console.log(results);
    // const profiles = await Profile.find();
    return res.status(200).send(results);
    // return res.status(200).send(profiles);
  });

  app.get(`/api/notes`, async (req, res) => {
    const results = await notes.find()
    console.log(results);
    // const profiles = await Profile.find();
    return res.status(200).send(results);
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

module.exports = NoteRoute;
//https://www.studytonight.com/post/notepad-app-using-nodejs-mongodb-and-express
// https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/