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

  displayEventForm = () => {
    this.setState({ displayForm: true})
  }

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

  updateEventName = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleTimeUpdate = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // displayEventInfo = async(e) => {
  //   await this.setState({displayForm: false, displayInfo: true})
  //   const events = this.state.events;
  //   const foundEvent = events.find( event => {
  //     return parseInt(e.target.id) === event.id
  //   });
  // }

  // displayInfoForm = () => {
  //   return this.state.displayInfo ? 
  // }

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

  render() {
    const holidaysToDisplay = this.props.holidays && 
      this.props.holidays.map( (holiday, index) => (
        <li 
          className="holidays" 
          key={ index }
        >
          {holiday.name}
        </li>
      )
    )
    const events = this.state.events.map( (event, index) => ( 
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
    
    return (
      <div 
        className="Day"
        onClick={ this.displayEventForm }
      >
        <h3>{ this.props.day }</h3>
        <ul>
          { holidaysToDisplay }
          { events }
          { this.addForm() }
        </ul>
      </div>
    )
  }
}

export default Day;