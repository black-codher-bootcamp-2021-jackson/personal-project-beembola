import "../styles/TodoNote.css";
import React, { useState } from 'react';

// https://emojipedia.org/wastebasket/
//stickNote kind of kanban
const TodoNote = () => {
const[addNote ,setAddNote] = useState([
  {
    title: "learn JS",
    // todo: false, 
    // Inprogress:true,
    // InReview: false,
    // Done: false,
  status: 1    
  },
  {
    title: "Do your workout",
    Inprogress: true,
    status: 2    

  },
  {
    title: "Do your workout",
    InReview: true,
    status: 3

  },
  {
    title: "Do your workout",
    Done: false,
    status: 4   

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
  return (
    <div className="NoteSection">
      <span> Personal board </span>
      <div className="Note-takingFooter">
        <date>26/01/2021</date>
        <div className="deleteIcon"  size='1.2em'/>
        <h3>
        ✔️❌🗑️  
          </h3>


          {/* {addNote.map((note, index) =>(
            <addNote 
                    note={note}
                    todo={todo}
                    key={index}
                    /> */}
          {/* )
          )} */}
          set state and map through
            <button className="addBtn">
            +addCards
            </button>
          
        </div>
      </div>
    
  );
};

export default TodoNote;
