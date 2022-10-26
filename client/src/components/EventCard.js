import React, { useState } from "react";

function EventCard({ event, onDeleteEvent, onUpdateEvent }) {
  const { id, eventType, name, day, month } = event;

  const [updatedDetails, setUpdatedDetails] = useState(details)
 
  


  function handleDeleteClick() {
    fetch(`${id}`, {
      method: "DELETE",
    });

    onDeleteEvent(id);
  }

  function handleUpdateSubmit(e) {
    e.preventDefault();
    fetch(`${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ details: updatedDetails }),
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
      <p>{month} : {day}</p>
      <button onClick={handleDeleteClick}>Delete</button>
      <form onSubmit={handleUpdateSubmit}>
        <input
          type="text"
          placeholder="let em know whats up"
          value={updatedDetails}
          onChange={(e) => setUpdatedDetails(e.target.value)}
        />
        <button type="submit">Update Details</button>
      </form>
    </li>
  );
}

export default EventCard;