import "../styles/TodoNote.css";
import React, { useState } from "react";

// https://emojipedia.org/wastebasket/
//stickNote kind of kanban

const TodoNote = (props) => {
  const [newTask, setNewTask] = useState("");
const [UserId, setUserId] =useState(10);
const [currentDate, setCurrentDate] =useState(new Date());
console.log(currentDate)
  const [addNote, setAddNote] = useState([
    {
      title: "learn JS",
      // todo: false,
      // Inprogress:true,
      // InReview: false,
      // Done: false,
      status: 1,
    },
    {
      title: "Do your workout",
      Inprogress: true,
      status: 2,
    },
    {
      title: "Do your workout",
      InReview: true,
      status: 3,
    },
    {
      title: "Do your workout",
      Done: false,
      status: 4,
    },
  ]);
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
  
  const listItems = props.tasks.map((item, index) =>
    <li key={index}>
      <div><h1>{item.description}</h1>
</div>
    </li>
  );
  

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
        <input
          type="text"
          placeholder="Type your task here"
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
          />
        <button
          className="addBtn"
          onClick={() => {
            setAddNote(addNote.concat({description: newTask,
              userId: UserId,
              status: 0,
              dueDate: new Date(currentDate.getTime() + 86400000 * duration), //using start date to calculate,add 7days to current day
              startDate: currentDate,
              priority: priority
              }));
            console.log(addNote);
          }}
        >
          +addCards
        </button>
      </div>
    </div>
  );
};

export default TodoNote;
