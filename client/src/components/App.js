
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
const [errors, setErrors] = useState(false)

const [name, setName] = useState('')
const [password, setPassword] = useState('')
const [email, setEmail] = useState('')
const [isLoading, setIsLoading] = useState(false);





// checks session id at page load to determine if it should take to login or signup
useEffect(() => {
  fetch("/authorized_user")
  .then((r) => {
    // console.log(r)       console log
    if (r.ok) {
      r.json()
      .then((user) => 
      setCurrentUser(user));
    }
  });
}, []);

console.log(currentUser)


// if (!currentUser) return <Signup updateUser={setCurrentUser} name={name} setName={setName} password={password} setPassword={setPassword} email={email} setEmail={setEmail}/>;



// if (!user) return <Login onLogin={setUser} />;




  return (

    
    <div>
      <NavBar/>
    <>
      <Routes>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/login" element={<Login updateUser={setCurrentUser} name={name} setName={setName} password={password} setPassword={setPassword} email={email} setEmail={setEmail}/>} />
        <Route path="/settings" element={<Settings updateUser={setCurrentUser} />}/>
        <Route path="/" element={<Signup updateUser={setCurrentUser} name={name} setName={setName} password={password} setPassword={setPassword} email={email} setEmail={setEmail}/>}/>
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