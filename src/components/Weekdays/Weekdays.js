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

  componentWillReceiveProps = async() => {
    await this.getDaysInMonth(this.props.currMonth, this.props.currYear);
  }

  getDaysInMonth = (month, year) => {
     const date = new Date(year, month, 1);
     let currDaysInMonth = [];
     while (date.getMonth() === month) {
        const dateAllInfo = new Date(date);
        const dateInfo = {
          day: dateAllInfo.getDay(),
          date: dateAllInfo.getDate()
        }
        currDaysInMonth.push(dateInfo);
        date.setDate(date.getDate() + 1);
     }
     this.setState({ currDaysInMonth });
  }

  render() {
    const weekdays = calendarData.weekday.map(day => (
      <div className="weekday-column">
        <Day day={day} />
      </div>
    ))
    return <div className="Weekdays"> { weekdays } </div> 
  }
}

export default Weekdays;