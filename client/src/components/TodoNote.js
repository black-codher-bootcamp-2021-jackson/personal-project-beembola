import React from "react";
import "../styles/TodoNote.css";
// https://emojipedia.org/wastebasket/
//stickNote kind of kanban
const TodoNote = () => {
  return (
    <div className="NoteSection">
      <span> Personal board </span>
      <div className="Note-takingFooter">
        <date>26/01/2021</date>
        <div className="deleteIcon"  size='1.2em'/>
        <h3>
        ✔️❌🗑️  
          </h3>
          
            <button className="addBtn">
            +add
            </button>
          
        </div>
      </div>
    
  );
};

export default TodoNote;
