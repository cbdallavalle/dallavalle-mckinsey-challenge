import React, { Component } from 'react';
import "./Day.css";

export const Day = ({ day, events }) => {
  const eventsToDisplay = events && events.map( event => (<li>{event.name}</li>))
  console.log(events)
  return (
    <div className="Day">
      <h3>{ day }</h3>
      <ul>
        { eventsToDisplay }
      </ul>
    </div>
  )
}