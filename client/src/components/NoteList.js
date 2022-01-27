import React from 'react';
import TodoNote from "../components/TodoNote";
const NoteList = () => {
return(
    <div className="NoteListContainer">
         < TodoNote /> 
            
              < TodoNote />
            
              < TodoNote />    </div>
)

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
}
export default NoteList;