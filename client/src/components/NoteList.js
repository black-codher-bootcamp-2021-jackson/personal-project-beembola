import React ,  { useEffect}   from "react";
import TodoNote from "../components/TodoNote";
import  {getAllNotes} from '../services/taskServices';
//noteidea: might have draggable kanband board features, stil thinking
const NoteList = () =>  { 
  useEffect( async( )  => {
  const notes = await getAllNotes();
  console.log(notes);
  },[])
  return (
    <div className="NoteListContainer">
      <div className="todoIcon">
      <h3>📝Todo</h3>
        <TodoNote />
        
      </div>
      <div className="inprogressIcon">
      <h3>⌛In-progress </h3>
        <TodoNote />
      </div>
      <div className="reviewIcon">
      <h3>👁️ In Review </h3>
        <TodoNote />
      </div>
      <div className="doneIcon">
      <h3>✔️Done </h3>
        <TodoNote />
      </div>
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
