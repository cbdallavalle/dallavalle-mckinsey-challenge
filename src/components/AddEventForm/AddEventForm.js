import React from 'react';
import './AddEventForm.css';

//This event form takes in three functions as parameters.
//Each function returns the event it was called on to the parent component.
export const AddEventForm = ({ addEvent, updateEventName, handleTimeUpdate }) => {
  return (
    <form 
      className="AddEventForm" 
      onSubmit={ (event) => addEvent(event) }
    >
      <label htmlFor="event-name">Event name:</label>
      <input 
        id="event-name" 
        name="eventName"
        placeholder="Name of Event" 
        onChange={ (event) => updateEventName(event) }
      />
      <div className="time-cont">
        <div>
          <label htmlFor="event-name">Start:</label>
          <select 
            name="startTime" 
            onChange={ (event) => handleTimeUpdate(event) } 
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select 
            name="startDay" 
            onChange={ (event) => handleTimeUpdate(event) } 
          >
            <option value="am">am</option>
            <option value="pm">pm</option>
          </select>
        </div>
        <div>
          <label htmlFor="event-name">End:</label>
            <select 
              name="endTime"
              onChange={ (event) => handleTimeUpdate(event) }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select
              name="endDay"
              onChange={ (event) => handleTimeUpdate(event) }
            >
              <option value="am">am</option>
              <option value="pm">pm</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}