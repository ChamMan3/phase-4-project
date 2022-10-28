
import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
// import Events from "./EventForm"
import Events from "./Events"
import Signup from "./Signup"
import Login from "./Login"
import Settings from "./Settings"
import Calendar from "./Calendar"
import { Route, Routes } from "react-router-dom";


// Need to fetch both lists and events here then combine the lists details with the rest of the associated event
// After this need to pass the combined thing into the calendar so it can be displayed on Calendar and send the set state down the event line
// so that everything can be updated from there and in turn update the displayed events


export default function App() {
const [currentUser, setCurrentUser] = useState(false)
const [events, setEvents] = useState([])
const [lists, setLists] = useState([])
const [errors, setErrors] = useState(false)

const [name, setName] = useState('')
const [password, setPassword] = useState('')
const [email, setEmail] = useState('')


useEffect(() => {
  fetch("/authorized_user")
  .then((r) => {
    // console.log(r)       console log
    if (r.ok) {
      r.json()
      .then((data) => {
      setCurrentUser(data)

      });
    }
  });
}, []);


  return (

    
    <div>
      <NavBar setEvents={setEvents} currentUser={currentUser}/>
      {/* { !currentUser? <Login error={'please login'} updateUser={updateUser} /> : */}
    <>
      <Routes>
        <Route path="/calendar" element={<Calendar events={events}/>}/>
        <Route path="/events" element={<Events setLists={setLists} setEvents={setEvents} lists={lists} events={events} currentUser={currentUser}/> }/>
        <Route path="/login" element={<Login setLists={setLists} updateUser={setCurrentUser} setEvents={setEvents} name={name} setName={setName} password={password} setPassword={setPassword} email={email} setEmail={setEmail}/>} />
        <Route path="/settings" element={<Settings setCurrentUser={setCurrentUser} />}/>
        <Route path="/" element={<Signup setCurrentUser={setCurrentUser} name={name} setName={setName} password={password} setPassword={setPassword} email={email} setEmail={setEmail}/>}/>
      </Routes>
    </>
    </div>
  );
}





// const fetchEvents = () => {
//   fetch('/events')
//   .then(res => {
//     if(res.ok){
//       res.json().then(setEvents)
//     }else {
//       res.json().then(data => setErrors(data.error))
//     }
//   })
// }

  // const updateUser = (currentUser) => setCurrentUser(currentUser)