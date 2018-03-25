import React, { Component } from 'react';
import './Calendar.css';
import { calendarData } from '../../calendarData/calendarData'; 
import Weekdays from '../Weekdays/Weekdays';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      currYear: 2017,
      currMonth: 0,
      currDaysInMonth: [],
      currEvents: []
    }
  }

  componentDidMount = async () => {
    await this.determineCurrentMonth();
    await this.determineCurrentYear();
    await this.getDaysInMonth(this.state.currMonth, this.state.currYear);
  }

  determineCurrentYear = () => {
    const date = new Date();
    const currYear = date.getFullYear()
    this.setState({ currYear })
  }

  determineCurrentMonth = () => {
    const date = new Date();
    const currMonth = date.getMonth()
    this.setState({ currMonth });
  }

  changeMonth = ({ target }) => {
    const direction = target.id;
    let currMonth = this.state.currMonth;
    direction === "forward" ? currMonth += 1 : currMonth -= 1;
    this.setState({ currMonth });
    this.getDaysInMonth(currMonth, this.state.currYear)
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
    const weekdayColumns = calendarData.weekday.map( (day, index) => (
      <div 
        className="weekday-column" 
        key={ index }
      >
        <Weekdays 
          currMonth={ this.state.currMonth }
          currDaysInMonth={ 
            this.state.currDaysInMonth.filter( day => day.day === index) 
          }
          day={ day }
        />
      </div>
    ))

    return (
      <article className="Calendar">
        <h1>Casey's Calendar</h1>
        <section>
          <i 
            className="fas fa-chevron-left" 
            id="backward" 
            onClick={ this.changeMonth }>
          </i>
          <h2> { calendarData.months[this.state.currMonth] } </h2>
          <i 
            className="fas fa-chevron-right" 
            id="forward" 
            onClick={ this.changeMonth }>
          </i>
        </section>
        <section className="dates-container">
          { weekdayColumns }
        </section>
      </article>
    )
  }
}

export default Calendar;