import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Header from "./components/Header";
// import Home from "./pages/Home";
import Footer from "./components/Footer";
import WalkThrough from "./pages/WalkThrough";
import Features from "./pages/Features"
import Login from "./pages/Login";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Header />
            <Footer />
          </>
        }
        // element={<Header />}

      />

      <Route
        exact
        path="/WalkThrough"
        render={() => (
          <>
            <WalkThrough />
          </>
        )}
      />
      <Route
        exact
        path="/Features"
        render={() => (
          <>
            <Features />
          </>
        )}
      />
      <Route
        exact
        path="/Login"
        render={() => (
          <>
          <Login/>
          </>
        )}
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
