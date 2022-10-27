
import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Events from "./Events"
import Singup from "./Signup"
import Login from "./Login"
import Settings from "./Settings"
import Calendar from "./Calendar"
import { Route, Routes } from "react-router-dom";


export default function App() {
const [currentUser, setCurrentUser] = useState(false)
const [events, setEvents] = useState([])
const [errors, setErrors] = useState(false)

const [name, setName] = useState('')
const [password, setPassword] = useState('')
const [email, setEmail] = useState('')
const [isLoading, setIsLoading] = useState(false);




// checks session id at page load to determine if it should take to login or signup
useEffect(() => {
  fetch("/authorized_user")
  .then((r) => {
    if (r.ok) {
      r.json()
      .then((data) => 
      setCurrentUser(data));
    }
  });
}, []);


// useEffect(() => {
//   fetch("/authorized_user")
//   .then((res) => {
//     if (res.ok) {
//       res.json()
//       .then((user) => {
//         updateUser(user);


const fetchEvents = () => {
  fetch('/events')
  .then(res => {
    if(res.ok){
      res.json().then(setEvents)
    }else {
      res.json().then(data => setErrors(data.error))
    }
  })
}

  // const updateUser = (currentUser) => setCurrentUser(currentUser)





  return (
    <div>
      <p>Yo</p>
      <NavBar/>
      {/* { !currentUser? <Login error={'please login'} updateUser={updateUser} /> : */}
    <>
      <Routes>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/" element={<Login updateUser={setCurrentUser} name={name} setName={setName} password={password} setPassword={setPassword} email={email} setEmail={setEmail}/>} />
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/signup" element={<Singup setCurrentUser={setCurrentUser} name={name} setName={setName} password={password} setPassword={setPassword} email={email} setEmail={setEmail}/>}/>
      </Routes>
    </>
      {/* } */}
    </div>
  );
}