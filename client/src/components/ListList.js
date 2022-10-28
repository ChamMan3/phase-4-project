import React from "react";


function ListList({ lists, displayedEvents, events, onDeleteEvent, onUpdateEvent }) {

  return (
    <ul className="cards">
      {/* {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            event={event}
            lists={lists}
            onDeleteEvent={onDeleteEvent}
            onUpdateEvent={onUpdateEvent}
          />
        );
      })} */}
    </ul>
  );
}

export default ListList;