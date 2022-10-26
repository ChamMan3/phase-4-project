import React, { useEffect, useState } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";

// Maybe have to fetch both events and lists here then combine them into one object
// Need to fetch at app level so everything gets everything it needs


function Events() {
  const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetch("")
//       .then((r) => r.json())
//       .then((eventsArray) => {
//         setEvents(eventsArray);
//       });
//   }, []);

  function handleAddEvent(newEvent) {
    const updatedEventsArray = [...events, newEvent];
    setEvents(updatedEventsArray);
  }

  function handleDeleteEvent(id) {
    const updatedEventsArray = events.filter((event) => event.id !== id);
    setEvents(updatedEventsArray);
  }

  function handleUpdateEvent(updatedEvent) {
    const updatedEventsArray = events.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent;
      } else {
        return event;
      }
    });
    setEvents(updatedEventsArray);
  }

  const displayedEvents = events.filter((event) => {
    return event.name.toLowerCase()
  });

  return (
    <main>
      <EventForm onAddEvent={handleAddEvent} />
      <EventList
        events={displayedEvents}
        onDeleteEvent={handleDeleteEvent}
        onUpdateEvent={handleUpdateEvent}
      />
    </main>
  );
}

export default Events;