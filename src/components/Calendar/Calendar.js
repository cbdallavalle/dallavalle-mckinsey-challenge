import React, { Component } from 'react';
import './Calendar.css';
import { calendarData } from '../../calendarData/calendarData'; 

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      currMonth: ''
    }
  }

  componentDidMount = () => {
    this.determineCurrentMonth();
  }

  determineCurrentMonth = () => {
    const date = new Date();
    const currMonth = calendarData.months[date.getMonth()];
    this.setState({ currMonth });
  }

  changeMonth = ({ target }) => {
    const direction = target.id;
  }

  render() {
    return (
      <article className="Calendar">
        <h1>Casey's Calendar</h1>
        <section>
          <i 
            className="fas fa-chevron-left" 
            id="backward" 
            onClick={ this.changeMonth }>
          </i>
          <h2> { this.state.currMonth } </h2>
          <i 
            className="fas fa-chevron-right" 
            id="forward" 
            onClick={ this.changeMonth }>
          </i>
        </section>
      </article>
    )
  }
}

export default Calendar;