import React, { Component } from 'react';
import { AddEventForm } from '../AddEventForm/AddEventForm';
import "./Day.css";

class Day extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      displayForm: false,
      displayInfo: false,
      eventName: '',
      startTime: '1',
      startDay: 'am',
      endTime: '1',
      endDay: 'am'
    }
  }

// Controls whether or not the add event form should be displayed. This is
  // run on the click of a day.
  displayEventForm = () => {
    this.setState({ displayForm: true})
  }

//When the event form is submitted, this function does three things: First, it 
  // prevents the default form behavior. 
// Second, it checks whether or not a name
  // for the event was provided. If so, the event name, start time, and end time
  // are saved within an object and pushed into the events array. If no name was 
  // provided, then the events array is left unaltered.
// Third, state is set to reset the form data and update the events, if any update
  // was required
  addEvent = (e) => {
    e.preventDefault();
    const events = this.state.events;

    if (this.state.eventName !== '') {
      const event = {
        name: this.state.eventName,
        startTime: `${this.state.startTime}:00 ${this.state.startDay}`,
        endTime: `${this.state.endTime}:00 ${this.state.endDay}`,
        id: Date.now()
      };

      events.push(event)  
    }
    
    this.setState({    
      events,   
      displayForm: false,
      eventName: '',
      startTime: '1',
      startDay: 'am',
      endTime: '1',
      endDay: 'am'
    });
  }

// Updates the event name in state.
  updateEventName = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

// Updates the startTime/Day endTime/Day in state
  handleTimeUpdate = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

// This is the beginning of my work to display the event information. This function would
  // be called on the click of an event. Since I structured the html for each event
  // to store its id as an html id, I loop over the current events in state to find
  // the one that matches the id of the clicked on event.

  // displayEventInfo = async(e) => {
  //   await this.setState({displayForm: false, displayInfo: true})
  //   const events = this.state.events;
  //   const foundEvent = events.find( event => {
  //     return parseInt(e.target.id) === event.id
  //   });
  // }

//addform determines whether or not to display the AddEventForm
  addForm = () => {
    return this.state.displayForm ?
      <AddEventForm
        addEvent={ this.addEvent }
        updateEventName={ this.updateEventName }
        handleTimeUpdate={ this.handleTimeUpdate }
      />
      :
      <div>
      </div>
  }

//holidaysToDisplay adds an li tag for any holiday it was passed
  holidaysToDisplay = () => {
    return this.props.holidays && 
      this.props.holidays.map( (holiday, index) => (
        <li 
          className="holidays" 
          key={ index }
        >
          {holiday.name}
        </li>
      )
    )
  }

//holidaysToDisplay adds an li tag for any event is contained within state
  eventsToDisplay = () => {
    return this.state.events.map( (event, index) => ( 
      <li 
        className="event" 
        key={ index } 
        id={event.id} 
        onClick={ this.displayEventInfo }
      >
        <span id={event.id}>
          { event.name }
        </span>
      </li>
    ))
  }

  render() {    
    return (
      <div 
        className="Day"
        onClick={ this.displayEventForm }
      >
        <h3>{ this.props.day }</h3>
        <ul>
          { this.holidaysToDisplay() }
          { this.eventsToDisplay() }
          { this.addForm() }
        </ul>
      </div>
    )
  }
}

export default Day;