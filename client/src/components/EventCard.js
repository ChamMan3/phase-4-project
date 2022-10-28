import React, { useState } from "react";

function EventCard({  currentUser, event, onDeleteEvent, onUpdateEvent, handleAddList }) {
  const { id, eventType, name, start, end } = event;
  
  const [details, setDetails] = useState(false)
  const [updatedStart, setUpdatedStart] = useState("")
  // const [updatedEnd, setUpdatedEnd] = useState("")
 
 


  function handleDeleteClick() {
    fetch(`/events/${id}`, {
      method: "DELETE",
    });

    onDeleteEvent(id);
  }

  function handleUpdateSubmit(e) {
    e.preventDefault();
    fetch(`/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        start : updatedStart,
        
       }),
    })
      .then((r) => r.json())
      .then((updatedEvent) => {
        onUpdateEvent(updatedEvent);
      });
  }

  function addDetails(e){
    e.preventDefault()
  fetch("http://localhost:3000/lists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: currentUser.id,
      event_id: id,
      details: details,
      
    }),
  })
    .then((r) => r.json())
    .then((newList) => {
    console.log(newList)
    handleAddList(newList)});

  }

  return (
    <li className="card">

      <h4>{eventType}</h4>
      <p>{name}</p>
      <p>{start}  {end ? "- " + end : null}</p>
      <button onClick={handleDeleteClick}>Delete</button>
      <form onSubmit={handleUpdateSubmit}>
        <input
          type="text"
          placeholder="let em know whats up"
          value={updatedStart}
          onChange={(e) => setUpdatedStart(e.target.value)}
        />
        <button type="submit">Update Start</button>

      </form>
      <form onSubmit={addDetails}>
      <input
          type="text"
          placeholder= "fill here"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button type="submit">Add Details</button>
        {/* {!details ? <button type="submit">Add Details</button> : null} */}
      </form>
    </li>
  );
}

export default EventCard;