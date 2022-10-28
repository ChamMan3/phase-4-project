import React from "react";
import EventCard from "./EventCard";

function EventList({   currentUser, events, onDeleteEvent, onUpdateEvent, handleAddList }) {

  return (
    <ul className="cards">
      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            event={event}
            onDeleteEvent={onDeleteEvent}
            onUpdateEvent={onUpdateEvent}
            currentUser={currentUser}
            handleAddList={handleAddList}
            
          />
        );
      })}
    </ul>
  );
}

export default EventList;