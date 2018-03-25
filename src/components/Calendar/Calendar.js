import React, { Component } from 'react';
import './Calendar.css';
import { calendarData } from '../../calendarData/calendarData'; 

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      currYear: 2017,
      currMonth: 0,
      currDaysInMonth: [],
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
  }

  getDaysInMonth(month, year) {
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
    console.log(this.state)
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
      </article>
    )
  }
}

export default Calendar;