import React from "react";
import TodoNote from "../components/TodoNote";
//noteidea: might have draggable kanband board features, stil thinking
const NoteList = () => {
  return (
    <div className="NoteListContainer">
      <h3 className="todoIcon">
      📝Todo
        <TodoNote />
      </h3>
      <h3 className="inprogressIcon">
      ⌛In-progress
        <TodoNote />
      </h3>
      <h3 className="reviewIcon">
      👁️ In Review
        <TodoNote />
      </h3>
      <h3 className="doneIcon">
      ✔️Done
        <TodoNote />
      </h3>
    </div>
  );

  // const [notes, setNotes] = useState([
  //     { // pass data to the array
  // noteId: 1,
  // title: "What needs to be done",
  // date: "27/01/2021"
  // },
  // {
  // noteId: 2,
  // title: "What needs to be done",
  // date: "27/01/2021"
  // },
  // {
  // noteId: 3,
  // title: "What needs to be done",
  // date: "27/01/2021"
  // },
  // ]);

  // return(
  //);
};
export default NoteList;
