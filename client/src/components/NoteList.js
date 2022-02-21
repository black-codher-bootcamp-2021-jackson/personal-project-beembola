import React, { useEffect } from "react";
import TodoNote from "../components/TodoNote";
import axios from "axios";

// import  {getAllTasks} from '../services/taskServices';
//noteidea: might have draggable kanband board features, stil thinking
const NoteList = (props) => {
  //   useEffect( async( )  => {
  //   const notes = await getAllNotes();
  //   console.log(notes);
  //   },[])
  const submitObjectToCompleted = (id) => {
    axios({
      method: "POST",
      data: {},
      withCredentials: true,
      url: "http://localhost:8080/api/completed/" + id,
    }).then((res) => console.log(res));
  };

  const listItemsInprogress = props.taskList.map((item, index) => {
    if (item.status === 1) {
      console.log(item.status);

      return (
        <li key={index}>
          <div>
            <h1>{item.description}</h1>
            <button
              onClick={() => {
                submitObjectToCompleted(item._id);
              }}
            >
              completed
            </button>
          </div>
        </li>
      );
    }
  });
  const listItemscompleted = props.taskList.map((item, index) => {
    if (item.status === 2) {
      console.log(item.status);

      return (
        <li key={index}>
          <div>
            <h1>{item.description}</h1>
          </div>
        </li>
      );
    }
  });
  return (
    <div className="NoteListContainer">
      <div className="todoIcon">
        <h3>📝Todo</h3>
        <TodoNote tasks={props.taskList} />
      </div>
      <div className="inprogressIcon">
        <h3>⌛In-progress </h3>
        <ul>{listItemsInprogress}</ul>
      </div>
      <div className="doneIcon">
        <h3>✔️Done </h3>
        <ul>{listItemscompleted}</ul>
      </div>
    </div>
  );
  //notelist - board

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
