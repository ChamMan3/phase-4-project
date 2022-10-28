import React from "react";
import EventCard from "./EventCard";

function EventList({  lists, currentUser, events, onDeleteEvent, onUpdateEvent, handleAddList }) {
  // console.log(lists)
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
            lists={lists}
            />)})}
 
    </ul> 
);
  
}

export default EventList;