import React from "react";
import EventCard from "./EventCard";

function EventList({ events, onDeleteEvent, onUpdateEvent }) {
  return (
    <ul className="cards">
      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            event={event}
            onDeleteEvent={onDeleteEvent}
            onUpdateEvent={onUpdateEvent}
          />
        );
      })}
    </ul>
  );
}

export default EventList;