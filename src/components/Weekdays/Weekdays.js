import React, { Component } from 'react';
import './Weekdays.css';
import { calendarData } from '../../calendarData/calendarData'; 
import { Day } from '../Day/Day';


class Weekdays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currDaysInMonth: [],
    }
  }

  render() {
    const days = this.props.currDaysInMonth.map( day => (
      <Day day={day.date} />
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