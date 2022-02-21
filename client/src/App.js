import React , {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Header from "./components/Header";
// import Home from "./pages/Home";
import Footer from "./components/Footer";
import WalkThrough from "./pages/WalkThrough";
import Features from "./pages/Features";
import Login from "./pages/Login";
import About from "./components/About";
import Pomodoro from "./components/Pomodoro";
import NoteList from "./components/NoteList";
import { getAllTasks } from "./services/taskServices";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      if (tasks) {
        const response = await getAllTasks();
        // console.log(response)

        setTasks(response);
      }
    }

    getTasks();
  }, [tasks]);


  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <About />
              <NoteList  taskList={tasks}/>

              <Pomodoro />
              <Footer />
            </>
          }
          // element={<Header />}
        />

        <Route
          exact
          path="/WalkThrough"
          element={
            <>
              <WalkThrough />
            </>
          }
        />
        <Route
          exact
          path="/Features"
          element={
            <>
              <Features />
            </>
          }
        />
        <Route
          exact
          path="/Login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// import React, { useState, useEffect } from "react";

// // SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

// function App() {
//   const [profiles, setProfiles] = useState(null);

//   useEffect(() => {
//     async function getProfiles() {
//       if (!profiles) {
//         const response = await getAllProfiles();
//         setProfiles(response);
//       }
//     }

//     getProfiles();
//   }, [profiles]);

//   const renderProfile = (user) => {
//     return (
//       <li key={user._id}>
//         <h3>
//           {`${user.first_name}
//           ${user.last_name}`}
//         </h3>
//         <p>{user.location}</p>
//       </li>
//     );
//   };

//   return (
//     <div>
//       <ul>
//         {profiles && profiles.length > 0 ? (
//           profiles.map((profile) => renderProfile(profile))
//         ) : (
//           <p>No profiles found</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;
