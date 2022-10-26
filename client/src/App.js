
import React, { useState } from "react"
import NavBar from "./NavBar"
import Events from "./Events"
import Welcome from "./Welcome"
import Settings from "./Settings"
import { Calendar } from "react-calendar";
import {  Route, Routes } from "react-router-dom";


export default function App() {
const [currentUser, setCurrentUser] = useState(false)




  return (
    <div>
      <p>Yo</p>
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