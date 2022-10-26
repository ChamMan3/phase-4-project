// import Lists from "./Lists"
import React, {useState} from "react"

export default function EventForm(){
    // Need to fill out a form and submit the following:
    // eventtype, name, day, month, with details of the event being sent to lists backend with associated user and event
    const [name, setName] = useState("");
    const [eventType, setEventType] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
  
    // function handleSubmit(e) {
    //   e.preventDefault();
    //   fetch(" ", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       eventType: eventType,
    //       name: name,
    //       day: day,
    //       month: month,
    //     }),
    //   })
    //     .then((r) => r.json())
    //     .then((newEvent) => onAddEvent(newEvent));
    // }

    // THIS NEEDS TO BE INCLUDED IN FORM WHEN ALL IS SETUP.......onSubmit={handleSubmit}




    return(
    <>
        <h3> Add an Event!</h3>
        <form >
        <input
          type="text"
          name="name"
          placeholder="Event name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="event-type"
          placeholder="Event type"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        />
        <input
          type="number"
          name="day"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(parseInt(e.target.value))}
        />
        <input
          type="number"
          name="month"
          placeholder="Month"
          value={month}
          onChange={(e) => setMonth(parseInt(e.target.value))}
        />
        <button type="submit">Add Event</button>
      </form>
        </>
    )
}