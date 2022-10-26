import React from "react"
import NavBar from "./NavBar"
import Events from "./Events"
import Welcome from "./Welcome"
import Settings from "./Settings"
import Calendar from "./Calendar"
import { Route, Routes } from "react-router-dom";


export default function App() {

  return (
    <div>
      <p>Yo</p>
      <NavBar/>
      <Routes>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </div>
  );
}