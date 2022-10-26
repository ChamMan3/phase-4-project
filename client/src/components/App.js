
import React, { useState } from "react"
import NavBar from "./NavBar"
import Events from "./EventForm"
import Welcome from "./Welcome"
import Settings from "./Settings"
import Calendar from "./Calendar"
import { Route, Routes } from "react-router-dom";


// Need to fetch both lists and events here then combine the lists details with the rest of the associated event
// After this need to pass the combined thing into the calendar so it can be displayed on Calendar and send the set state down the event line
// so that everything can be updated from there and in turn update the displayed events


export default function App() {
const [currentUser, setCurrentUser] = useState(false)




  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/" element={<Welcome user ={currentUser} />} />
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </div>
  );
}