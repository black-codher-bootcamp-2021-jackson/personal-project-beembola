import "../styles/TodoNote.css";
import React, { useState } from "react";
import axios from "axios";
// https://emojipedia.org/wastebasket/
//stickNote kind of kanban
//asios is a js library used to make HTTP requests from node.js from the browser
const TodoNote = (props) => {
  const [newTask, setNewTask] = useState("");
  const [UserId, setUserId] = useState(10);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [duration, setDuration] = useState(0);
  const [priority, setPriority] = useState("");

  const [addNote, setAddNote] = useState({});

  const submitObjectToTasks = () => {
    console.log("function has started");
    axios({
      method: "POST",
      data: {
        description: newTask,
        userId: UserId,
        status: 0,
        dueDate: new Date(currentDate.getTime() + 86400000 * duration), //using start date to calculate,add 7days to current day
        startDate: currentDate,
        priority: priority,
      },
      withCredentials: true,
      url: "http://localhost:8080/api/tasks",
    }).then((res) => console.log(res));
    console.log("function ended");
  };

  const submitObjectToInprogress = () => {
    console.log("function has started");
    axios({
      method: "POST",
      data: {
        description: newTask,
        userId: UserId,
        status: 0,
        dueDate: new Date(currentDate.getTime() + 86400000 * duration), //using start date to calculate,add 7days to current day
        startDate: currentDate,
        priority: priority,
      },
      withCredentials: true,
      url: "http://localhost:8080/api/inprogress",
    }).then((res) => console.log(res));
    console.log("function ended");
  };
  // const [addNote, setAddNote] = useState([
  //   {
  //     title: "learn JS",
  //     // todo: false,
  //     // Inprogress:true,
  //     // InReview: false,
  //     // Done: false,
  //     status: 1,
  //   },
  //   {
  //     title: "Do your workout",
  //     Inprogress: true,
  //     status: 2,
  //   },
  //   {
  //     title: "Do your workout",
  //     InReview: true,
  //     status: 3,
  //   },
  //   {
  //     title: "Do your workout",
  //     Done: false,
  //     status: 4,
  //   },
  // ]);
  //notelist =
  //list component
  // const addNewTodo = title =>{
  //   const addNewNotes = [...addNote, {title, todo: true }];
  //   setAddNote(addNewNotes);
  // }

  // const addInprogress = title =>{
  //   const addNewNotes = [...addNote, {title, Inprogress: true }];
  //   setAddNote(addNewInProgress);
  // }

  // const addInReview = index =>{
  //   const addNewNotes = [...addNote, {title, InReview: true }];
  //   setAddNote(addInReview);
  // }

  // const addRemoveNote = index =>{
  //   const addNewNotes = [...addNote, {title, InReview: true }];
  //   addNewNotes.splice(index, 1);
  //   setAddNote(addRemoveNote);
  // }

  const listItems = props.tasks.map((item, index) => (
    <li key={index}>
      <div>
        <h1>{item.description}</h1>

        <button
          onClick={() => {
            setNewTask(item.description);
            setUserId(item.userId);
            setPriority(item.priority);
            submitObjectToInprogress();
          }}
        >
          startProject
        </button>
      </div>
    </li>
  ));

  return (
    <div className="NoteSection">
      <span> Personal board </span>
      <ul>{listItems}</ul>
      <div className="Note-takingFooter">
        <date>26/01/2021</date>
        <div className="deleteIcon" size="1.2em" />
        <h3>✔️❌🗑️</h3>
        {/* {addNote.map((note, index) =>(
            <addNote 
                    note={note}
                    todo={todo}
                    key={index}
                    /> */}
        {/* )
          )} */}
        set state and map through
        <input
          type="text"
          placeholder="Type your task here"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="days">
          How many days would you be working on this project?
        </label>
        <input
          type="number"
          id="days"
          placeholder="How many days"
          value={duration}
          min={0}
          onChange={(event) => {
            setDuration(event.target.value);
          }}
        />
        <label htmlFor="priority">Set the priority level for this task:</label>
        <select
          name="priority"
          id="priority"
          onChange={(event) => {
            setPriority(event.target.value);
          }}
        >
          <option value="important and urgent">Important and urgent</option>
          <option value="important but not urgent">
            Important but not urgent
          </option>
          <option value="not important but urgent">
            Not important but urgent
          </option>
          <option value="not important and not urgent">
            Not important and not urgent
          </option>
        </select>
        <button
          className="addBtn"
          onClick={() => {
            submitObjectToTasks();
          }}
        >
          +addCards
        </button>
      </div>
    </div>
  );
};

export default TodoNote;
