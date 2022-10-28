import React, { useState } from "react";

function EventCard({  lists , currentUser, event, onDeleteEvent, onUpdateEvent, handleAddList }) {
  const { id, eventType, name, start, end } = event;
  

  const [updatedStart, setUpdatedStart] = useState("")
  const [updatedEnd, setUpdatedEnd] = useState("")
 
 function showDetails(e) {
  if(lists.event_id===id){
  return lists.details
 }
 }

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
        end : updatedEnd
       }),
    })
      .then((r) => r.json())
      .then((updatedEvent) => {
        onUpdateEvent(updatedEvent);
        
      });
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
        <input
          type="text"
          placeholder="let em know whats down"
          value={updatedEnd}
          onChange={(e) => setUpdatedEnd(e.target.value)}
        />
        <button type="submit">Update Start and End</button>

      </form>
      <button onClick={showDetails}> Show Details </button>
      
    </li>
  );
}

export default EventCard;