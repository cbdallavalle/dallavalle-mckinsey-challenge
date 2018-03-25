import React, { Component } from 'react';
import Weekdays from '../Weekdays/Weekdays';
import { calendarData } from '../../calendarData/calendarData'; 
import './Calendar.css';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      currYear: 2017,
      currMonth: 0,
      currDay: 0,
      currDaysInMonth: [],
      currEvents: []
    }
  }

  componentDidMount = async () => {
    await this.determineDate();
    await this.getDaysInMonth(this.state.currMonth, this.state.currYear);
  }

  determineDate = () => {
    const date = new Date();
    const currDay = date.getMonth()
    const currMonth = date.getMonth()
    const currYear = date.getFullYear()

    this.setState({ currDay, currMonth, currYear })
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

  createWeekdayColumns = () => {
    return calendarData.weekday.map( (day, index) => (
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
  }

  render() {

    return (
      <article className="Calendar">
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
          { this.createWeekdayColumns() }
        </section>
      </article>
    )
  }
}

export default Calendar;