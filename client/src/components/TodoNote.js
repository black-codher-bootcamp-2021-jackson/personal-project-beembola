import React from "react";
import "../styles/TodoNote.css";
// import { AiFillDelete } from "react-icons/fa";
// https://react-icons.github.io/react-icons
//stickNote kind of kanban
const TodoNote = () => {
  return (
    <div className="NoteSection">
      <span> Personal board </span>
      <div className="Note-takingFooter">
        <date>26/01/2021</date>
        {/* <div className="deleteIcon"  size='1.2em'/>
        <h3>
          <AiFillDelete />
          </h3> */}
        </div>
      </div>
    
  );
};

export default TodoNote;
