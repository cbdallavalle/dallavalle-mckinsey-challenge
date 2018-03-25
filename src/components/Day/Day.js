import React, { Component } from 'react';
import "./Day.css";

class Day extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      displayForm: false,
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
    const event = {
      name: this.state.eventName,
      startTime: `${this.state.startTime}:00 ${this.state.startDay}`,
      endTime: `${this.state.endTime}:00 ${this.state.endDay}`
    };
    
    events.push(event)
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

  addForm = () => {
    return this.state.displayForm ?
      <form onSubmit={ this.addEvent }>
        <label htmlFor="event-name">Event name:</label>
        <input 
          id="event-name" 
          name="eventName"
          placeholder="Name of Event" 
          onChange={ this.updateEventName }
        />
        <div className="time-cont">
          <div>
            <label htmlFor="event-name">Start:</label>
            <select 
              name="startTime" 
              onChange={ this.handleTimeUpdate } 
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
              onChange={ this.handleTimeUpdate } 
            >
              <option value="am">am</option>
              <option value="pm">pm</option>
            </select>
          </div>
          <div>
            <label htmlFor="event-name">End:</label>
              <select 
                name="endTime"
                onChange={ this.handleTimeUpdate }
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
                onChange={ this.handleTimeUpdate }
              >
                <option value="am">am</option>
                <option value="pm">pm</option>
              </select>
            </div>
          </div>
          <button type="submit">Submit</button>
      </form>
    :
      <div>
      </div>
  }

  render() {
    const holidaysToDisplay = this.props.holidays && this.props.holidays.map( (holiday, index) => (<li className="holidays" key={ index }>{holiday.name}</li>))
    const events = this.state.events.map( (event, index) => <li className="event" key={ index }>{ event.name }</li>)
    
    console.log(this.state)
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