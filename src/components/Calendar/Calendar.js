import React, { Component } from 'react';
import Weekdays from '../Weekdays/Weekdays';
import './Calendar.css';

//I stored simple calendar data in a file called calendarData. This holds the 
  //weekday and month names, as well as, holidays for March and April.
import { calendarData } from '../../calendarData/calendarData'; 

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

// When the component mounts, this lifecycle method is called
// This exectues two other methods to find the current full date,
  // and to find the total days in the month.
  componentDidMount = async () => {
    await this.determineDate();
    await this.getDaysInMonth(this.state.currMonth, this.state.currYear);
  }

// determineDate finds the current day, month and year and sets state
  determineDate = () => {
    const date = new Date();
    const currDay = date.getMonth()
    const currMonth = date.getMonth()
    const currYear = date.getFullYear()

    this.setState({ currDay, currMonth, currYear })
  }

// When the forward or backward arrow is clicked in the html, this function fires.
  // changeMonth determines which direction to change the month to, and then sets
  // the state to reflect the new month.
// This function also calls getDaysInMonth, to find the number of days for the new month.
  changeMonth = ({ target }) => {
    const direction = target.id;
    let currMonth = this.state.currMonth;

    direction === "forward" ? currMonth += 1 : currMonth -= 1;
    this.setState({ currMonth });
    this.getDaysInMonth(currMonth, this.state.currYear)
  }

// getDaysInMonth gets a new date at the current month and year. Those properties are 
  // passed to it by the method that calls it.
// A while loop is responsible for incrementing the date. After the first day in the month
  // is found, the day (or the number that represents the weekday) and the date are found.
// Those are passed into an array to contain all days and then is saved in state.
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

//createWeekdayColumns maps over the names of the weekdays and returns each
  // weekday. 
// Each day that is mapped over is contained within it's own column
  // and is given only the days in the month that match the weekday.
// For example, March 1, 8, 15, 22, and 29 are all Thurdays, so the Weekday component
  // that is the Thursday comlumn, only recieves those dates.
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