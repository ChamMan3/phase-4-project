import React, { useEffect, useState } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import ListList from "./ListList"
// Maybe have to fetch both events and lists here then combine them into one object
// Need to fetch at app level so everything gets everything it needs


function Events({ lists, setEvents, currentUser, events, setLists}) {

  function handleAddEvent(newEvent) {
    const updatedEventsArray = [...currentUser.events, newEvent];
    setEvents(updatedEventsArray);
  }

  function handleAddList(newList) {
    const updatedListsArray = [...currentUser.lists, newList];
    setLists(updatedListsArray);
  }

  function handleDeleteEvent(id) {
    const updatedEventsArray = currentUser.events.filter((event) => event.id !== id);
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



  return (
    <main>
      <EventForm onAddEvent={handleAddEvent} currentUser={currentUser} onAddList={handleAddList} />
      <EventList
        events={events}
        onDeleteEvent={handleDeleteEvent}
        onUpdateEvent={handleUpdateEvent}
        currentUser={currentUser}
        handleAddList={handleAddList}
        lists={lists}
      />
    <ListList lists={lists}/>
    </main>
  );
}

export default Events;