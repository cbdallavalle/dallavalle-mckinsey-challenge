import React, { Component } from 'react';
import "./Day.css";

class Day extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      displayForm: false
    }
  }

  addEvent = () => {
    this.setState({ displayForm: true})
  }

  addForm = () => {
    return this.state.displayForm ?
      <form>
        <label htmlFor="event-name">Event name:</label>
        <input id="event-name" placeholder="Name of Event" />
        <div className="time-cont">
          <div>
            <label htmlFor="event-name">Start:</label>
            <select name="unit-time">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
              <option value="4">6</option>
              <option value="4">7</option>
              <option value="4">8</option>
              <option value="4">9</option>
              <option value="4">10</option>
              <option value="4">11</option>
              <option value="4">12</option>
            </select>
            <select>
              <option value="am">am</option>
              <option value="pm">pm</option>
            </select>
          </div>
          <div>
            <label htmlFor="event-name">End:</label>
              <select name="unit-time">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
                <option value="4">6</option>
                <option value="4">7</option>
                <option value="4">8</option>
                <option value="4">9</option>
                <option value="4">10</option>
                <option value="4">11</option>
                <option value="4">12</option>
              </select>
              <select>
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
    
    console.log(this.state.displayForm)
    return (
      <div 
        className="Day"
        onClick={this.addEvent}
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