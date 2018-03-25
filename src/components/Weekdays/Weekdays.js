import React, { Component } from 'react';
import './Weekdays.css';
import { calendarData } from '../../calendarData/calendarData'; 
import { Day } from '../Day/Day';


class Weekdays extends Component {
  constructor(props) {
    super(props);
  }

  getHolidays = (date) => {
    return calendarData.holidays.filter( event => {
      const dateOfEvent = event.date.split('/');
      return ( parseInt(dateOfEvent[0]) - 1) === this.props.currMonth && parseInt(dateOfEvent[1]) === date
    })
  }

  render() {
    const days = this.props.currDaysInMonth.map( (day, index) => (
      <Day 
        key={ index }
        day={day.date} 
        events={ this.getHolidays(day.date) }
      />
    ))

    return (
      <div className="Weekdays">  
        <h3>{this.props.day}</h3>
        {days}
      </div> 
    )
  }
}

export default Weekdays;