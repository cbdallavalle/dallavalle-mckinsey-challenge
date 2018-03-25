import React, { Component } from 'react';
import Day from '../Day/Day';
import { calendarData } from '../../calendarData/calendarData'; 
import './Weekdays.css';

class Weekdays extends Component {
  constructor(props) {
    super(props);
  }

// displayDays calls this function and passes it the specific date currently
  // being mapped over. getHolidays then filters all of the holidays that have a 
  // date matching the date it was passed. 
  getHolidays = (date) => {
    return calendarData.holidays.filter( holiday => {
      const dateOfHoliday = holiday.date.split('/');
      return ( parseInt(dateOfHoliday[0]) - 1) === this.props.currMonth && parseInt(dateOfHoliday[1]) === date
    })
  }

// displayDays maps over all of the days in the month and instantiates a Day component,
  // passing it the date and any holidays that may fall upon that date.
  displayDays = () => {
    return this.props.currDaysInMonth.map( (day, index) => (
      <Day 
        key={ index }
        day={day.date} 
        holidays={ this.getHolidays(day.date) }
      />
    ))
  }

  render() {
    return (
      <div className="Weekdays">  
        <h3>{this.props.day}</h3>
        { this.displayDays() }
      </div> 
    )
  }
}

export default Weekdays;