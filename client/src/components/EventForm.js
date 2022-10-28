// import Lists from "./Lists"
import React, {useState} from "react"

export default function EventForm({onAddEvent, handleAddList, currentUser}){
    // Need to fill out a form and submit the following:
    // eventtype, name, day, month, with details of the event being sent to lists backend with associated user and event
    const [name, setName] = useState("");
    // const [eventType, setEventType] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [details, setDetails] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          name: name,
          start: start,
          end: end,
          
        }),
      })
        .then((r) => r.json())
        .then((newEvent) => {
        console.log(newEvent)
        onAddEvent(newEvent)});

      //   fetch("http://localhost:3000/lists", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     user_id: currentUser.id,
      //     event_id: event_id,
      //     details: details,
          
      //   }),
      // })
      //   .then((r) => r.json())
      //   .then((newList) => {
      //   console.log(newList)
      //   onAddList(newList)});


        
    }




return(
  <>
    <h3> Add an Event!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="details"
          placeholder="Event Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        {/* <input
          type="text"
          name="event-type"
          placeholder="Event type"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        /> */}
        <input
          type="text"
          name="start"
          placeholder="Start"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <input
          type="text"
          name="end"
          placeholder="End"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </>
  )
}