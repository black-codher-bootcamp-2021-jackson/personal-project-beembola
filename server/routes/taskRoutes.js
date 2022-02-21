const mongoose = require("mongoose");
const Tasks = mongoose.model("tasks");

// const inprogress = mongoose.model("inprogress");
const inprogress = require("../models/Inprogress");
const cors = require("cors");
const TaskRoute = (app) => {
  // created method to get all notes
  // app.get(`/`, async (req, res) => {
  //   const results = await notes.find()
  //   console.log(results);
  //   // const profiles = await Profile.find();
  //   return res.status(200).send(results);
  //   // return res.status(200).send(profiles);
  // });
  //midddleware for CORS
  app.use(cors({ origin: "http://localhost:3000", credentials: true }));

  app.get(`/api/tasks`, async (req, res) => {
    const tasks = await Tasks.find();
    // const profiles = await Profile.find();
    return res.status(200).send(tasks);
  });

  app.get(`/api/inprogress`, async (req, res) => {
    const tasks = await inprogress.find();
    // const profiles = await Profile.find();
    return res.status(200).send(tasks);
  });
  //findtask by id
  //

  app.post(`/api/tasks`, (req, res) => {
    const task = Tasks.create(req.body);
    return res.status(201).send({
      error: false,
      task,
    });
  });
  app.put(`/api/tasks`, async (req, res) => {
    const task = await Tasks.findOneAndUpdate(req.body);

    return res.status(202).send({
      error: false,
      task,


    });
  });
//Todo: find how update the status of the object 
//

  app.post(`/api/inprogress`, (req, res) => {
    const task = new inprogress({
      description: req.body.description,
      userId: req.body.userId,
      status: req.body.status,
      dueDate: req.body.dueDate,
      startDate: req.body.startDate,
      prority: req.body.prority,
    });
    task.save();

    return res.status(201).send({
      error: false,
      task,
    });
  });

  // const profile = await Profile.create(req.body);

  // return res.status(201).send({
  //   error: false,
  //   profile,
  // });

  app.put(`/api/task/:id`, async (req, res) => {
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

module.exports = TaskRoute;
//https://www.studytonight.com/post/notepad-app-using-nodejs-mongodb-and-express
// https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
